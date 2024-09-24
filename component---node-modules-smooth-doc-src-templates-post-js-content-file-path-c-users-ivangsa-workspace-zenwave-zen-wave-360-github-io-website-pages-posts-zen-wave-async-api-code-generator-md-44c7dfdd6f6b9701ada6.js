"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50],{89072:function(e,n,r){r.r(n),r.d(n,{default:function(){return l}});var t=r(27378),a=r(20951);function o(e){const n=Object.assign({p:"p",img:"img",h2:"h2",a:"a",div:"div",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre",h3:"h3",blockquote:"blockquote",em:"em"},(0,a.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.p,null,t.createElement(n.img,{src:"./ZenWave360-AsyncAPI-SpringCloudStreams.excalidraw.svg",alt:"AsyncAPI and Spring Cloud Streams 3"})),"\n",t.createElement(n.h2,{id:"api-first-with-asyncapi-and-zenwave-sdk",style:{position:"relative"}},t.createElement(n.a,{href:"#api-first-with-asyncapi-and-zenwave-sdk","aria-label":"api first with asyncapi and zenwave sdk permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"API-First with AsyncAPI and ZenWave SDK"),"\n",t.createElement(n.p,null,"With ZenWave's ",t.createElement(n.code,null,"spring-cloud-streams3")," and ",t.createElement(n.code,null,"jsonschema2pojo")," plugins you can generate:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Strongly typed ",t.createElement(n.strong,null,"business interfaces")),"\n",t.createElement(n.li,null,t.createElement(n.strong,null,"Payload DTOs")," and"),"\n",t.createElement(n.li,null,t.createElement(n.strong,null,"Header objects")," from AsyncAPI definitions."),"\n"),"\n",t.createElement(n.p,null,"It uses Spring Cloud Streams as default implementation, so it can connect to many different brokers via provided binders."),"\n",t.createElement(n.p,null,"And because everything is hidden behind interfaces we can encapsulate many Enterprise Integration Patterns:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Transactional Outbox: with MongoDB ChangeStreams, Plain SQL and Debezium SQL flavors"),"\n",t.createElement(n.li,null,"Business DeadLetter Queues: allowing you to route different business Exceptions to different DeadLetter queues for non-retrayable errors."),"\n",t.createElement(n.li,null,"Enterprise Envelope: when your organization uses a common Envelope for messages, you can still express your AsyncAPI definition in terms of your business payload."),"\n"),"\n",t.createElement(n.p,null,"See ",t.createElement(n.a,{href:"https://zenwave360.github.io/zenwave-sdk/plugins/asyncapi-spring-cloud-streams3/#options"},"AsyncAPI and Spring Cloud Streams 3 Configuration Options")," and ",t.createElement(n.a,{href:"/ZenWave-Code-Generator/Maven-Plugin"},"ZenWave Maven Plugin")," for more details."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-xml"},"<plugin>\r\n    <groupId>io.github.zenwave360.zenwave-sdk</groupId>\r\n    <artifactId>zenwave-sdk-maven-plugin</artifactId>\r\n    <version>${zenwave.version}</version>\r\n    <configuration>\r\n        <inputSpec>classpath:/model/asyncapi.yml</inputSpec>\r\n        <addCompileSourceRoot>true</addCompileSourceRoot>\r\n        <addTestCompileSourceRoot>true</addTestCompileSourceRoot>\r\n    </configuration>\r\n    <executions>\r\n        \x3c!-- DTOs --\x3e\r\n        <execution>\r\n            <id>generate-asyncapi-dtos</id>\r\n            <phase>generate-sources</phase>\r\n            <goals>\r\n                <goal>generate</goal>\r\n            </goals>\r\n            <configuration>\r\n                <generatorName>jsonschema2pojo</generatorName>\r\n                <configOptions>\r\n                    <modelPackage>io.zenwave360.example.core.domain.events</modelPackage>\r\n                    \x3c!--        <jsonschema2pojo.includeTypeInfo>true</jsonschema2pojo.includeTypeInfo>--\x3e\r\n                    <jsonschema2pojo.useLongIntegers>true</jsonschema2pojo.useLongIntegers>\r\n                </configOptions>\r\n            </configuration>\r\n        </execution>\r\n        \x3c!-- Generate PROVIDER --\x3e\r\n        <execution>\r\n            <id>generate-asyncapi</id>\r\n            <phase>generate-sources</phase>\r\n            <goals>\r\n                <goal>generate</goal>\r\n            </goals>\r\n            <configuration>\r\n                <generatorName>spring-cloud-streams3</generatorName>\r\n                <configOptions>\r\n                    <role>provider</role>\r\n                    <style>imperative</style>\r\n                    <transactionalOutbox>mongodb</transactionalOutbox>\r\n                    <modelPackage>io.zenwave360.example.core.domain.events</modelPackage>\r\n                    <producerApiPackage>io.zenwave360.example.core.outbound.events</producerApiPackage>\r\n                    <consumerApiPackage>io.zenwave360.example.adapters.commands</consumerApiPackage>\r\n                </configOptions>\r\n            </configuration>\r\n        </execution>\r\n    </executions>\r\n\r\n    <dependencies>\r\n        <dependency>\r\n            <groupId>io.github.zenwave360.zenwave-sdk.plugins</groupId>\r\n            <artifactId>asyncapi-spring-cloud-streams3</artifactId>\r\n            <version>${zenwave.version}</version>\r\n        </dependency>\r\n        <dependency>\r\n            <groupId>io.github.zenwave360.zenwave-sdk.plugins</groupId>\r\n            <artifactId>asyncapi-jsonschema2pojo</artifactId>\r\n            <version>${zenwave.version}</version>\r\n        </dependency>\r\n    </dependencies>\r\n</plugin>\n")),"\n",t.createElement(n.p,null,t.createElement(n.img,{src:"./spring-cloud-streams3-generated.png",alt:"ZenWave StreamCloudStreams AsyncAPI"})),"\n",t.createElement(n.h3,{id:"provider-vs-client",style:{position:"relative"}},t.createElement(n.a,{href:"#provider-vs-client","aria-label":"provider vs client permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Provider vs Client"),"\n",t.createElement(n.p,null,"Because broker based API definitions are inherently ",t.createElement(n.strong,null,"symmetrical")," it's difficult to establish the roles of client/server. ZenWave generates code based on ",t.createElement(n.code,null,"provider")," and ",t.createElement(n.code,null,"client")," roles, where a ",t.createElement(n.code,null,"provider"),' "produces events" and "consumes commands". See ',t.createElement(n.a,{href:"API-First-with-AsyncAPI"},"API-First with AsyncAPI"),' page for more details on "publish/subscribe", "producer/consumer" and "provider/client" roles.'),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"Write your AsyncAPI definitions from the ",t.createElement(n.code,null,"provider")," perspective and then configure the code generator to generate either a ",t.createElement(n.code,null,"provider")," or a ",t.createElement(n.code,null,"client"),"."),"\n"),"\n",t.createElement(n.p,null,"If you still find confusing which is a provider and a client just use this rule: In a given messaging scenario, there can be only one provider of a message, while there can be multiple clients.. If the provider is producing messages, use the ",t.createElement(n.code,null,"publish")," section. If the provider is consuming messages, use the ",t.createElement(n.code,null,"subscribe")," section."),"\n",t.createElement(n.h3,{id:"spring-cloud-streams-producer-using-generated-code-to-produce-messages",style:{position:"relative"}},t.createElement(n.a,{href:"#spring-cloud-streams-producer-using-generated-code-to-produce-messages","aria-label":"spring cloud streams producer using generated code to produce messages permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Spring Cloud Streams Producer: Using generated code to produce messages"),"\n",t.createElement(n.p,null,"On the producer side generates:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Interface ",t.createElement(n.code,null,"ICustomerEventsProducer")," to produce typed messages that uses your domain names: ",t.createElement(n.code,null,"onCustomerEvent"),", ",t.createElement(n.code,null,"CustomerEventPayload")," and ",t.createElement(n.code,null,"CustomerEventPayloadHeaders"),"."),"\n",t.createElement(n.li,null,"Producer ",t.createElement(n.code,null,"@Component")," ",t.createElement(n.code,null,"CustomerEventsProducer")," you can autowire in your services."),"\n"),"\n",t.createElement(n.p,null,t.createElement(n.strong,null,"In order to produce messages all you need to do is @Autowire the generated producer as part of your code.")),"\n",t.createElement(n.p,null,"This producer component, because sits behind a business oriented interface, can be implemented in different flavors and integration patterns like transactional outbox (for mongodb and sql) or enterprise envelop depending on how you configure zenwave maven generator."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-java"},"// Autogenerated: you can @Autowire it in your code\r\npublic interface ICustomerEventsProducer {\r\n    // headers object omitted for brevity\r\n    /**\r\n     * Customer Domain Events\r\n     */\r\n    boolean onCustomerEvent(CustomerEventPayload payload, CustomerEventPayloadHeaders headers);\r\n\r\n}\n")),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-java"},'// Autogenerated: add it to your autoscan packages\r\n@Component\r\npublic class CustomerEventsProducer implements ICustomerEventsProducer {\r\n    \r\n    // details omitted for brevity\r\n    \r\n    /**\r\n     * Customer Domain Events\r\n     */\r\n    public boolean onCustomerEvent(CustomerEventPayload payload, CustomerEventPayloadHeaders headers) {\r\n        // this is one of the many flavors, you shouldn\'t need to worry about the details\r\n        log.debug("Sending message to topic: {}", onCustomerEventBindingName);\r\n        Message message = MessageBuilder.createMessage(payload, new MessageHeaders(headers));\r\n        return streamBridge.send(onCustomerEventBindingName, message);\r\n    }\r\n}\n')),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-java"},'// Autowire this producer in your code\r\n@Autowired\r\nICustomerEventsProducer customerEventsProducer;\r\n\r\n// and use it to produce messages\r\nvar message = new CustomerEventPayload()\r\n        .withCustomerId("123")\r\n        // [...] set some more data\r\n        .withEventType(CustomerEventPayload.EventType.CREATED);\r\n// notice how headers are also strongly typed\r\nvar headers = new ICustomerEventsProducer.CustomerEventPayloadHeaders()\r\n        .entityId("123")\r\n        .commonHeader("value")\r\n        .set("undocumented-header", "value");\r\n\r\ncustomerEventsProducer.onCustomerEvent(message, headers);\n')),"\n",t.createElement(n.h3,{id:"spring-cloud-streams-consumer-using-generated-code-to-consume-messages",style:{position:"relative"}},t.createElement(n.a,{href:"#spring-cloud-streams-consumer-using-generated-code-to-consume-messages","aria-label":"spring cloud streams consumer using generated code to consume messages permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Spring Cloud Streams Consumer: Using generated code to consume messages"),"\n",t.createElement(n.p,null,"On the consumer side generates:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Functional Consumer ",t.createElement(n.code,null,"DoCustomerRequestConsumer"),"  for Spring Cloud Streams bindings."),"\n",t.createElement(n.li,null,"Business Interface ",t.createElement(n.code,null,"IDoCustomerRequestConsumerService")," you need to implement in order to receive strongly typed messages."),"\n"),"\n",t.createElement(n.p,null,"This Functional Consumer can abstract away different integration patterns like Business Dead Letter Queue and others... depending on how you configure zenwave maven generator."),"\n",t.createElement(n.p,null,t.createElement(n.strong,null,"To consume messages you need to implement generated business interface and register it as a Spring bean.")),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-java"},"// Autogenerated: you need to implement and provide this business interface\r\npublic interface IOnCustomerEventConsumerService {\r\n    /**\r\n     * Customer Domain Events\r\n     */\r\n    default void onCustomerEvent(CustomerEventPayload payload, CustomerEventPayloadHeaders headers) {};\r\n}\n")),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-java"},'// Autogenerated: add it to your autoscan packages and provide business interface implementation\r\n@Component("on-customer-event")\r\npublic class OnCustomerEventConsumer implements Consumer<Message<CustomerEventPayload>> {\r\n\r\n    // you need to implement this interface\r\n    protected IOnCustomerEventConsumerService service;\r\n\r\n    @Override\r\n    public void accept(Message<CustomerEventPayload> message) {\r\n        log.debug("Received message: {}", message);\r\n        try {\r\n            Object payload = message.getPayload();\r\n            if (payload instanceof CustomerEventPayload) {\r\n                var headers = new IOnCustomerEventConsumerService.CustomerEventPayloadHeaders();\r\n                headers.putAll(message.getHeaders());\r\n                service.onCustomerEvent((CustomerEventPayload) payload, headers);\r\n                return;\r\n            }\r\n            log.error("Received message without any business handler: [payload: {}, message: {}]", payload.getClass().getName(), message);\r\n        } catch (Exception e) {\r\n            // error handling and dead-letter-queue routing omitted for brevity\r\n        }\r\n    }\r\n}\n')),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-java"},"// Implement the business interface and add it to your context\r\n@Component\r\nclass DoCustomerRequestConsumerService implements IDoCustomerRequestConsumerService {\r\n\r\n    @Override\r\n    public void doCustomerRequest(CustomerRequestPayload payload, CustomerRequestPayloadHeaders headers) {\r\n        log.info(\"Received '{}' message with payload: {}\", payload.getClass(), payload);\r\n        // [...] do something with this message\r\n    }\r\n}\n")),"\n",t.createElement(n.h3,{id:"exception-handling-with-business-dead-letter-queue",style:{position:"relative"}},t.createElement(n.a,{href:"#exception-handling-with-business-dead-letter-queue","aria-label":"exception handling with business dead letter queue permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Exception Handling with Business Dead Letter Queue"),"\n",t.createElement(n.p,null,"ZenWave SDK consumers can be configured to route exceptions to different error queues. This is useful to manage non-retryable business exceptions so the stream processing is not interrupted. If your code throws an exception not configured for error routing it will be rethrow and it will follow the standard error handling mechanism for your particular Spring Cloud Stream binder."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-yaml"},"spring.cloud.stream.bindings:\r\n    on-customer-event-in-0:\r\n      destination: customer.events\r\n      content-type: application/json\r\n      # configuring error routing for this consumer\r\n      dead-letter-queue-error-map: >\r\n        {\r\n          'javax.validation.ValidationException': 'on-customer-event-validation-error-out-0',\r\n          'java.lang.Exception': 'on-customer-event-error-out-0'\r\n        }\n")),"\n",t.createElement(n.h2,{id:"populating-headers-at-runtime-automatically",style:{position:"relative"}},t.createElement(n.a,{href:"#populating-headers-at-runtime-automatically","aria-label":"populating headers at runtime automatically permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Populating Headers at Runtime Automatically"),"\n",t.createElement(n.p,null,"ZenWave SDK provides ",t.createElement(n.code,null,"x-runtime-expression")," for automatic header population at runtime. Values for this extension property are:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.code,null,"$message.payload#/<json pointer fragment>"),": follows the same format as AsyncAPI ",t.createElement(n.a,{href:"https://www.asyncapi.com/docs/reference/specification/v2.5.0#correlationIdObject"},"Correlation ID")," object."),"\n",t.createElement(n.li,null,t.createElement(n.code,null,"$tracingIdSupplier"),": will use the tracing id ",t.createElement(n.code,null,"java.function.Supplier")," configured in your Spring context."),"\n"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-yaml"},"    CustomerEventMessage:\r\n      name: CustomerEventMessage\r\n      // [...] other properties omitted for brevity\r\n      headers:\r\n        type: object\r\n        properties:\r\n          kafka_messageKey:\r\n            type: string\r\n            description: This one will be populated automatically at runtime\r\n            x-runtime-expression: $message.payload#/customer/id\r\n          tracingId:\r\n            type: string\r\n            description: This one will be populated automatically at runtime\r\n            x-runtime-expression: $tracingIdSupplier\n")),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-xml"},'<configOption>\r\n    <tracingIdSupplierQualifier>myTracingIdSupplier</tracingIdSupplierQualifier>\x3c!-- default is "tracingIdSupplier" --\x3e\r\n    <runtimeHeadersProperty>x-custom-runtime-expression</runtimeHeadersProperty>\x3c!-- you can also override this extension property name --\x3e\r\n</configOption>\n')),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-java"},'    @Bean("myTracingIdSupplier")\r\n    public Supplier tracingIdSupplier() {\r\n        return () -> "test-tracing-id";\r\n    }\n')),"\n",t.createElement(n.h3,{id:"inmemory-producers-as-testdoubles",style:{position:"relative"}},t.createElement(n.a,{href:"#inmemory-producers-as-testdoubles","aria-label":"inmemory producers as testdoubles permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"InMemory Producers as TestDoubles"),"\n",t.createElement(n.p,null,"Alongside the generated producer, ZenWave SDK also generates an ",t.createElement(n.em,null,"in-memory producer captor")," that can be used as a test double and a singletone manual context so you easily include them in your unit/integration tests."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-java"},"// generated class, you can use in your tests\r\npublic class ProducerInMemoryContext {\r\n\r\n    public static final ProducerInMemoryContext INSTANCE = new ProducerInMemoryContext();\r\n\r\n\r\n    private CustomerEventsProducerCaptor customerEventsProducerCaptor = new CustomerEventsProducerCaptor();\r\n\r\n    public <T extends ICustomerEventsProducer> T customerEventsProducer() {\r\n        return (T) customerEventsProducerCaptor;\r\n    }\r\n}\n")),"\n",t.createElement(n.p,null,"And use it in your tests to instantiate your service and perform assertions in your tests. You can find ",t.createElement(n.a,{href:"https://github.com/ivangsa/spring-boot-mongodb-elasticsearch-kafka-example/blob/e8fa9c89e5f3d72b90ac23749f636fc7640bdf39/src/test/java/io/zenwave360/example/core/implementation/CustomerUseCasesTest.java#L70"},"a working example here"),"."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-java"},"// example of how you can instantiate your service using the in-memory producer captor\r\npublic class InMemoryTestsManualContext extends InMemoryTestsConfig {\r\n\r\n    // [...] other beans omitted for brevity\r\n    \r\n    public CustomerUseCasesImpl customerUseCases() {\r\n        // instantiating a bean with in-memory dependencies\r\n        return new CustomerUseCasesImpl(customerRepository(), ProducerInMemoryContext.INSTANCE.customerEventsProducer());\r\n    }\r\n}\r\n\r\n// and using it in your tests to perform assertions\r\npublic class CustomerUseCasesTest {\r\n    \r\n    // this is the in-memory producer captor wired\r\n    CustomerEventsProducerCaptor customerEventsProducer = ProducerInMemoryContext.INSTANCE.customerEventsProducer();\r\n\r\n    @Test\r\n    void testCustomerUseCase() {\r\n        // [...] test your use case\r\n        Assertions.assertEquals(3, customerEventsProducer.getCapturedMessages(customerEventsProducer.onCustomerEventBindingName).size());\r\n    }\r\n}\n")),"\n",t.createElement(n.h2,{id:"enterprise-integration-patterns",style:{position:"relative"}},t.createElement(n.a,{href:"#enterprise-integration-patterns","aria-label":"enterprise integration patterns permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Enterprise Integration Patterns"),"\n",t.createElement(n.p,null,"Because access to the underlying implementation is encapsulated behind the generated interfaces, it's possible to implement many Enterprise Integration Patterns (EIP) on top of them."),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"Enterprise-Integration-Patterns/Transactional-Outbox"},"Transactional Outbox:")," for MongoDB, plain JDBC and Debezium SQL"),"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"Enterprise-Integration-Patterns/Business-Dead-Letter-Queue"},"Business DeadLetterQueue")),"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"Enterprise-Integration-Patterns/Enterprise-Envelop"},"Enterprise Envelop")),"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"Enterprise-Integration-Patterns/Async-Request-Response"},"Async Request/Response")," (coming soon with AsyncAPI v3)"),"\n"))}var s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?t.createElement(n,e,t.createElement(o,e)):o(e)};function i(e){let{children:n}=e;return n}function l(e){return t.createElement(i,e,t.createElement(s,e))}}}]);
//# sourceMappingURL=component---node-modules-smooth-doc-src-templates-post-js-content-file-path-c-users-ivangsa-workspace-zenwave-zen-wave-360-github-io-website-pages-posts-zen-wave-async-api-code-generator-md-44c7dfdd6f6b9701ada6.js.map