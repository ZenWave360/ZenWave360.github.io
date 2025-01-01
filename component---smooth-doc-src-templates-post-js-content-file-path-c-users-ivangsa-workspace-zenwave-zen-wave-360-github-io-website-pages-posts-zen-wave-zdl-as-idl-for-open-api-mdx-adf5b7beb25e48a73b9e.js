"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[869],{91461:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(27378),a=t(20951),i=t(16376);function o(e){const n=Object.assign({blockquote:"blockquote",p:"p",a:"a",h1:"h1",div:"div",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre",img:"img"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"This article was first published @medium: ",r.createElement(n.a,{href:"https://medium.com/@ivangsa/stop-writing-yaml-for-openapi-use-a-compact-dsl-and-save-time-and-typing-574a138faddc"},"Stop writing YAML for OpenAPI, use a compact DSL and save time and typing"),"."),"\n"),"\n",r.createElement(n.h1,{id:"generating-openapi-definition-files-from-zenwave-domain-language-models-with-zenwavesdk",style:{position:"relative"}},r.createElement(n.a,{href:"#generating-openapi-definition-files-from-zenwave-domain-language-models-with-zenwavesdk","aria-label":"generating openapi definition files from zenwave domain language models with zenwavesdk permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),'Generating OpenAPI definition files from "ZenWave Domain Language" models with ZenWaveSDK'),"\n",r.createElement(n.p,null,"Because writing YAML by hand is now fun..."),"\n",r.createElement(n.p,null,"You can use ",r.createElement(n.code,null,"ZenWave Domain Language")," models as IDL to generate OpenAPI v3 with ZenWave SDK."),"\n",r.createElement(n.p,null,"Imagine being able to quickly define an API in a more concise and readable way, without losing the rigor of an OpenAPI specification. This article explores how you can leverage ",r.createElement(n.a,{href:"https://www.zenwave360.io/docs/event-driven-design/zenwave-domain-language"},"ZenWave Domain Language (ZDL)"),", a compact developer-friendly DSL, to generate OpenAPI definitions, simplifying the process of creating API documentation, reducing errors, and improving developer productivity. Whether you're managing an extensive API or just getting started, a DSL might be the key to making your API workflow more efficient."),"\n",r.createElement(n.p,null,"This is how it looks ZenWave ZDL as OpenAPI IDL (fragment):"),"\n",r.createElement(i.Ee,{alt:"This is how it looks ZenWave ZDL as OpenAPI IDL (fragment)",dark:"./ZDL-To-OpenAPI-IDL-fragment-dark.png",light:"./ZDL-To-OpenAPI-IDL-fragment-light.png"}),"\n",r.createElement(n.h2,{id:"zenwave-domain-language-zdl",style:{position:"relative"}},r.createElement(n.a,{href:"#zenwave-domain-language-zdl","aria-label":"zenwave domain language zdl permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"ZenWave Domain Language (ZDL)"),"\n",r.createElement(n.p,null,"Inspired by JHipster JDL, ZDL is a language for describing DDD Bounded Contexts, including domain entities and their relationships, services, commands, events and business policies... for Event-Driven Architectures."),"\n",r.createElement(n.p,null,"It's designed to be compact, readable and expressive. Developer friendly, and machine friendly. It works well as an Ubiquitous Language format."),"\n",r.createElement(n.p,null,"It can also be used as an IDL for authoring OpenAPI (and AsyncAPI) definition files."),"\n",r.createElement("img",{src:"https://www.zenwave360.io/static/EventStorming-ZDL-Mapping-cb9c987d5d0aff110c5890481034ae20.png"}),"\n",r.createElement(n.h2,{id:"creating-a-zdl-for-authoring-an-openapi-definition",style:{position:"relative"}},r.createElement(n.a,{href:"#creating-a-zdl-for-authoring-an-openapi-definition","aria-label":"creating a zdl for authoring an openapi definition permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Creating a ZDL for authoring an OpenAPI definition"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"As a minimum requirement, you need a ",r.createElement(n.code,null,"service")," and an ",r.createElement(n.code,null,"aggregate entity")," for this service."),"\n",r.createElement(n.li,null,"You can use this ",r.createElement(n.code,null,"entity")," as request and response objects or you can define separate DTOs for this purpose using ",r.createElement(n.code,null,"input"),"and ",r.createElement(n.code,null,"output")," entities."),"\n",r.createElement(n.li,null,"You can also define and reference ",r.createElement(n.code,null,"enums")," and ",r.createElement(n.code,null,"relationships")," between entities. Nested entities and arrays also work."),"\n",r.createElement(n.li,null,"Lastly you need to define the service methods and their parameters and annotate them using ",r.createElement(n.code,null,"@rest"),", ",r.createElement(n.code,null,"@post"),", ",r.createElement(n.code,null,"@get"),", ",r.createElement(n.code,null,"@put"),", ",r.createElement(n.code,null,"@delete"),", ",r.createElement(n.code,null,"@paginated"),", ",r.createElement(n.code,null,"@inline")," annotations."),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-zdl"},'@aggregate\r\nentity PaymentMethod {\r\n    type PaymentMethodType required\r\n    cardNumber String required minlength(16) maxlength(16)\r\n}\r\n\r\nenum PaymentMethodType { VISA(1), MASTERCARD(2) }\r\n\r\n@rest("/payment-methods")\r\nservice PaymentsService for (PaymentMethod) {\r\n    @post\r\n    doSomethingWithANewPayment(PaymentMethod) PaymentMethod\r\n\r\n    @put("/{id}")\r\n    doSomethingWithAnExistingPayment(id, PaymentMethod) PaymentMethod?\r\n}\n')),"\n",r.createElement(n.p,null,"NOTE: service method only accept two kind of parameters: ",r.createElement(n.code,null,"id")," and command payload (that will map to the request body), but you can use ",r.createElement(n.code,null,"@inline")," to expand fields as request path parameters (see below)."),"\n",r.createElement(n.p,null,"Checkout the ",r.createElement(n.a,{href:"https://www.zenwave360.io/docs/event-driven-design/zenwave-domain-language#services-and-commands"},"ZDL documentation")," for more details about command methods."),"\n",r.createElement(n.h2,{id:"install-zenwave-sdk-using-jbang",style:{position:"relative"}},r.createElement(n.a,{href:"#install-zenwave-sdk-using-jbang","aria-label":"install zenwave sdk using jbang permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Install ZenWave SDK Using JBang"),"\n",r.createElement(n.p,null,"Install an evergreen self updating ZenWave SDK CLI using JBang:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-shell"},"jbang alias add --force --fresh --name=zw release@zenwave360/zenwave-sdk\n")),"\n",r.createElement(n.p,null,"Following these instructions for complete details about JBang and IntelliJ Editor: ",r.createElement(n.a,{href:"https://www.zenwave360.io/docs/getting-started/"},"https://www.zenwave360.io/docs/getting-started/")),"\n",r.createElement(n.p,null,"Now you can use jbang zw to generate a complete OpenAPI definition file from your ZDL model."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-shell"},"jbang zw -p ZDLToOpenAPIPlugin \\\r\nzdlFile=model.zdl \\\r\nidType=integer \\\r\nidTypeFormat=int64 \\\r\ntargetFolder=. \\\r\ntargetFile=payments-openapi.yml\n")),"\n",r.createElement(n.p,null,"Or use ZenWave ZDL Editor for IntelliJ configuring the generator plugin on top of your zdl file:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-zdl"},'config {\r\n    plugins {\r\n        /** Use ZenWave Editor for IntelliJ IDEA to run this */\r\n        ZDLToOpenAPIPlugin {\r\n            idType integer\r\n            idTypeFormat int64\r\n            targetFolder "."\r\n            targetFile "openapi.yml"\r\n        }\r\n    }\r\n}\n')),"\n",r.createElement(n.p,null,r.createElement(n.img,{src:"./RunWith-ZenWave-Editor-for-IntelliJ.png",alt:"Run With ZenWave Editor for IntelliJ"})),"\n",r.createElement(n.p,null,"Then, check the generated OpenAPI definition file payments-openapi.yml, and see for yourself how much typing you saved!"),"\n",r.createElement(n.h2,{id:"expanding-fields-as-request-path-parameters",style:{position:"relative"}},r.createElement(n.a,{href:"#expanding-fields-as-request-path-parameters","aria-label":"expanding fields as request path parameters permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Expanding fields as request path parameters"),"\n",r.createElement(n.p,null,"You can use ",r.createElement(n.code,null,"@inline")," ",r.createElement(n.code,null,"ìnputs")," to expand fields as request path parameters (and service method parameters)."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-zdl"},'@inline // expand fields as request parameters\r\ninput PaymentMethodInput {\r\n    cardNumber String\r\n    paymentMethod PaymentMethod\r\n}\r\n\r\n@rest("/customers")\r\nservice PaymentsService for (PaymentMethod) {\r\n\r\n    @put("/{paymentMethodId}/cardNumber/{cardNumber}") // see example below to specify param types\r\n    updatePaymentMethodByCardNumber(PaymentMethodInput) PaymentMethod?\r\n}\n')),"\n",r.createElement(n.p,null,"It will pick the first parameter from the entity id and the remaining parameters will be configured as ",r.createElement(n.code,null,"string")),"\n",r.createElement(n.p,null,r.createElement(n.img,{src:"./InlinePathParameters-OpenAPI-Generated.png",alt:"Inline Path Parameters OpenAPI Generated"})),"\n",r.createElement(n.p,null,"But you can override the path params with configuration, see complete example below."),"\n",r.createElement(n.h2,{id:"complete-zdl-example",style:{position:"relative"}},r.createElement(n.a,{href:"#complete-zdl-example","aria-label":"complete zdl example permalink",className:"anchor before"},r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Complete ZDL Example"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-zdl"},'@aggregate\r\nentity Customer {\r\n    name String required maxlength(254) /** Customer name */\r\n    email String required maxlength(254) pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/)\r\n    /** Customer Addresses can be stored in a JSON column in the database. */\r\n    @json addresses Address[] minlength(1) maxlength(5) {\r\n        street String required maxlength(254)\r\n        city String required maxlength(254)\r\n    }\r\n}\r\n\r\nentity PaymentMethod {\r\n    type PaymentMethodType required\r\n    cardNumber String required\r\n}\r\n\r\nenum PaymentMethodType { VISA(1), MASTERCARD(2) }\r\n\r\nrelationship OneToMany {\r\n    Customer{paymentMethods required maxlength(3)} to PaymentMethod{customer required}\r\n}\r\n\r\n// you can create \'inputs\' as dtos for your service methods, or use entities directly\r\ninput CustomerSearchCriteria {\r\n    name String\r\n    email String\r\n    city String\r\n    state String\r\n}\r\n\r\n@inline // expand fields as request parameters (and service method parameters)\r\ninput AddressInput {\r\n    addressId String\r\n    address Address\r\n}\r\n\r\n@rest("/customers")\r\nservice CustomerService for (Customer) {\r\n    @post\r\n    createCustomer(Customer) Customer\r\n    @get("/{id}")\r\n    getCustomer(id) Customer?\r\n    @put("/{id}")\r\n    updateCustomer(id, Customer) Customer?\r\n    @put({ path: "/{customerId}/address/{addressId}", params: {addressId: Long} }) // specify param types\r\n    updateCustomerAddress(id, AddressInput) Customer?\r\n    @delete("/{id}")\r\n    deleteCustomer(id)\r\n    @post("/search")\r\n    @paginated\r\n    searchCustomers(CustomerSearchCriteria) Customer[]\r\n}\n')),"\n",r.createElement(n.p,null,"Run:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-shell"},"jbang zw -p io.zenwave360.sdk.plugins.ZDLToOpenAPIPlugin \\\r\n    zdlFile=customers-model.zdl \\\r\n    idType=integer \\\r\n    idTypeFormat=int64 \\\r\n    targetFolder=. \\\r\n    targetFile=openapi.yml\n")),"\n",r.createElement(n.p,null,"And get surprised by the amount of YAML typing you saved!"),"\n",r.createElement(n.p,null,"Happy coding! 🚀"))}var l=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?r.createElement(n,e,r.createElement(o,e)):o(e)};function s(e){let{children:n}=e;return n}function d(e){return r.createElement(s,e,r.createElement(l,e))}},16376:function(e,n,t){t.d(n,{d2:function(){return r.d},zx:function(){return d},L0:function(){return p},$s:function(){return v},VS:function(){return y},gT:function(){return b},P7:function(){return h},Gz:function(){return g},S:function(){return W},VM:function(){return x},sd:function(){return P},kW:function(){return C},$D:function(){return z},DH:function(){return k},vC:function(){return E},LR:function(){return w},Ee:function(){return D},Bk:function(){return _},Nm:function(){return M},X_:function(){return m.X},YZ:function(){return O},vk:function(){return F},BW:function(){return H},Mo:function(){return T}});var r=t(63585),a=t(27378),i=t(87573),o=t(30294);const l=e=>{let{background:n,backgroundHover:t,on:r}=e;return()=>(0,o.ivY)(["background-color:",";color:",";&:hover:not(:disabled){background-color:",";color:",";}&:active:not(:disabled){background-color:",";color:",";}"],n,r,t,r,t,r)},s=o.ZPm.buttonBox.withConfig({displayName:"Button__InnerButton",componentId:"sc-1qxez5q-0"})(["appearance:none;border-radius:base;transition:base;font-weight:500;border:0;display:inline-flex;align-items:center;cursor:pointer;font-size:16;padding:2 3;text-decoration:none !important;&:disabled{opacity:0.5;cursor:default;}&[data-variant='primary']{","}&[data-variant='success']{","}&[data-variant='danger']{","}&[data-variant='neutral']{","}"],l({background:"primary-600",backgroundHover:"primary-700",on:"white"}),l({background:"green-600",backgroundHover:"green-700",on:"white"}),l({background:"red-600",backgroundHover:"red-700",on:"white"}),l({background:"gray-300",backgroundHover:"gray-400",on:"black"})),d=a.forwardRef(((e,n)=>{let{variant:t="primary",children:r,...o}=e;return a.createElement(i.z,{ref:n,"data-variant":t},(e=>a.createElement(s,Object.assign({},e,o),r)))}));t(23824),t(31729);var c=t(63681),m=t(84234);const u=o.ZPm.box.withConfig({displayName:"Feature__InnerFeature",componentId:"sc-17n9iec-0"})(["border-left:1;border-left-style:dashed;border-left-color:layout-border;padding-left:4 !important;padding-right:5 !important;"]),p=a.forwardRef(((e,n)=>a.createElement(u,Object.assign({ref:n,col:{xs:1,md:1/3},px:2,pt:4,pb:{xs:2,md:5}},e)))),g=o.ZPm.h2.withConfig({displayName:"Feature__FeatureTitle",componentId:"sc-17n9iec-1"})(["margin:3 0;font-size:16;font-weight:500;border-left:1;border-color:primary-400;margin-left:",";padding-left:",";"],c.th.px(-9),c.th.px(9)),h=o.ZPm.p.withConfig({displayName:"Feature__FeatureText",componentId:"sc-17n9iec-2"})(["color:on-background-light;font-size:15;text-align:justify;margin:4 0;"]),f=o.ZPm.img.withConfig({displayName:"Feature__InnerFeatureImage",componentId:"sc-17n9iec-3"})(["margin-top:3;"]),v=a.forwardRef(((e,n)=>a.createElement(f,Object.assign({ref:n,width:48,height:48},e)))),y=a.forwardRef(((e,n)=>a.createElement(m.X,Object.assign({ref:n,row:!0,my:-4,px:3},e)))),b=a.forwardRef(((e,n)=>a.createElement(o.x.section,Object.assign({ref:n,py:4,borderTop:1,borderBottom:1,borderColor:"layout-border"},e)))),w=o.ZPm.h1Box.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-18tbum5-0"})(["font-size:38;font-weight:600;line-height:1.2;letter-spacing:-1.12px;margin:0 0 2;"," ",""],(0,c.up)("md",(0,o.ivY)(["padding-top:4;font-size:48;"])),(0,c.up)("xl",(0,o.ivY)(["font-size:60;"]))),E=o.ZPm.pBox.withConfig({displayName:"Hero__HeroTeaser",componentId:"sc-18tbum5-1"})(["font-size:18;margin:3 0;"," ",""],(0,c.up)("md",(0,o.ivY)(["font-size:20;"])),(0,c.up)("xl",(0,o.ivY)(["font-size:24;"]))),I=(0,o.ZPm)(m.X).withConfig({displayName:"Hero__InnerHero",componentId:"sc-18tbum5-2"})(["background-repeat:no-repeat;background-position:top -5% center;background-size:100% auto;padding-top:65%;text-align:center;"," ",""],(0,c.up)("md",(0,o.ivY)(["padding-top:0;margin-top:5;background-position:center right;background-size:58% auto;min-height:400;text-align:left;"])),(0,c.up)("xl",(0,o.ivY)(["margin-top:6;"]))),x=a.forwardRef(((e,n)=>{let{backgroundImageURL:t,...r}=e;return a.createElement(I,Object.assign({ref:n,backgroundImage:"url("+t+")"},r))})),z=a.forwardRef(((e,n)=>a.createElement(o.x.div,Object.assign({ref:n,w:{md:.5}},e)))),k=o.ZPm.sectionBox.withConfig({displayName:"Hero__HeroSection",componentId:"sc-18tbum5-3"})(["overflow:hidden;padding-top:2;padding-bottom:5;"]),C=a.forwardRef(((e,n)=>a.createElement(o.x.div,Object.assign({ref:n,row:!0,m:-2,justifyContent:{xs:"center",md:"initial"}},e)))),P=a.forwardRef(((e,n)=>a.createElement(o.x.div,Object.assign({ref:n,col:"auto",p:2},e))));var S=t(24956);const Z=o.ZPm.div.withConfig({displayName:"Image__ImageContainer",componentId:"sc-1b0134e-0"})(["text-align:",";"],(e=>e.align)),A=o.ZPm.img.withConfig({displayName:"Image__InnerImage",componentId:"sc-1b0134e-1"})(["display:inline-block;"]),L=(e,n)=>"dark"===n?e.dark||e.src:e.light||e.src,D=a.forwardRef(((e,n)=>a.createElement(Z,{align:e.align||"center",className:e.visible},a.createElement(A,Object.assign({ref:n,src:L(e,(0,S.If)()[0])},e)))));t(15239),t(83160);const N=(0,o.ZPm)(o.x.cite).withConfig({displayName:"Quote__Cite",componentId:"sc-12i53kz-0"})(["display:block;text-align:right;margin-top:1rem;"]),_=a.forwardRef(((e,n)=>a.createElement(o.x.blockquote,Object.assign({ref:n,className:"quote"},e)))),M=a.forwardRef(((e,n)=>a.createElement(N,Object.assign({ref:n},e)))),H=a.forwardRef(((e,n)=>a.createElement(o.x.section,Object.assign({ref:n,py:4,borderTop:1,borderBottom:1,borderColor:"layout-border"},e)))),O=o.ZPm.divBox.withConfig({displayName:"WideFeature",componentId:"sc-1ak5yjf-0"})(["display:block;",")"],(0,c.up)("md",(0,o.ivY)(["margin:0 20px;border-top:1px dashed;border-bottom:1px dotted;border-color:var(--xstyled-colors-layout-border,#d4d4d8);display:grid;grid-template-columns:1fr 1fr 1fr;"]))),T=o.ZPm.divBox.withConfig({displayName:"WideFeature__WideFeatureText",componentId:"sc-1ak5yjf-1"})(["padding:1rem;grid-column-start:span 2;font-size:18;"," ",""],(0,c.up)("md",(0,o.ivY)(["font-size:20;padding:3rem;padding-top:2rem;"])),(0,c.up)("xl",(0,o.ivY)(["font-size:24;"]))),j=o.ZPm.divBox.withConfig({displayName:"WideFeature__WideFeatureImageContainer",componentId:"sc-1ak5yjf-2"})(["padding:1rem;text-align:center;"]),q=o.ZPm.imgBox.withConfig({displayName:"WideFeature__InnerImage",componentId:"sc-1ak5yjf-3"})(["display:inline-block;"]),B=(e,n)=>"dark"===n?e.dark||e.src:e.light||e.src,F=a.forwardRef(((e,n)=>a.createElement(j,{className:e.className},a.createElement(q,Object.assign({ref:n,src:B(e,(0,S.If)()[0])},e))))),W=e=>{let{gist:n,file:t}=e;const r=(0,a.useRef)(null);(0,a.useEffect)((()=>{(async()=>{const e=t?"https://gist.githubusercontent.com/"+n+"/raw/"+t:"https://gist.githubusercontent.com/"+n+"/raw";try{const n=await fetch(e);if(n.ok){const e=22*(await n.text()).split("\n").length+40;r.current&&(r.current.style.height=e+"px")}else console.error("Failed to fetch Gist content")}catch(a){console.error("Error fetching Gist content:",a)}})()}),[n,t]);const i=t?"https://gist.github.com/"+n+".pibb?file="+t:"https://gist.github.com/"+n+".pibb",o=t?"https://gist.github.com/"+n+"#file-"+t.replace(/\./g,"-").toLowerCase():"https://gist.github.com/"+n;return a.createElement("div",{style:{border:"1px solid #ccc",padding:"10px 0 0 0",borderRadius:"5px"}},t&&a.createElement("header",{style:{marginLeft:"10px",fontStyle:"oblique"}},a.createElement("span",{role:"img","aria-label":"source code"},"🗒️"),a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},t)),a.createElement("iframe",{title:t,ref:r,src:i,width:"100%",frameBorder:"0",style:{margin:"0",padding:"0"}}))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-post-js-content-file-path-c-users-ivangsa-workspace-zenwave-zen-wave-360-github-io-website-pages-posts-zen-wave-zdl-as-idl-for-open-api-mdx-adf5b7beb25e48a73b9e.js.map