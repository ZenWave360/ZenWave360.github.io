"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63],{5183:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(27378),a=n(20951);n(52608);function i(e){const t=Object.assign({h1:"h1",a:"a",div:"div",p:"p",ol:"ol",li:"li",ul:"ul",strong:"strong",h2:"h2",blockquote:"blockquote",em:"em",code:"code",pre:"pre",h3:"h3"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,{id:"modeling-aggregates",style:{position:"relative"}},r.createElement(t.a,{href:"#modeling-aggregates","aria-label":"modeling aggregates permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Modeling Aggregates"),"\n",r.createElement(t.p,null,"Modeling aggregates with entities, command handlers and domain events."),"\n",r.createElement(t.p,null,"Aggregates are central to DDD and ZenWave SDK modeling. They represent clusters of entities and values that works as transactional boundary and are treated as a single unit:"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement("strong",{className:"orange"},"Treated as a Single Unit"),"."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement("strong",{className:"orange"},"Root Entity"),": Each aggregate has a root entity, also known as the aggregate root. All external references to the aggregate should only point to the aggregate root. This ensures the integrity of the aggregate."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement("strong",{className:"orange"},"Consistency Boundaries"),": The aggregate defines the transactional units of consistency boundaries."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement("strong",{className:"orange"},"Reference by Identity"),": Aggregates should be referenced by their identifiers (IDs) rather than direct object references. This promotes loose coupling between aggregates and enhances the system's scalability and maintainability."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement("strong",{className:"orange"},"Invariants"),": The aggregate root is responsible for maintaining all invariants within the aggregate. An invariant is a business rule that must always be consistent."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement("strong",{className:"orange"},"Persistence"),": Persistence of an aggregate should be done as a whole. It's the responsibility of the aggregate root to handle this."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement("strong",{className:"orange"},"Size"),": Ideally, an aggregate should be as small as possible, based on the business rules. A smaller aggregate is easier to maintain and understand."),"\n"),"\n"),"\n",r.createElement(t.p,null,"ZenWave SDK supports these three different patterns to model aggregates:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.strong,null,r.createElement(t.a,{href:"#lightweight-aggregates"},"Lightweight/Data Centric:"))," When your application logic is simple."),"\n",r.createElement(t.li,null,r.createElement(t.strong,null,r.createElement(t.a,{href:"#rich-domain-aggregates"},"Rich Domain Aggregates:"))," When you are dealing with complex business logic and in core subdomains."),"\n",r.createElement(t.li,null,r.createElement(t.strong,null,r.createElement(t.a,{href:"#event-sourced-aggregates"},"Event Sourced Aggregates:"))," When implementing CQRS and Event Sourcing patterns."),"\n"),"\n",r.createElement(t.h2,{id:"lightweight-aggregates",style:{position:"relative"}},r.createElement(t.a,{href:"#lightweight-aggregates","aria-label":"lightweight aggregates permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Lightweight Aggregates"),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"💡 If your application logic is simple, keep your implementation simple."),"\n"),"\n",r.createElement(t.p,null,"Lightweight Aggregates are ",r.createElement("strong",{className:"orange"},"simple data containers")," that do not contain any business logic. They are used to group related data together. They are treated as a single unit and have a root entity but ",r.createElement("strong",{className:"orange"},"related business logic is implemented in services")," or other classes."),"\n",r.createElement(t.p,null,"Most microservice applications look like:"),"\n",r.createElement("strong",{className:"orange"},'"Receive some command/request, validate, process, persist the data and emit an integration event for downstream services."'),"\n",r.createElement(t.p,null,"If your application logic is simple, keep your implementation simple."),"\n",r.createElement(t.p,null,"This would be our ",r.createElement(t.em,null,"first"),", ",r.createElement(t.em,null,"go-to")," recommended approach. For most microservice applications this pattern is good enough to guarantee maintainability and scalability. And it, does not overcomplicate your codebase with unnecessary complexity. If you are in doubt, start with this pattern."),"\n",r.createElement(t.p,null,"Sometimes you will find this referred as the ",r.createElement(t.a,{href:"https://en.wikipedia.org/wiki/Anemic_domain_model"},"Anemic Domain Model")," but it's ",r.createElement(t.strong,null,"OK")," for most microservice applications."),"\n",r.createElement(t.p,null,"It applies ",r.createElement("strong",{className:"orange"},"Keep-It-Simple (KISS)")," principle and ",r.createElement("strong",{className:"orange"},"Separation of Concerns"),", clearly separating where data is defined (your entities) and the business process you apply to it (your services). Services are still the only entry point for your aggregates functionality, and it works just fine for most microservice applications."),"\n",r.createElement(t.p,null,"Use the ",r.createElement(t.code,null,"@aggregate")," annotation to mark your ",r.createElement("strong",{className:"orange"},"aggregate root entity"),", and use ",r.createElement(t.strong,null,"service")," for defining command/methods:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-zdl"},"@aggregate\r\nentity Customer {\r\n    // fields, nested objects and relationships...\r\n}\r\n\r\nservice CustomerService for (Customer) {\r\n  /* the following service method names and signatures will genereate CRUD operations */\r\n  createCustomer(Customer) Customer withEvents CustomerEvent\r\n  updateCustomer(id, Customer) Customer? withEvents CustomerEvent\r\n  deleteCustomer(id) withEvents CustomerEvent\r\n  getCustomer(id) Customer?\r\n  @paginated\r\n  listCustomers() Customer[]\r\n  /* this is will generate (almost) empty implementation placeholders for service and tests */\r\n  updateCustomerAddress(id, Address) Customer? withEvents CustomerEvent\r\n}\n")),"\n",r.createElement(t.h2,{id:"rich-domain-aggregates",style:{position:"relative"}},r.createElement(t.a,{href:"#rich-domain-aggregates","aria-label":"rich domain aggregates permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Rich Domain Aggregates"),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"💡 Start with the Lightweight Aggregates pattern and refactor to Rich Domain Aggregates when you need it."),"\n"),"\n",r.createElement(t.p,null,"Sometimes referred to as ",r.createElement("strong",{className:"orange"},"Rich Domain Model")," or ",r.createElement("strong",{className:"orange"},"Rich Domain Objects"),". These are objects that contain both data and behavior. They are not just data containers but also contain business logic."),"\n",r.createElement(t.p,null,"We recommend following this approach when:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement("strong",{className:"orange"},"Business logic is complex")," and the aggregate needs to maintain its own consistency and invariants."),"\n",r.createElement(t.li,null,"Your ",r.createElement("strong",{className:"orange"},"service methods spans multiple aggregates"),"."),"\n",r.createElement(t.li,null,"You are modeling aggregates that need to ",r.createElement("strong",{className:"orange"},"encapsulate state transitions"),"."),"\n",r.createElement(t.li,null,"You are working on a ",r.createElement("strong",{className:"orange"},"core subdomain"),"."),"\n"),"\n",r.createElement(t.p,null,"With this approach, your service methods will look simpler, in expense of more complex, and bigger code base for your aggregates. And a stepper learning curve for your developing team."),"\n",r.createElement(t.p,null,"If you don't know if you need it, you probably don't."),"\n",r.createElement(t.h3,{id:"modeling-rich-domain-aggregates-with-zenwave-zdl",style:{position:"relative"}},r.createElement(t.a,{href:"#modeling-rich-domain-aggregates-with-zenwave-zdl","aria-label":"modeling rich domain aggregates with zenwave zdl permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Modeling Rich Domain Aggregates with ZenWave ZDL"),"\n",r.createElement(t.p,null,"This is how you would model this with ZenWave SDK:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-zdl"},'/**\r\n * Delivery Aggregate\r\n */\r\naggregate DeliveryAggregate (Delivery) {\r\n\r\n    createDelivery(DeliveryInput) withEvents DeliveryStatusUpdated\r\n\r\n    onOrderStatusUpdated(OrderStatusUpdated) withEvents DeliveryStatusUpdated\r\n\r\n    updateDeliveryStatus(DeliveryStatusInput) withEvents DeliveryStatusUpdated\r\n\r\n}\r\n// @aggregate\r\nentity Delivery {\r\n    // fields, nested objects and relationships...\r\n}\r\n\r\n@rest("/delivery")\r\nservice DeliveryService for (DeliveryAggregate) {\r\n\r\n    @asyncapi({api: OrdersAsyncAPI, channel: "OrderCreatedChannel"})\r\n    createDelivery(DeliveryInput) Delivery withEvents DeliveryStatusUpdated\r\n\r\n    @asyncapi({api: OrdersAsyncAPI, channel: "OrderUpdatesChannel"})\r\n    onOrderStatusUpdated(id, OrderStatusUpdated) Delivery withEvents DeliveryStatusUpdated\r\n\r\n    @put("/{orderId}/status")\r\n    updateDeliveryStatus(id, DeliveryStatusInput) Delivery withEvents DeliveryStatusUpdated\r\n\r\n    @get @paginated\r\n    listDeliveries() Delivery[]\r\n}\n')),"\n",r.createElement(t.h3,{id:"rich-domain-aggregates-in-java",style:{position:"relative"}},r.createElement(t.a,{href:"#rich-domain-aggregates-in-java","aria-label":"rich domain aggregates in java permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Rich Domain Aggregates in Java"),"\n",r.createElement(t.p,null,"This is how a service for a rich aggregate looks like:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-java"},"public class DeliveryServiceImpl implements DeliveryService {\r\n    @Transactional\r\n    public Delivery onOrderStatusUpdated(String id, OrderStatusUpdated input) {\r\n        var deliveryAggregate = deliveryRepository.findDeliveryAggregateById(id).orElseThrow();\r\n        deliveryAggregate.onOrderStatusUpdated(input); // the aggregate business logic\r\n        persistAggregate(deliveryAggregate);\r\n        emitEvents(deliveryAggregate.getEvents());\r\n        return deliveryAggregate.getRootEntity();\r\n    }\r\n}\n")),"\n",r.createElement(t.p,null,"And the aggregate itself:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-java"},"/**\r\n* Rich Domain Aggregate for Delivery.\r\n*/\r\npublic class DeliveryAggregate {\r\n\r\n    private final Delivery rootEntity;\r\n\r\n    private final List<Object> events = new ArrayList<>();\r\n\r\n    // getters, setters, constructor, etc.\r\n\r\n    /**\r\n    * Performs business logic related to 'onOrderStatusUpdated' and emits 'DeliveryStatusUpdatedEvent' domain event.\r\n    */\r\n    public void onOrderStatusUpdated(OrderStatusUpdated input) {\r\n        // TODO: your business logic would be here\r\n        mapper.update(rootEntity, input);\r\n        events.add(mapper.asDeliveryStatusUpdated(rootEntity));\r\n    }\r\n\r\n    @org.mapstruct.Mapper\r\n    interface Mapper {\r\n\r\n        Delivery update(@MappingTarget Delivery entity, OrderStatusUpdated input);\r\n\r\n        DeliveryStatusUpdatedEvent asDeliveryStatusUpdated(Delivery entity);\r\n\r\n    }\r\n}\r\n\r\n/**\r\n* Delivery JPA Entity, used as rootEntity.\r\n*/\r\n@Entity(name = \"delivery\")\r\n@lombok.Getter\r\n@lombok.Setter(AccessLevel.PACKAGE) // disallow direct access to setters from service layer\r\npublic class Delivery implements Serializable {\r\n    // ...\r\n}\r\n\r\n/**\r\n* Delivery Updated Domain Event.\r\n*/\r\npublic class DeliveryStatusUpdatedEvent implements Serializable {\r\n    // ...\r\n}\n")),"\n",r.createElement(t.h2,{id:"event-sourced-aggregates",style:{position:"relative"}},r.createElement(t.a,{href:"#event-sourced-aggregates","aria-label":"event sourced aggregates permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Event Sourced Aggregates"),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"💡 This is and extension of the Rich Domain Aggregates, where aggregate commands are event handlers that reconstruct the aggregate state."),"\n"),"\n",r.createElement(t.p,null,"With ZenWave SDK you can model aggregates that are event sourced, whose state is created as a sequence of events. This is common when implementing the CQRS pattern."),"\n",r.createElement(t.p,null,"This section is not about how to store the state of an aggregate as a sequence of events, but how aggregates state is rebuilt from incoming events."),"\n",r.createElement(t.p,null,"This approach is just an extension of the Rich Domain Aggregates pattern, where aggregate commands are event handlers that reconstruct the aggregate state."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-zdl"},'/**\r\n * Delivery Aggregate\r\n */\r\naggregate DeliveryAggregate (Delivery) {\r\n    onOrderCreatedEvent(OrderCreatedEvent) withEvents DeliveryStatusUpdated\r\n    onOrderStatusUpdated(OrderStatusUpdatedEvent) withEvents DeliveryStatusUpdated\r\n    onOrderCancelled(OrderCancelledEvent) withEvents DeliveryStatusUpdated\r\n}\r\n\r\nservice DeliveryService for (DeliveryAggregate) {\r\n    @asyncapi({api: OrdersAsyncAPI, channel: "OrderCreatedChannel"})\r\n    onOrderCreatedEvent(OrderCreatedEvent) withEvents DeliveryStatusUpdated\r\n    @asyncapi({api: OrdersAsyncAPI, channel: "OrderUpdatedChannel"})\r\n    onOrderStatusUpdated(OrderStatusUpdatedEvent) withEvents DeliveryStatusUpdated\r\n    @asyncapi({api: OrdersAsyncAPI, channel: "OrderDeletedChannel"})\r\n    onOrderCancelled(OrderCancelledEvent) withEvents DeliveryStatusUpdated\r\n}\n')))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)};function l(e){let{children:t}=e;return t}function s(e){return r.createElement(l,e,r.createElement(o,e))}},52608:function(e,t,n){n.d(t,{d2:function(){return r.d},zx:function(){return c},L0:function(){return u},$s:function(){return f},VS:function(){return y},gT:function(){return E},P7:function(){return h},Gz:function(){return p},VM:function(){return D},sd:function(){return x},kW:function(){return I},$D:function(){return C},DH:function(){return k},vC:function(){return w},LR:function(){return b},Ee:function(){return z},Bk:function(){return H},Nm:function(){return j},X_:function(){return g.X},YZ:function(){return R},vk:function(){return W},BW:function(){return T},Mo:function(){return P}});var r=n(16054),a=n(27378),i=n(87573),o=n(30294);const l=e=>{let{background:t,backgroundHover:n,on:r}=e;return()=>(0,o.ivY)(["background-color:",";color:",";&:hover:not(:disabled){background-color:",";color:",";}&:active:not(:disabled){background-color:",";color:",";}"],t,r,n,r,n,r)},s=o.ZPm.buttonBox.withConfig({displayName:"Button__InnerButton",componentId:"sc-1qxez5q-0"})(["appearance:none;border-radius:base;transition:base;font-weight:500;border:0;display:inline-flex;align-items:center;cursor:pointer;font-size:16;padding:2 3;text-decoration:none !important;&:disabled{opacity:0.5;cursor:default;}&[data-variant='primary']{","}&[data-variant='success']{","}&[data-variant='danger']{","}&[data-variant='neutral']{","}"],l({background:"primary-600",backgroundHover:"primary-700",on:"white"}),l({background:"green-600",backgroundHover:"green-700",on:"white"}),l({background:"red-600",backgroundHover:"red-700",on:"white"}),l({background:"gray-300",backgroundHover:"gray-400",on:"black"})),c=a.forwardRef(((e,t)=>{let{variant:n="primary",children:r,...o}=e;return a.createElement(i.z,{ref:t,"data-variant":n},(e=>a.createElement(s,Object.assign({},e,o),r)))}));n(35576),n(29115);var d=n(63681),g=n(37898);const m=o.ZPm.box.withConfig({displayName:"Feature__InnerFeature",componentId:"sc-17n9iec-0"})(["border-left:1;border-left-style:dashed;border-left-color:layout-border;padding-left:4 !important;padding-right:5 !important;"]),u=a.forwardRef(((e,t)=>a.createElement(m,Object.assign({ref:t,col:{xs:1,md:1/3},px:2,pt:4,pb:{xs:2,md:5}},e)))),p=o.ZPm.h2.withConfig({displayName:"Feature__FeatureTitle",componentId:"sc-17n9iec-1"})(["margin:3 0;font-size:16;font-weight:500;border-left:1;border-color:primary-400;margin-left:",";padding-left:",";"],d.th.px(-9),d.th.px(9)),h=o.ZPm.p.withConfig({displayName:"Feature__FeatureText",componentId:"sc-17n9iec-2"})(["color:on-background-light;font-size:15;text-align:justify;margin:4 0;"]),v=o.ZPm.img.withConfig({displayName:"Feature__InnerFeatureImage",componentId:"sc-17n9iec-3"})(["margin-top:3;"]),f=a.forwardRef(((e,t)=>a.createElement(v,Object.assign({ref:t,width:48,height:48},e)))),y=a.forwardRef(((e,t)=>a.createElement(g.X,Object.assign({ref:t,row:!0,my:-4,px:3},e)))),E=a.forwardRef(((e,t)=>a.createElement(o.x.section,Object.assign({ref:t,py:4,borderTop:1,borderBottom:1,borderColor:"layout-border"},e)))),b=o.ZPm.h1Box.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-18tbum5-0"})(["font-size:38;font-weight:600;line-height:1.2;letter-spacing:-1.12px;margin:0 0 2;"," ",""],(0,d.up)("md",(0,o.ivY)(["padding-top:4;font-size:48;"])),(0,d.up)("xl",(0,o.ivY)(["font-size:60;"]))),w=o.ZPm.pBox.withConfig({displayName:"Hero__HeroTeaser",componentId:"sc-18tbum5-1"})(["font-size:18;margin:3 0;"," ",""],(0,d.up)("md",(0,o.ivY)(["font-size:20;"])),(0,d.up)("xl",(0,o.ivY)(["font-size:24;"]))),S=(0,o.ZPm)(g.X).withConfig({displayName:"Hero__InnerHero",componentId:"sc-18tbum5-2"})(["background-repeat:no-repeat;background-position:top -5% center;background-size:100% auto;padding-top:65%;text-align:center;"," ",""],(0,d.up)("md",(0,o.ivY)(["padding-top:0;margin-top:5;background-position:center right;background-size:58% auto;min-height:400;text-align:left;"])),(0,d.up)("xl",(0,o.ivY)(["margin-top:6;"]))),D=a.forwardRef(((e,t)=>{let{backgroundImageURL:n,...r}=e;return a.createElement(S,Object.assign({ref:t,backgroundImage:"url("+n+")"},r))})),C=a.forwardRef(((e,t)=>a.createElement(o.x.div,Object.assign({ref:t,w:{md:.5}},e)))),k=o.ZPm.sectionBox.withConfig({displayName:"Hero__HeroSection",componentId:"sc-18tbum5-3"})(["overflow:hidden;padding-top:2;padding-bottom:5;"]),I=a.forwardRef(((e,t)=>a.createElement(o.x.div,Object.assign({ref:t,row:!0,m:-2,justifyContent:{xs:"center",md:"initial"}},e)))),x=a.forwardRef(((e,t)=>a.createElement(o.x.div,Object.assign({ref:t,col:"auto",p:2},e))));var A=n(24956);const O=o.ZPm.div.withConfig({displayName:"Image__ImageContainer",componentId:"sc-1b0134e-0"})(["text-align:",";"],(e=>e.align)),N=o.ZPm.img.withConfig({displayName:"Image__InnerImage",componentId:"sc-1b0134e-1"})(["display:inline-block;"]),_=(e,t)=>"dark"===t?e.dark||e.src:e.light||e.src,z=a.forwardRef(((e,t)=>a.createElement(O,{align:e.align||"center",className:e.visible},a.createElement(N,Object.assign({ref:t,src:_(e,(0,A.If)()[0])},e)))));n(74950),n(87731);const U=(0,o.ZPm)(o.x.cite).withConfig({displayName:"Quote__Cite",componentId:"sc-12i53kz-0"})(["display:block;text-align:right;margin-top:1rem;"]),H=a.forwardRef(((e,t)=>a.createElement(o.x.blockquote,Object.assign({ref:t,className:"quote"},e)))),j=a.forwardRef(((e,t)=>a.createElement(U,Object.assign({ref:t},e)))),T=a.forwardRef(((e,t)=>a.createElement(o.x.section,Object.assign({ref:t,py:4,borderTop:1,borderBottom:1,borderColor:"layout-border"},e)))),R=o.ZPm.divBox.withConfig({displayName:"WideFeature",componentId:"sc-1ak5yjf-0"})(["display:block;",")"],(0,d.up)("md",(0,o.ivY)(["margin:0 20px;border-top:1px dashed;border-bottom:1px dotted;border-color:var(--xstyled-colors-layout-border,#d4d4d8);display:grid;grid-template-columns:1fr 1fr 1fr;"]))),P=o.ZPm.divBox.withConfig({displayName:"WideFeature__WideFeatureText",componentId:"sc-1ak5yjf-1"})(["padding:1rem;grid-column-start:span 2;font-size:18;"," ",""],(0,d.up)("md",(0,o.ivY)(["font-size:20;padding:3rem;padding-top:2rem;"])),(0,d.up)("xl",(0,o.ivY)(["font-size:24;"]))),B=o.ZPm.divBox.withConfig({displayName:"WideFeature__WideFeatureImageContainer",componentId:"sc-1ak5yjf-2"})(["padding:1rem;text-align:center;"]),M=o.ZPm.imgBox.withConfig({displayName:"WideFeature__InnerImage",componentId:"sc-1ak5yjf-3"})(["display:inline-block;"]),Z=(e,t)=>"dark"===t?e.dark||e.src:e.light||e.src,W=a.forwardRef(((e,t)=>a.createElement(B,{className:e.className},a.createElement(M,Object.assign({ref:t,src:Z(e,(0,A.If)()[0])},e)))))}}]);
//# sourceMappingURL=component---node-modules-smooth-doc-src-templates-doc-js-content-file-path-c-users-ivangsa-workspace-zenwave-zen-wave-360-github-io-website-pages-docs-sdk-aggregates-mdx-7341ca98cf2542c7aa47.js.map