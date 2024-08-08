"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[894],{18588:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var a=t(27378),r=t(20951);function s(e){const n=Object.assign({h2:"h2",a:"a",div:"div",blockquote:"blockquote",p:"p",img:"img",code:"code",ul:"ul",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h2,{id:"api-first-with-asyncapi",style:{position:"relative"}},a.createElement(n.a,{href:"#api-first-with-asyncapi","aria-label":"api first with asyncapi permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"API-First with AsyncAPI"),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"This is a summary of two long posts about ",a.createElement(n.a,{href:"/posts/API-First-with-AsyncAPI-And-ZenWave-SDK/"},"API-First with AsyncAPI")," and ",a.createElement(n.a,{href:"/posts/ZenWave-AsyncAPI-Code-Generator/"},"ZenWave AsyncAPI Code Generator"),"."),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.img,{src:"/posts/ZenWave-AsyncAPI-Code-Generator/ZenWave360-AsyncAPI-SpringCloudStreams.excalidraw.svg",alt:"AsyncAPI and Spring Cloud Streams 3"})),"\n",a.createElement(n.h2,{id:"api-first-with-asyncapi-and-zenwave-sdk",style:{position:"relative"}},a.createElement(n.a,{href:"#api-first-with-asyncapi-and-zenwave-sdk","aria-label":"api first with asyncapi and zenwave sdk permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"API-First with AsyncAPI and ZenWave SDK"),"\n",a.createElement(n.p,null,"With ZenWave's ",a.createElement(n.code,null,"spring-cloud-streams3")," and ",a.createElement(n.code,null,"jsonschema2pojo")," plugins you can generate:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Strongly typed ",a.createElement(n.strong,null,"business interfaces")),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Payload DTOs")," and"),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Header objects")," from AsyncAPI definitions."),"\n"),"\n",a.createElement(n.p,null,"It uses Spring Cloud Streams as default implementation, so it can connect to many different brokers via provided binders."),"\n",a.createElement(n.p,null,"And because everything is hidden behind interfaces we can encapsulate many Enterprise Integration Patterns:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Transactional Outbox: with MongoDB ChangeStreams, Plain SQL and Debezium SQL flavors"),"\n",a.createElement(n.li,null,"Business DeadLetter Queues: allowing you to route different business Exceptions to different DeadLetter queues for non-retrayable errors."),"\n",a.createElement(n.li,null,"Enterprise Envelope: when your organization uses a common Envelope for messages, you can still express your AsyncAPI definition in terms of your business payload."),"\n"),"\n",a.createElement(n.h2,{id:"broker-based-apis-are-symmetric",style:{position:"relative"}},a.createElement(n.a,{href:"#broker-based-apis-are-symmetric","aria-label":"broker based apis are symmetric permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Broker-based APIs are Symmetric"),"\n",a.createElement(n.p,null,"Because APIs mediated by a broker are inherently ",a.createElement(n.strong,null,"symmetric")," it's difficult to establish the roles of client/server: what represents a ",a.createElement(n.code,null,"publish")," operation from one side will be a ",a.createElement(n.code,null,"subscribe")," operation seen from the other side. Also, a given service can act as a publisher and subscriber on the same API."),"\n",a.createElement(n.p,null,"For these reasons, to avoid defining the same API operations multiple times from each perspective, we propose to define the API only once from the perspective of the provider of the functionality, which may be a producer, a consumer or both."),"\n",a.createElement(n.p,null,"Some definitions:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"SERVICE: An independent piece of software, typically a microservice, that provides a set of capabilities to other services."),"\n",a.createElement(n.li,null,"PROVIDER: The service that implements the functionality of the API. It may be accepting asynchronous command request or publishing business domain events."),"\n",a.createElement(n.li,null,"CLIENT/s: The service/s that makes use of the functionality of the API. It may be requesting asynchronous commands or subscribing to business domain events."),"\n",a.createElement(n.li,null,"PRODUCER: A service that writes a given message."),"\n",a.createElement(n.li,null,"CONSUMER: A service that reads a given message."),"\n"),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"Define your AsyncAPI from the perspective of the ",a.createElement(n.strong,null,"PROVIDER")," of the functionality, which may be a producer, a consumer or both. Share this definition with your ",a.createElement(n.strong,null,"CLIENTS"),"."),"\n"),"\n",a.createElement(n.p,null,"Use the table to understand which section of AsyncAPI (publish or subscribe) to use for each topic, and which role (provider or client) to use on the plugin configuration."),"\n",a.createElement(n.table,null,a.createElement(n.thead,null,a.createElement(n.tr,null,a.createElement(n.th),a.createElement(n.th,null,"Events"),a.createElement(n.th,null,"Commands"))),a.createElement(n.tbody,null,a.createElement(n.tr,null,a.createElement(n.td,null,"Provider"),a.createElement(n.td,null,"Produces (publish)"),a.createElement(n.td,null,"Consumes (subscribe)")),a.createElement(n.tr,null,a.createElement(n.td,null,"Client"),a.createElement(n.td,null,"Consumes (subscribe)"),a.createElement(n.td,null,"Produces (publish)")),a.createElement(n.tr,null,a.createElement(n.td,null,"OperationId Suggested Prefix"),a.createElement(n.td,null,a.createElement(n.strong,null,"on"),"<Event Name>"),a.createElement(n.td,null,a.createElement(n.strong,null,"do"),"<Command Name>")))),"\n",a.createElement(n.p,null,"If you still find confusing which one is a provider and a client just use this rule: it can be only one provider of a given message while clients of a given message there can be many:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"If the provider is the producer use publish section"),"\n",a.createElement(n.li,null,"If is the consumer use subscribe section."),"\n"),"\n",a.createElement(n.h2,{id:"events-commands-and-messages",style:{position:"relative"}},a.createElement(n.a,{href:"#events-commands-and-messages","aria-label":"events commands and messages permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Events, Commands, and Messages"),"\n",a.createElement(n.p,null,"In a messaging system, there are two types of messages: events and commands. An event message describes a change that has already happened, while a command message describes an operation that needs to be carried out. In other words, events are used to notify subscribers about something that has already occurred, while commands are used to initiate an action or process."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Event:")," A message describing a change that has already happened."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Command:")," A message describing an operation that has to be carried out."),"\n"),"\n",a.createElement(n.p,null,"Also, while there can be only one provider that produces a given event, but commands can be issued for one or many client producers."),"\n",a.createElement(n.h2,{id:"understanding-asyncapi-specification",style:{position:"relative"}},a.createElement(n.a,{href:"#understanding-asyncapi-specification","aria-label":"understanding asyncapi specification permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Understanding AsyncAPI Specification"),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"See ",a.createElement(n.a,{href:"https://www.asyncapi.com/docs/reference"},"AsyncAPI Reference")," and ",a.createElement(n.a,{href:"/posts/API-First-with-AsyncAPI-And-ZenWave-SDK/#understanding-asyncapi-definition"},"Understanding AsyncAPI Specification")," blog post for more details about AsyncAPI documents."),"\n"),"\n",a.createElement(n.h3,{id:"different-styles-of-event-messages",style:{position:"relative"}},a.createElement(n.a,{href:"#different-styles-of-event-messages","aria-label":"different styles of event messages permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Different Styles of Event Messages"),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"See ",a.createElement(n.a,{href:"/posts/API-First-with-AsyncAPI-And-ZenWave-SDK/#different-styles-of-event-messages"},"Different Styles of Event Messages")," to learn about ",a.createElement(n.code,null,"Notification Messages"),", ",a.createElement(n.code,null,"State Transfer Messages")," and ",a.createElement(n.code,null,"Domain Event Messages"),"."),"\n"),"\n",a.createElement(n.h2,{id:"api-first-code-generator-from-asyncapi",style:{position:"relative"}},a.createElement(n.a,{href:"#api-first-code-generator-from-asyncapi","aria-label":"api first code generator from asyncapi permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"API-First Code Generator from AsyncAPI"),"\n",a.createElement(n.p,null,"You can use ",a.createElement(n.a,{href:"https://zenwave360.github.io/zenwave-sdk/plugins/asyncapi-spring-cloud-streams3/#maven-plugin-configuration-api-first"},"API-First AsyncAPI Maven Plugin")," to generate models (DTOs) and a producer implementation."),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"See ",a.createElement(n.a,{href:"/docs/zenwave-sdk/producing-domain-events"},"Producing Domain Events")," and ",a.createElement(n.a,{href:"/docs/zenwave-sdk/consuming-async-commands"},"Consuming Async Commands")," for more details on how to configure the plugin, and how to use generated code."),"\n"),"\n",a.createElement(n.h2,{id:"some-patterns-supported-by-zenwave-asyncapi-code-generator",style:{position:"relative"}},a.createElement(n.a,{href:"#some-patterns-supported-by-zenwave-asyncapi-code-generator","aria-label":"some patterns supported by zenwave asyncapi code generator permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Some Patterns supported by ZenWave AsyncAPI Code Generator"),"\n",a.createElement(n.h3,{id:"exception-handling-with-business-dead-letter-queue",style:{position:"relative"}},a.createElement(n.a,{href:"#exception-handling-with-business-dead-letter-queue","aria-label":"exception handling with business dead letter queue permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"/posts/ZenWave-AsyncAPI-Code-Generator/#exception-handling-with-business-dead-letter-queue"},"Exception Handling with Business Dead Letter Queue")),"\n",a.createElement(n.h3,{id:"populating-headers-at-runtime-automatically",style:{position:"relative"}},a.createElement(n.a,{href:"#populating-headers-at-runtime-automatically","aria-label":"populating headers at runtime automatically permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"/posts/ZenWave-AsyncAPI-Code-Generator/#populating-headers-at-runtime-automatically"},"Populating Headers at Runtime Automatically")),"\n",a.createElement(n.h3,{id:"transactional-outbox-with-mongodb-changestreams",style:{position:"relative"}},a.createElement(n.a,{href:"#transactional-outbox-with-mongodb-changestreams","aria-label":"transactional outbox with mongodb changestreams permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://zenwave360.github.io/zenwave-sdk/plugins/asyncapi-spring-cloud-streams3/#provider-imperative-style-with-mongodb-transactional-outbox"},"Transactional Outbox with MongoDB ChangeStreams")),"\n",a.createElement(n.h2,{id:"asyncapi-conference-on-tour-madrid-2023",style:{position:"relative"}},a.createElement(n.a,{href:"#asyncapi-conference-on-tour-madrid-2023","aria-label":"asyncapi conference on tour madrid 2023 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"AsyncAPI Conference On Tour Madrid 2023"),"\n",a.createElement(n.p,null," "),"\n",a.createElement("iframe",{width:"1050",height:"591",src:"https://www.youtube.com/embed/gUsoD8RaCuw?si=KLGLktrNQqjxodg2",title:"Code Generation For Enterprise Integration Patterns w/ AsyncAPI & ZenWave SDK - Ivan Garcia Sain-Aja",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",allowfullscreen:!0}))}var l=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?a.createElement(n,e,a.createElement(s,e)):s(e)};function i(e){let{children:n}=e;return n}function o(e){return a.createElement(i,e,a.createElement(l,e))}}}]);
//# sourceMappingURL=component---node-modules-smooth-doc-src-templates-doc-js-content-file-path-c-users-ivangsa-workspace-zenwave-zen-wave-360-github-io-website-pages-docs-api-first-async-api-md-4eed4e263159185c5b32.js.map