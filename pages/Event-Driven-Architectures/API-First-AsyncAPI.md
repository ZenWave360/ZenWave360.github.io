---
layout: page
title: API-First with AsyncAPI
permalink: /Event-Driven-Architectures/API-First-with-AsyncAPI
parent: Event Driven Architectures
nav_order: 2
---

![AsyncAPI and Spring Cloud Streams 3](https://zenwave360.github.io/zenwave-code-generator/docs/ZenWave360-AsyncAPI-SpringCloudStreams.excalidraw.svg)

# API-First with AsyncAPI

- [API-First with AsyncAPI](#api-first-with-asyncapi)
  - [Broker-based APIs are Symmetric](#broker-based-apis-are-symmetric)
  - [Understanding AsyncAPI Definition](#understanding-asyncapi-definition)
    - [Info](#info)
    - [Servers](#servers)
    - [Channels: Publish / Subscribe](#channels-publish--subscribe)
    - [Messages](#messages)
    - [Message Payloads / Schemas](#message-payloads--schemas)
    - [Reusing Configurations: Operation Traits, Message Traits...](#reusing-configurations-operation-traits-message-traits)
  - [Different Styles of Message Payloads](#different-styles-of-message-payloads)
    - [Event Sourcing Messages](#event-sourcing-messages)
    - [Notification Messages](#notification-messages)
    - [State Transfer Messages](#state-transfer-messages)
  - [API-First with AsyncAPI and ZenWave Code Generator](#api-first-with-asyncapi-and-zenwave-code-generator)
    - [Spring Cloud Streams Producer (Generated Code)](#spring-cloud-streams-producer-generated-code)
    - [Spring Cloud Streams Consumer (Generated Code)](#spring-cloud-streams-consumer-generated-code)
  - [Enterprise Integration Patterns](#enterprise-integration-patterns)


## Broker-based APIs are Symmetric

Because APIs mediated by a broker are inherently **symmetric** it's difficult to establish the roles of client/server: what represents a `publish` operation from one side will be a `subscribe` operation seen from the other side. Also, a given service can act as a publisher and subscriber on the same API.

For these reasons, to avoid defining the same API operations multiple times from each perspective, we propose to define the API only once from the perspective of the provider of the functionality, which may be a producer, a consumer or both. 

Some definitions:

- SERVICE: An independent piece of software, typically a microservice, that provides a set of capabilities to other services.
- PROVIDER: The service that implements the functionality of the API. It may be accepting asynchronous command request or publishing business domain events.
- CLIENT/s: The service/s that makes use of the funcionality of the API. It may be requesting asynchronous commands or subscribing to business domain events.
- PRODUCER: A service that writes a given message.
- CONSUMER: A service that reads a given message.

> Define your AsyncAPI from the perspective of the **PROVIDER** of the functionality, which may be a producer, a consumer or both. Share this definition with your **CLIENTS**.


Use the table to understand which section of AsyncAPI (publish or subscribe) to use for each topic, and which role (provider or client) to use on the plugin plugin.

|                              | Events                | Commands                |
|------------------------------|-----------------------|-------------------------|
| Provider                     | Produces (publish)    | Consumes (subscribe)    |
| Client                       | Consumes (subscribe)  | Produces (publish)      |
| OperationId Suggested Prefix | **on**&lt;Event Name> | **do**&lt;Command Name> |

## Understanding AsyncAPI Definition

If you are familiar with OpenAPI you may find useful the following image borrowed from AsynAPI documentation (click image to follow):

[![OpenAPI and AsyncAPI](/resources/openapi-asyncapi.png)](https://www.asyncapi.com/docs/tutorials/getting-started/coming-from-openapi)

### Info

Document your API: name, purpouse, contact details, license...

### Servers

Document where your API will be deployed and required security...

### Channels: Publish / Subscribe

Each channel represent one broker topic, channel, queue... where you are about to publish or subscribe to.

Use use above table to understand which section, publish or subscribe, you may want to use.

In a nutshell: providers publish events and subscribes to commands/queries.

### Messages

Use Messages to describe **Headers**, **Payload Schema** and **Content Type**. You can also include examples, descriptions and protocol-specific binding documentation... 

```yml
components:
  messages:
    turnOnOff:
      name: turnOnOff
      title: Turn on/off
      summary: Command a particular streetlight to turn the lights on or off.
      headers:
        type: object
        properties:
          my-app-header:
            type: string
      payload:
        $ref: "#/components/schemas/turnOnOffPayload"

```

### Message Payloads / Schemas

You can define message payloads as:

- Inline components/schemas in the same familiar way you do in OpenAPI
- External files: both `json-schema` and `avro schemas` (.avsc) are supported

```yml
components:
  messages:
    MessageWithAsyncAPISchema:
      payload:
        $ref: "#/components/schemas/turnOnOffPayload" ## asyncapi/inline schema
    MessageWithExternalJsonSchema:
      schemaFormat: 'application/schema+json;version=draft-07'
      payload:
        $ref: "some/external/file.schema" ## a json-schema file
    MessageWithAvroSchema:
      schemaFormat: application/vnd.apache.avro+json;version=1.9.0
      payload:
        $ref: "v1/imports/file.avsc" ## and avro schema file
```


### Reusing Configurations: Operation Traits, Message Traits...

Operation Traits, Message Traits are an excelent way to reuse chunks of configuration between different operations or messages.

For instance if various messages share some common headers, you can configure them as Message Traits:

```yml
components:
  messages:
    CustomerEventMessage:
      name: CustomerEventMessage
      title: Async Event for a Customer
      summary: Async Event for a Customer
      schemaFormat: application/vnd.aai.asyncapi;version=2.4.0
      traits:
        - $ref: '#/components/messageTraits/CommonHeaders' # 'CommonHeaders' contents will replace 'traits' property
      payload:
        $ref: '#/components/schemas/CustomerEventPayload'

  messageTraits:
    CommonHeaders:
      headers:
        type: object
        properties:
          my-app-header:
            type: integer
            minimum: 0
            maximum: 100
```

And the same concept applies to Operation Traits.

## Different Styles of Message Payloads

### Event Sourcing Messages

### Notification Messages


### State Transfer Messages

## API-First with AsyncAPI and ZenWave Code Generator

With ZenWave's `spring-cloud-streams3` and `jsonschema2pojo` generator and [maven plugin](/ZenWave-Code-Generator/Maven-Plugin) you can generate strongly typed business interfaces and DTOs from AsyncAPI definitions.

It encapsulates SpringCloud Streams 3 API creating abstractions for many Enterprise Integration Patterns for Event Driven Architectures like: Transactional Outbox, Business DeadLetterQueue, Enterprise Envelop, Async Request/Response... behind business oriented interfaces.


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

### Spring Cloud Streams Producer (Generated Code)

On the producer side generates:

- Interface `ICustomerEventsProducer` to produce typed messages that uses your domain names: `onCustomerEvent`, `CustomerEventPayload`.
- Producer _@Component_ `CustomerEventsProducer` you can autowire in your services.

This producer component can implement different integration patterns like transactional outbox (for mongodb and sql) or enterprise envelop depending on how you configure zenwave maven generator.

```java
// Autogenerated: you can @Autowire it in your code
public interface ICustomerEventsProducer {

    boolean onCustomerEvent(CustomerEventPayload payload, Header... headers);

}
```

```java
// Autogenerated: add it to your autoscan packages
@Component
public class CustomerEventsProducer implements ICustomerEventsProducer {

    @Autowired
    private StreamBridge streamBridge;
    public String onCustomerEventBindingName = "on-customer-event-out-0";

    public boolean onCustomerEvent(CustomerEventPayload payload, Header... headers) {
        Message message = MessageBuilder.createMessage(payload, asMessageHeaders(headers));
        return streamBridge.send(onCustomerEventBindingName, message);
    }

    protected MessageHeaders asMessageHeaders(Header... headers) {
        Map<String, Object> map = Header.asMap(headers);
        return new MessageHeaders(map);
    }
}

```


### Spring Cloud Streams Consumer (Generated Code)

On the consumer side generates:

- Functional Consumer `DoCustomerRequestConsumer`  for Spring Cloud Streams bindings.
- Business Interface `IDoCustomerRequestConsumerService` you need to implement in order to receive strongly typed messages.

This Functional Consumer can abstract away different integration patterns like Business Dead Letter Queue and others... depending on how you configure zenwave maven generator.

```java
// Autogenerated: implement this interface to receive typed messages
public interface IDoCustomerRequestConsumerService {

    default void doCustomerRequest(CustomerRequestPayload payload, Map<String, Object> headers) {};
}

```

```java
// Autogenerated: add it to your auto-scan packages and implement interface above
@Component("do-customer-request")
public class DoCustomerRequestConsumer implements Consumer<Message<CustomerRequestPayload>> {

    private Logger log = LoggerFactory.getLogger(getClass());

    @Autowired
    private IDoCustomerRequestConsumerService service;

    @Autowired
    private StreamBridge streamBridge;

    @Value("${spring.cloud.stream.bindings.do-customer-request-in-0.dead-letter-queue-binding-name:null}")
    private String deadLetterQueue;

    @Override
    public void accept(Message<CustomerRequestPayload> message) {
        log.debug("Received message: {}", message);
        try {
            Object payload = message.getPayload();
            if(payload instanceof CustomerRequestPayload) {
                service.doCustomerRequest((CustomerRequestPayload) payload, message.getHeaders());
                return;
            }
            log.warn("Received message without any business handler: [payload: {}, message: {}]", payload.getClass().getName(), message);
        } catch (Exception e) {
            log.error("Error processing message: {}", message, e);
            if (streamBridge != null && deadLetterQueue != null) {
                log.debug("Sending message to dead letter queue: {}", deadLetterQueue);
                try {
                    streamBridge.send(deadLetterQueue, MessageBuilder.fromMessage(message).build());
                } catch (Exception e1) {
                    log.error("Error sending message to dead letter queue: {}", deadLetterQueue, e1);
                }
            }
            throw e;
        }
    }
}
```

## Enterprise Integration Patterns

Because access to the underlying broker is encapsulated behind the generated interfaces, it's possible to implement many Enterprise Integration Patterns (EIP) on top of them.

- Transactional Outbox: for mongodb and jdbc
- Business DeadLetterQueue
- Enterprise Envelop (comming soon)
- Async Request/Response (comming soon)