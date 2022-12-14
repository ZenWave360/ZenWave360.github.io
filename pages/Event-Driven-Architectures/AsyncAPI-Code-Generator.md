---
layout: page
title: AsyncAPI Code Generator
permalink: /Event-Driven-Architectures/AsyncAPI-Code-Generator
parent: Event Driven Architectures
nav_order: 3
---

![AsyncAPI and Spring Cloud Streams 3](https://zenwave360.github.io/zenwave-code-generator/docs/ZenWave360-AsyncAPI-SpringCloudStreams.excalidraw.svg)


## API-First with AsyncAPI and ZenWave Code Generator

With ZenWave's `spring-cloud-streams3` and `jsonschema2pojo` generator plugins you can generate:
- Strongly typed **business interfaces**
- **Payload DTOs** and 
- **Header objects** from AsyncAPI definitions.

It uses Spring Cloud Streams as default implementation so it can connect to many different brokers via provided binders.

And because everything is hidden behind interfaces we can encapsulate many Enterprise Integration Patterns:

- Transactional Outbox: with MongoDB ChangeStreams, Plain SQL and Debezium SQL flavors
- Business DeadLetter Queues: allowing you to route different business Exceptions to different DeadLetter queues for non-retrayable errors.
- Enterprise Envelope: when your organization uses a common Envelope for messages, you can still express your AsyncAPI definition in terms of your business payload.


See [AsyncAPI and Spring Cloud Streams 3 Configuration Options](https://zenwave360.github.io/zenwave-code-generator/plugins/asyncapi-spring-cloud-streams3/#options) and [ZenWave Maven Plugin](/ZenWave-Code-Generator/Maven-Plugin) for more details.

```xml
<plugin>
    <groupId>io.github.zenwave360.zenwave-code-generator</groupId>
    <artifactId>zenwave-code-generator-mojo</artifactId>
    <version>${zenwave.version}</version>
    <executions>
        <execution>
            <id>generate-asyncapi-producer</id>
            <phase>generate-sources</phase>
            <goals>
                <goal>generate</goal>
            </goals>
            <plugin>
                <generatorName>spring-cloud-streams3</generatorName>
                <inputSpec>${pom.basedir}/src/main/resources/model/asyncapi.yml</inputSpec>
                <configOptions>
                    <role>provider</role><!-- provider or client -->
                    <style>imperative</style>
                    <apiPackage>io.zenwave360.example.adapters.events.provider</apiPackage>
                    <modelPackage>io.zenwave360.example.adapters.events.model</modelPackage>
                </configOptions>
            </plugin>
        </execution>
        <execution>
            <id>generate-asyncapi-producer-dtos</id>
            <phase>generate-sources</phase>
            <goals>
                <goal>generate</goal>
            </goals>
            <plugin>
                <generatorName>jsonschema2pojo</generatorName>
                <inputSpec>${pom.basedir}/src/main/resources/model/asyncapi.yml</inputSpec>
                <configOptions>
                    <modelPackage>io.zenwave360.example.adapters.events.model</modelPackage>
                </configOptions>
            </plugin>
        </execution>
    </executions>
    <dependencies>
        <dependency>
            <groupId>io.github.zenwave360.zenwave-code-generator.plugins</groupId>
            <artifactId>asyncapi-spring-cloud-streams3</artifactId>
            <version>${zenwave.version}</version>
        </dependency>
        <dependency>
            <groupId>io.github.zenwave360.zenwave-code-generator.plugins</groupId>
            <artifactId>asyncapi-jsonschema2pojo</artifactId>
            <version>${zenwave.version}</version>
        </dependency>
    </dependencies>
</plugin>
```

![ZenWave StreamCloudStreams AsyncAPI](/resources/spring-cloud-streams3-generated.png)

### Provider vs Client

Because broker based API definitions are inherently **symmetrical** it's difficult to establish the roles of client/server. ZenWave generates code based on `provider` and `client` roles, where a `provider` "produces events" and "consumes commands". See [API-First with AsyncAPI](API-First-with-AsyncAPI) page for more details on "publish/subscribe", "producer/consumer" and "provider/client" roles.

> Write your AsyncAPI definitions from the `provider` perspective and then configure the code generator to generate either a `provider` or a `client`.

NOTE: a `provider` can both produce (events) and consume (requests/commands) messages for the same API and vice-versa.

### Spring Cloud Streams Producer: Using generated code to produce messages

On the producer side generates:

- Interface `ICustomerEventsProducer` to produce typed messages that uses your domain names: `onCustomerEvent`, `CustomerEventPayload` and `CustomerEventPayloadHeaders`.
- Producer _@Component_ `CustomerEventsProducer` you can autowire in your services.

**In order to produce messages all you need to do is @Autowire the generated producer as part of your code.**

This producer component, because sits behind a business oriented interface, can be implemented in different flavors and integration patterns like transactional outbox (for mongodb and sql) or enterprise envelop depending on how you configure zenwave maven generator.

```java
// Autogenerated: you can @Autowire it in your code
public interface ICustomerEventsProducer {
    // headers object omitted for brevity
    /**
     * Customer Domain Events
     */
    boolean onCustomerEvent(CustomerEventPayload payload, CustomerEventPayloadHeaders headers);

}
```

```java
// Autogenerated: add it to your autoscan packages
@Component
public class CustomerEventsProducer implements ICustomerEventsProducer {
    
    // details omitted for brevity
    
    /**
     * Customer Domain Events
     */
    public boolean onCustomerEvent(CustomerEventPayload payload, CustomerEventPayloadHeaders headers) {
        // this is one of the many flavors, you shouldn't need to worry about the details
        log.debug("Sending message to topic: {}", onCustomerEventBindingName);
        Message message = MessageBuilder.createMessage(payload, new MessageHeaders(headers));
        return streamBridge.send(onCustomerEventBindingName, message);
    }
}
```

```java
// Autowire this producer in your code
@Autowired
ICustomerEventsProducer customerEventsProducer;

// and use it to produce messages
var message = new CustomerEventPayload()
        .withCustomerId("123")
        // [...] set some more data
        .withEventType(CustomerEventPayload.EventType.CREATED);
// notice how headers are also strongly typed
var headers = new ICustomerEventsProducer.CustomerEventPayloadHeaders()
        .entityId("123")
        .commonHeader("value")
        .set("undocumented-header", "value");

customerEventsProducer.onCustomerEvent(message, headers);
```


### Spring Cloud Streams Consumer: Using generated code to consume messages

On the consumer side generates:

- Functional Consumer `DoCustomerRequestConsumer`  for Spring Cloud Streams bindings.
- Business Interface `IDoCustomerRequestConsumerService` you need to implement in order to receive strongly typed messages.

This Functional Consumer can abstract away different integration patterns like Business Dead Letter Queue and others... depending on how you configure zenwave maven generator.

**To consume messages you need to implement generated business interface and register it as a Spring bean.**

```java
// Autogenerated: you need to implement and provide this business interface
public interface IOnCustomerEventConsumerService {
    /**
     * Customer Domain Events
     */
    default void onCustomerEvent(CustomerEventPayload payload, CustomerEventPayloadHeaders headers) {};
}
```

```java
// Autogenerated: add it to your autoscan packages and provide business interface implementation
@Component("on-customer-event")
public class OnCustomerEventConsumer implements Consumer<Message<CustomerEventPayload>> {

    // you need to implement this interface
    protected IOnCustomerEventConsumerService service;

    @Override
    public void accept(Message<CustomerEventPayload> message) {
        log.debug("Received message: {}", message);
        try {
            Object payload = message.getPayload();
            if (payload instanceof CustomerEventPayload) {
                var headers = new IOnCustomerEventConsumerService.CustomerEventPayloadHeaders();
                headers.putAll(message.getHeaders());
                service.onCustomerEvent((CustomerEventPayload) payload, headers);
                return;
            }
            log.warn("Received message without any business handler: [payload: {}, message: {}]", payload.getClass().getName(), message);
        } catch (Exception e) {
            // error handling and dead-letter-queue routing omitted for brevity
        }
    }
}
```

```java
// Implement the business interface and add it to your context
@Component
class DoCustomerRequestConsumerService implements IDoCustomerRequestConsumerService {

    @Override
    public void doCustomerRequest(CustomerRequestPayload payload, CustomerRequestPayloadHeaders headers) {
        log.info("Received '{}' message with payload: {}", payload.getClass(), payload);
        // [...] do something with this message
    }
}
```

## Enterprise Integration Patterns

Because access to the underlying implementation is encapsulated behind the generated interfaces, it's possible to implement many Enterprise Integration Patterns (EIP) on top of them.

- [Transactional Outbox:](Enterprise-Integration-Patterns/Transactional-Outbox) for MongoDB, plain JDBC and Debezium SQL
- [Business DeadLetterQueue](Enterprise-Integration-Patterns/Business-Dead-Letter-Queue)
- [Enterprise Envelop](Enterprise-Integration-Patterns/Enterprise-Envelop)
- [Async Request/Response](Enterprise-Integration-Patterns/Async-Request-Response) (coming soon with AsyncAPI v3)
