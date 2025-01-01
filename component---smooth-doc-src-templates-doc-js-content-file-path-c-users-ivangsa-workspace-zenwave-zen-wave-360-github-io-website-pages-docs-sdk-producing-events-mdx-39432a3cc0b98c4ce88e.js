"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[265],{55183:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(27378),a=t(20951),o=t(16376);function i(e){const n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h1,{id:"producing-domain-events",style:{position:"relative"}},r.createElement(n.a,{href:"#producing-domain-events","aria-label":"producing domain events permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Producing Domain Events"),"\n",r.createElement(n.p,null,"Producing Domain Events with AsyncAPI and ZenWave Maven Plugin"),"\n",r.createElement(n.p,null,"In this section you will learn how to produce domain events from your services and publish them to a message broker."),"\n",r.createElement(n.p,null,"We will be using AsyncAPI specification to define our message structure, and use ZenWave SDK Maven Plugin to generate models (DTOs) and a producer implementation from your API-First definition."),"\n",r.createElement(n.h2,{id:"using-zenwave-zdl-as-definition-language-for-asyncapi",style:{position:"relative"}},r.createElement(n.a,{href:"#using-zenwave-zdl-as-definition-language-for-asyncapi","aria-label":"using zenwave zdl as definition language for asyncapi permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Using ZenWave ZDL as Definition Language for AsyncAPI"),"\n",r.createElement(n.p,null,"While AsyncAPI is the source of truth for Event-Driven communication, with ",r.createElement(n.a,{href:"https://www.zenwave360.io/zenwave-sdk/plugins/zdl-to-asyncapi/"},"ZDLToAsyncAPIPlugin")," plugins you can create complete draft version of AsyncAPI specification from your annotated Services and Events."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-shell"},"jbang zw -p io.zenwave360.sdk.plugins.ZDLToAsyncAPIPlugin \\\r\n    zdlFile=src/main/resources/model/orders-model.zdl \\\r\n    idType=integer \\\r\n    idTypeFormat=int64 \\\r\n    targetFile=src/main/resources/model/asyncapi.yml\n")),"\n",r.createElement(n.p,null,"For instance the following ZDL model:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-zdl"},'service OrdersService for (CustomerOrder) {\r\n    // only emited events will be included in the asyncapi definition\r\n    updateOrder(id, CustomerOrderInput) CustomerOrder withEvents OrderStatusUpdated\r\n}\r\n\r\n@asyncapi({channel: "OrderUpdatesChannel", topic: "orders.order_updates"})\r\nevent OrderStatusUpdated {\r\n    id String\r\n    dateTime Instant required\r\n    status OrderStatus required\r\n    previousStatus OrderStatus\r\n}\n')),"\n",r.createElement(n.p,null,"Will generate the following sections in an AsyncAPI definition:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"An ",r.createElement(n.code,null,"schema")," named ",r.createElement(n.code,null,"OrderStatusUpdated")," with a ",r.createElement(n.code,null,"payload")," containing the ",r.createElement(n.code,null,"id"),", ",r.createElement(n.code,null,"dateTime"),", ",r.createElement(n.code,null,"status")," and ",r.createElement(n.code,null,"previousStatus")," fields."),"\n",r.createElement(n.li,null,"A ",r.createElement(n.code,null,"message")," named ",r.createElement(n.code,null,"OrderStatusUpdatedMessage")," pointing to ",r.createElement(n.code,null,"OrderStatusUpdated")," schema."),"\n",r.createElement(n.li,null,"An a ",r.createElement(n.code,null,"Channel")," named ",r.createElement(n.code,null,"OrderUpdatesChannel")," containing a reference to the ",r.createElement(n.code,null,"OrderStatusUpdatedMessage")," message."),"\n",r.createElement(n.li,null,"It also will generate an ",r.createElement(n.code,null,"Operation")," named ",r.createElement(n.code,null,"onOrderStatusUpdated")," with and action ",r.createElement(n.code,null,"send"),"to the ",r.createElement(n.code,null,"OrderUpdatesChannel")," channel."),"\n"),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"💡 This is as a compact format as it can get!! Saving you a lot of typing and giving you very concise representation of your events."),"\n"),"\n",r.createElement(n.h2,{id:"api-first-code-generator-from-asyncapi",style:{position:"relative"}},r.createElement(n.a,{href:"#api-first-code-generator-from-asyncapi","aria-label":"api first code generator from asyncapi permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"API-First Code Generator from AsyncAPI"),"\n",r.createElement(n.p,null,"You can use ",r.createElement(n.a,{href:"https://www.zenwave360.io/zenwave-sdk/plugins/asyncapi-spring-cloud-streams3/#maven-plugin-configuration-api-first"},"API-First AsyncAPI Maven Plugin")," to generate models (DTOs) and a producer implementation."),"\n",r.createElement(n.p,null,"Configure ",r.createElement(n.code,null,"zenwave-sdk-maven-plugin")," as follows:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Set ",r.createElement(n.code,null,"inputSpec")," to point to your AsyncAPI specification. You can use ",r.createElement(n.code,null,"classpath"),", ",r.createElement(n.code,null,"file"),", ",r.createElement(n.code,null,"http(s)")," or ",r.createElement(n.code,null,"https")," as inputSpec."),"\n",r.createElement(n.li,null,"Add ",r.createElement(n.code,null,"asyncapi-spring-cloud-streams3")," and ",r.createElement(n.code,null,"asyncapi-jsonschema2pojo")," as dependencies."),"\n",r.createElement(n.li,null,"Add two executions to generate the models (DTOs) and an Events Producer implementation."),"\n",r.createElement(n.li,null,"Configure ",r.createElement(n.code,null,"modelPackage"),", ",r.createElement(n.code,null,"producerApiPackage")," and ",r.createElement(n.code,null,"consumerApiPackage")," to match your project structure."),"\n",r.createElement(n.li,null,"Configure ",r.createElement(n.code,null,"role")," to ",r.createElement(n.code,null,"provider")," or ",r.createElement(n.code,null,"client")," if you are generating code from a third-party specification. If you are defining ",r.createElement(n.code,null,"all")," the operations (client and provider) then you are acting as the ",r.createElement(n.code,null,"provider")," which is the default."),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-xml"},"<plugin>\r\n    <groupId>io.github.zenwave360.zenwave-sdk</groupId>\r\n    <artifactId>zenwave-sdk-maven-plugin</artifactId>\r\n    <version>${zenwave.version}</version>\r\n    <configuration>\r\n        <inputSpec>classpath:/apis/asyncapi.yml</inputSpec>\x3c!-- classpath, file, http(s) --\x3e\r\n        <addCompileSourceRoot>true</addCompileSourceRoot>\x3c!-- default is true --\x3e\r\n        <addTestCompileSourceRoot>true</addTestCompileSourceRoot>\x3c!-- default is true --\x3e\r\n    </configuration>\r\n\r\n    <executions>\r\n        \x3c!-- DTOs --\x3e\r\n        <execution>\r\n            <id>generate-asyncapi-provider-dtos</id>\r\n            <phase>generate-sources</phase>\r\n            <goals>\r\n                <goal>generate</goal>\r\n            </goals>\r\n            <configuration>\r\n                <generatorName>jsonschema2pojo</generatorName>\r\n                <configOptions>\r\n                    <modelPackage>${basePackage}.core.domain.events</modelPackage>\r\n                    <jsonschema2pojo.isUseJakartaValidation>true</jsonschema2pojo.isUseJakartaValidation>\r\n                    <jsonschema2pojo.useLongIntegers>true</jsonschema2pojo.useLongIntegers>\r\n                </configOptions>\r\n            </configuration>\r\n        </execution>\r\n        \x3c!-- Generate PROVIDER --\x3e\r\n        <execution>\r\n            <id>generate-asyncapi-provider-implementation</id>\r\n            <phase>generate-sources</phase>\r\n            <goals><goal>generate</goal></goals>\r\n            <configuration>\r\n                <generatorName>spring-cloud-streams3</generatorName>\r\n                <configOptions>\r\n                    <role>provider</role>\r\n                    <style>imperative</style>\r\n                    <modelPackage>${basePackage}.core.domain.events</modelPackage>\r\n                    <producerApiPackage>${basePackage}.core.outbound.events</producerApiPackage>\r\n                    <consumerApiPackage>${basePackage}.adapters.commands</consumerApiPackage>\r\n                </configOptions>\r\n            </configuration>\r\n        </execution>\r\n    </executions>\r\n\r\n    \x3c!-- add any sdk plugin (custom or standard) as dependency here --\x3e\r\n    <dependencies>\r\n        <dependency>\r\n            <groupId>io.github.zenwave360.zenwave-sdk.plugins</groupId>\r\n            <artifactId>asyncapi-spring-cloud-streams3</artifactId>\r\n            <version>${zenwave.version}</version>\r\n        </dependency>\r\n        <dependency>\r\n            <groupId>io.github.zenwave360.zenwave-sdk.plugins</groupId>\r\n            <artifactId>asyncapi-jsonschema2pojo</artifactId>\r\n            <version>${zenwave.version}</version>\r\n        </dependency>\r\n    </dependencies>\r\n</plugin>\n")),"\n",r.createElement(n.h2,{id:"producing-domain-events-with-generated-code",style:{position:"relative"}},r.createElement(n.a,{href:"#producing-domain-events-with-generated-code","aria-label":"producing domain events with generated code permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Producing Domain Events with Generated Code"),"\n",r.createElement(n.p,null,"By default, ZenWave generates Spring Cloud Streams implementation that counts with different binders for virtually any message broker:"),"\n",r.createElement(o.Ee,{src:"https://www.zenwave360.io/zenwave-sdk/docs/ZenWave360-AsyncAPI-SpringCloudStreams.excalidraw.svg",alt:"ZenWave360 AsyncAPI Spring Cloud Streams"}),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"📦 target/generated-sources/zenwave\r\n    📦 src/main/java\r\n         └─ <modelPackage> models (DTOs)\r\n            └─ AddressDTO.java\r\n            └─ CustomerDTO.java\r\n         └─ <producerPackage>\r\n             └─ ICustomerEventsProducer (interface and header objects)\r\n             └─ CustomerEventsProducer (spring-cloud-streams producer)\r\n   📦 src/test/java\r\n         └─ <producerPackage>\r\n             └─ CustomerEventsProducerCaptor (in-memory producer/captor)\r\n             └─ EventsProducerInMemoryContext (spring-boot/manual context)\n")),"\n",r.createElement(n.p,null,"With this schema you just need to:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Autowire ",r.createElement(n.code,null,"ICustomerEventsProducer")," wherever you would like to produce events."),"\n",r.createElement(n.li,null,"Add ",r.createElement(n.code,null,"CustomerEventsProducer")," to your Spring Boot context and set any required configuration for ",r.createElement(n.code,null,"spring.streams.bindings")," in ",r.createElement(n.code,null,"application.yml"),"."),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-java"},"public CustomerServiceImpl {\r\n    @Autowired\r\n    ICustomerEventsProducer eventsProducer;\r\n    // ...\r\n    public Customer createCustomer(Customer input) {\r\n        // ...\r\n        eventsProducer.onCustomerEvent(customerEvent);\r\n        // ...\r\n    }\r\n}\n")),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-yaml"},"spring:\r\n    stream:\r\n      bindings:\r\n        on-order-event-out-0: ## you can get this name from 'CustomerEventsProducer' class\r\n          destination: orders.orders\n")),"\n",r.createElement(n.h2,{id:"inmemory-event-producer-captor-for-your-tests",style:{position:"relative"}},r.createElement(n.a,{href:"#inmemory-event-producer-captor-for-your-tests","aria-label":"inmemory event producer captor for your tests permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"InMemory Event Producer (Captor) for your Tests"),"\n",r.createElement(n.p,null,"ZenWave SDK Maven Plugin will generate an in-memory implementation of your Events Producer that you can use in your tests to capture events and perform assertions on them. All this without a message broker, TestContainers or Mockito."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-java"},'@Configuration\r\n@Profile("in-memory")\r\npublic class ServicesInMemoryConfig extends RepositoriesInMemoryConfig {\r\n\r\n\tprotected final EventsProducerInMemoryContext eventsProducerInMemoryContext = new EventsProducerInMemoryContext();\r\n\r\n\tprotected final CustomerServiceImpl customerService = new CustomerServiceImpl(\r\n            customerRepository(),\r\n\t\t\teventsProducerInMemoryContext.customerEventsProducer());\r\n\r\n\t@Bean\r\n\tpublic CustomerServiceImpl customerService() {\r\n\t\treturn customerService;\r\n\t}\r\n}\n')),"\n",r.createElement(n.p,null,"Now you can perform assertions on captured events in your tests:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-java"},"public class CustomerServiceTest {\r\n    CustomerEventsProducerCaptor eventsProducerCaptor = serviceInMemoryContext.customerEventsProducerCaptor();\r\n\r\n\t@Test\r\n\tvoid createCustomerTest() {\r\n\t\tvar input = new Customer();\r\n\t\t// TODO fill input data\r\n\r\n\t\tvar customer = customerService.createCustomer(input);\r\n\t\tassertNotNull(customer.getId());\r\n\r\n        // Assertions on captured events\r\n        var customerEvents = eventsProducerCaptor.getCapturedMessages(eventsProducerCaptor.onCustomerEventBindingName);\r\n        Assertions.assertEquals(1, customerEvents.size());\r\n\t}\r\n}\n")),"\n",r.createElement(n.h2,{id:"letting-zenwave-sdk-include-event-producers-in-your-services",style:{position:"relative"}},r.createElement(n.a,{href:"#letting-zenwave-sdk-include-event-producers-in-your-services","aria-label":"letting zenwave sdk include event producers in your services permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Letting ZenWave SDK Include Event Producers in Your Services"),"\n",r.createElement(n.p,null,"Because this depends on ZenWave AsyncAPI Plugins naming conventions, you need to explicitly set ",r.createElement(n.code,null,"includeEmitEventsImplementation")," to ",r.createElement(n.code,null,"true")," in ",r.createElement(n.code,null,"ZenWave SDK Backend Plugin")," option to include event publishing code in your core services."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-java"},'// This will only be generated if includeEmitEventsImplementation is set to true\r\nprivate final EventsMapper eventsMapper = EventsMapper.INSTANCE;\r\nprivate final ICustomerEventsProducer eventsProducer;\r\n\r\n@Transactional\r\npublic Customer createCustomer(Customer input) {\r\n    log.debug("Request to save Customer: {}", input);\r\n    var customer = customerServiceMapper.update(new Customer(), input);\r\n    customer = customerRepository.save(customer);\r\n\r\n    // This will only be generated if includeEmitEventsImplementation is set to true\r\n    var customerEvent = eventsMapper.asCustomerEvent(customer);\r\n    eventsProducer.onCustomerEvent(customerEvent);\r\n\r\n    return customer;\r\n}\n')))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?r.createElement(n,e,r.createElement(i,e)):i(e)};function s(e){let{children:n}=e;return n}function l(e){return r.createElement(s,e,r.createElement(c,e))}},16376:function(e,n,t){t.d(n,{d2:function(){return r.d},zx:function(){return l},L0:function(){return p},$s:function(){return h},VS:function(){return E},gT:function(){return y},P7:function(){return v},Gz:function(){return g},S:function(){return L},VM:function(){return I},sd:function(){return S},kW:function(){return x},$D:function(){return k},DH:function(){return P},vC:function(){return w},LR:function(){return b},Ee:function(){return N},Bk:function(){return T},Nm:function(){return H},X_:function(){return u.X},YZ:function(){return Z},vk:function(){return W},BW:function(){return M},Mo:function(){return R}});var r=t(63585),a=t(27378),o=t(87573),i=t(30294);const c=e=>{let{background:n,backgroundHover:t,on:r}=e;return()=>(0,i.ivY)(["background-color:",";color:",";&:hover:not(:disabled){background-color:",";color:",";}&:active:not(:disabled){background-color:",";color:",";}"],n,r,t,r,t,r)},s=i.ZPm.buttonBox.withConfig({displayName:"Button__InnerButton",componentId:"sc-1qxez5q-0"})(["appearance:none;border-radius:base;transition:base;font-weight:500;border:0;display:inline-flex;align-items:center;cursor:pointer;font-size:16;padding:2 3;text-decoration:none !important;&:disabled{opacity:0.5;cursor:default;}&[data-variant='primary']{","}&[data-variant='success']{","}&[data-variant='danger']{","}&[data-variant='neutral']{","}"],c({background:"primary-600",backgroundHover:"primary-700",on:"white"}),c({background:"green-600",backgroundHover:"green-700",on:"white"}),c({background:"red-600",backgroundHover:"red-700",on:"white"}),c({background:"gray-300",backgroundHover:"gray-400",on:"black"})),l=a.forwardRef(((e,n)=>{let{variant:t="primary",children:r,...i}=e;return a.createElement(o.z,{ref:n,"data-variant":t},(e=>a.createElement(s,Object.assign({},e,i),r)))}));t(23824),t(31729);var d=t(63681),u=t(84234);const m=i.ZPm.box.withConfig({displayName:"Feature__InnerFeature",componentId:"sc-17n9iec-0"})(["border-left:1;border-left-style:dashed;border-left-color:layout-border;padding-left:4 !important;padding-right:5 !important;"]),p=a.forwardRef(((e,n)=>a.createElement(m,Object.assign({ref:n,col:{xs:1,md:1/3},px:2,pt:4,pb:{xs:2,md:5}},e)))),g=i.ZPm.h2.withConfig({displayName:"Feature__FeatureTitle",componentId:"sc-17n9iec-1"})(["margin:3 0;font-size:16;font-weight:500;border-left:1;border-color:primary-400;margin-left:",";padding-left:",";"],d.th.px(-9),d.th.px(9)),v=i.ZPm.p.withConfig({displayName:"Feature__FeatureText",componentId:"sc-17n9iec-2"})(["color:on-background-light;font-size:15;text-align:justify;margin:4 0;"]),f=i.ZPm.img.withConfig({displayName:"Feature__InnerFeatureImage",componentId:"sc-17n9iec-3"})(["margin-top:3;"]),h=a.forwardRef(((e,n)=>a.createElement(f,Object.assign({ref:n,width:48,height:48},e)))),E=a.forwardRef(((e,n)=>a.createElement(u.X,Object.assign({ref:n,row:!0,my:-4,px:3},e)))),y=a.forwardRef(((e,n)=>a.createElement(i.x.section,Object.assign({ref:n,py:4,borderTop:1,borderBottom:1,borderColor:"layout-border"},e)))),b=i.ZPm.h1Box.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-18tbum5-0"})(["font-size:38;font-weight:600;line-height:1.2;letter-spacing:-1.12px;margin:0 0 2;"," ",""],(0,d.up)("md",(0,i.ivY)(["padding-top:4;font-size:48;"])),(0,d.up)("xl",(0,i.ivY)(["font-size:60;"]))),w=i.ZPm.pBox.withConfig({displayName:"Hero__HeroTeaser",componentId:"sc-18tbum5-1"})(["font-size:18;margin:3 0;"," ",""],(0,d.up)("md",(0,i.ivY)(["font-size:20;"])),(0,d.up)("xl",(0,i.ivY)(["font-size:24;"]))),C=(0,i.ZPm)(u.X).withConfig({displayName:"Hero__InnerHero",componentId:"sc-18tbum5-2"})(["background-repeat:no-repeat;background-position:top -5% center;background-size:100% auto;padding-top:65%;text-align:center;"," ",""],(0,d.up)("md",(0,i.ivY)(["padding-top:0;margin-top:5;background-position:center right;background-size:58% auto;min-height:400;text-align:left;"])),(0,d.up)("xl",(0,i.ivY)(["margin-top:6;"]))),I=a.forwardRef(((e,n)=>{let{backgroundImageURL:t,...r}=e;return a.createElement(C,Object.assign({ref:n,backgroundImage:"url("+t+")"},r))})),k=a.forwardRef(((e,n)=>a.createElement(i.x.div,Object.assign({ref:n,w:{md:.5}},e)))),P=i.ZPm.sectionBox.withConfig({displayName:"Hero__HeroSection",componentId:"sc-18tbum5-3"})(["overflow:hidden;padding-top:2;padding-bottom:5;"]),x=a.forwardRef(((e,n)=>a.createElement(i.x.div,Object.assign({ref:n,row:!0,m:-2,justifyContent:{xs:"center",md:"initial"}},e)))),S=a.forwardRef(((e,n)=>a.createElement(i.x.div,Object.assign({ref:n,col:"auto",p:2},e))));var z=t(24956);const A=i.ZPm.div.withConfig({displayName:"Image__ImageContainer",componentId:"sc-1b0134e-0"})(["text-align:",";"],(e=>e.align)),j=i.ZPm.img.withConfig({displayName:"Image__InnerImage",componentId:"sc-1b0134e-1"})(["display:inline-block;"]),O=(e,n)=>"dark"===n?e.dark||e.src:e.light||e.src,N=a.forwardRef(((e,n)=>a.createElement(A,{align:e.align||"center",className:e.visible},a.createElement(j,Object.assign({ref:n,src:O(e,(0,z.If)()[0])},e)))));t(15239),t(83160);const _=(0,i.ZPm)(i.x.cite).withConfig({displayName:"Quote__Cite",componentId:"sc-12i53kz-0"})(["display:block;text-align:right;margin-top:1rem;"]),T=a.forwardRef(((e,n)=>a.createElement(i.x.blockquote,Object.assign({ref:n,className:"quote"},e)))),H=a.forwardRef(((e,n)=>a.createElement(_,Object.assign({ref:n},e)))),M=a.forwardRef(((e,n)=>a.createElement(i.x.section,Object.assign({ref:n,py:4,borderTop:1,borderBottom:1,borderColor:"layout-border"},e)))),Z=i.ZPm.divBox.withConfig({displayName:"WideFeature",componentId:"sc-1ak5yjf-0"})(["display:block;",")"],(0,d.up)("md",(0,i.ivY)(["margin:0 20px;border-top:1px dashed;border-bottom:1px dotted;border-color:var(--xstyled-colors-layout-border,#d4d4d8);display:grid;grid-template-columns:1fr 1fr 1fr;"]))),R=i.ZPm.divBox.withConfig({displayName:"WideFeature__WideFeatureText",componentId:"sc-1ak5yjf-1"})(["padding:1rem;grid-column-start:span 2;font-size:18;"," ",""],(0,d.up)("md",(0,i.ivY)(["font-size:20;padding:3rem;padding-top:2rem;"])),(0,d.up)("xl",(0,i.ivY)(["font-size:24;"]))),B=i.ZPm.divBox.withConfig({displayName:"WideFeature__WideFeatureImageContainer",componentId:"sc-1ak5yjf-2"})(["padding:1rem;text-align:center;"]),D=i.ZPm.imgBox.withConfig({displayName:"WideFeature__InnerImage",componentId:"sc-1ak5yjf-3"})(["display:inline-block;"]),F=(e,n)=>"dark"===n?e.dark||e.src:e.light||e.src,W=a.forwardRef(((e,n)=>a.createElement(B,{className:e.className},a.createElement(D,Object.assign({ref:n,src:F(e,(0,z.If)()[0])},e))))),L=e=>{let{gist:n,file:t}=e;const r=(0,a.useRef)(null);(0,a.useEffect)((()=>{(async()=>{const e=t?"https://gist.githubusercontent.com/"+n+"/raw/"+t:"https://gist.githubusercontent.com/"+n+"/raw";try{const n=await fetch(e);if(n.ok){const e=22*(await n.text()).split("\n").length+40;r.current&&(r.current.style.height=e+"px")}else console.error("Failed to fetch Gist content")}catch(a){console.error("Error fetching Gist content:",a)}})()}),[n,t]);const o=t?"https://gist.github.com/"+n+".pibb?file="+t:"https://gist.github.com/"+n+".pibb",i=t?"https://gist.github.com/"+n+"#file-"+t.replace(/\./g,"-").toLowerCase():"https://gist.github.com/"+n;return a.createElement("div",{style:{border:"1px solid #ccc",padding:"10px 0 0 0",borderRadius:"5px"}},t&&a.createElement("header",{style:{marginLeft:"10px",fontStyle:"oblique"}},a.createElement("span",{role:"img","aria-label":"source code"},"🗒️"),a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},t)),a.createElement("iframe",{title:t,ref:r,src:o,width:"100%",frameBorder:"0",style:{margin:"0",padding:"0"}}))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-c-users-ivangsa-workspace-zenwave-zen-wave-360-github-io-website-pages-docs-sdk-producing-events-mdx-39432a3cc0b98c4ce88e.js.map