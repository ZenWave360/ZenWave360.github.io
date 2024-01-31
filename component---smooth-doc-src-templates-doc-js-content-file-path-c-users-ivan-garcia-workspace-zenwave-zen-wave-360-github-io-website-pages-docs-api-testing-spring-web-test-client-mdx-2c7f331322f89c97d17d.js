"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[960],{12189:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var r=s(27378),n=s(20951);function a(e){const t=Object.assign({h1:"h1",a:"a",div:"div",p:"p",ul:"ul",li:"li",h2:"h2",pre:"pre",code:"code"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,{id:"generating-spring-webtestclient",style:{position:"relative"}},r.createElement(t.a,{href:"#generating-spring-webtestclient","aria-label":"generating spring webtestclient permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Generating Spring WebTestClient"),"\n",r.createElement(t.p,null,"Generate Unit and Business Tests right from your OpenAPI definition."),"\n",r.createElement(t.p,null,"Don't treat testing as an afterthought."),"\n",r.createElement(t.p,null,"Generate SpringMVC or Spring WebFlux Unit or Business Tests skeletons using WebTestClient based on OpenAPI definition."),"\n",r.createElement(t.p,null,"You can generate both:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement("strong",{className:"orange"},"Unit/Vertical/Integration Tests")," for each OpenAPI Operation, it's up to you how you configure your BaseTest class."),"\n",r.createElement(t.li,null,r.createElement("strong",{className:"orange"},"Business Flow Tests")," for a group of OpenAPI Operations that work together as a Business Use Case."),"\n"),"\n",r.createElement(t.h2,{id:"unit-tests-for-each-openapi-operation",style:{position:"relative"}},r.createElement(t.a,{href:"#unit-tests-for-each-openapi-operation","aria-label":"unit tests for each openapi operation permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Unit Tests for each OpenAPI Operation"),"\n",r.createElement(t.p,null,"You can use ZenWave IntelliJ Plugin with ZDL plugins:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-zdl"},'config {\r\n    plugins {\r\n▶️      SpringWebTestClientPlugin {\r\n            groupBy service\r\n            specFile "modules/customers/src/main/resources/apis/openapi.yml"\r\n            // these should match the values of openapi-generator-maven-plugin\r\n            openApiApiPackage "{{basePackage}}.adapters.web"\r\n            openApiModelPackage "{{basePackage}}.adapters.web.model"\r\n            openApiModelNameSuffix DTO\r\n            targetFolder "src/test/java"\r\n        }\r\n    }\r\n}\n')),"\n",r.createElement(t.p,null,"Or JBang CLI:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-shell"},"jbang zw -p io.zenwave360.sdk.plugins.SpringWebTestClientPlugin \\\r\n    specFile=src/main/resources/model/openapi.yml \\\r\n    targetFolder=src/test/java \\\r\n    testsPackage=io.zenwave360.example.adapters.web.tests \\\r\n    openApiApiPackage=io.zenwave360.example.adapters.web \\\r\n    openApiModelPackage=io.zenwave360.example.adapters.web.model \\\r\n    openApiModelNameSuffix=DTO \\\r\n    groupBy=service\n")),"\n",r.createElement(t.p,null,"This is a sample of the code you get for a single OpenAPI Operation:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-java"},'/**\r\n* Integration tests for the {@link CustomerApi} REST controller.\r\n*/\r\npublic class CustomerApiIT extends BaseWebTestClientTest {\r\n\r\n    /**\r\n    * Test: Create customer javadoc comment for OK.\r\n    */\r\n    @Test\r\n    public void testCreateCustomer_201() {\r\n        CustomerDTO requestBody = new CustomerDTO();\r\n        requestBody.setId(null);\r\n        requestBody.setVersion(null);\r\n        requestBody.setFirstName(null);\r\n        requestBody.setLastName(null);\r\n        requestBody.setEmail(null);\r\n        requestBody.setPhone(null);\r\n        requestBody.setAddresses(new java.util.ArrayList<>());\r\n        requestBody.getAddresses().get(0).setIdentifier("aaa");\r\n        requestBody.getAddresses().get(0).setStreet("aaa");\r\n        requestBody.getAddresses().get(0).setCity("aaa");\r\n        requestBody.getAddresses().get(0).setState("aaa");\r\n        requestBody.getAddresses().get(0).setZip("aaa");\r\n        requestBody.getAddresses().get(0).setType(new AddressTypeDTO());\r\n\r\n        webTestClient.method(POST).uri("/api/customers")\r\n            .accept(MediaType.APPLICATION_JSON)\r\n            .contentType(MediaType.APPLICATION_JSON)\r\n            .bodyValue(requestBody)\r\n            .exchange()\r\n            .expectStatus().isEqualTo(201)\r\n            .expectHeader().contentType(MediaType.APPLICATION_JSON)\r\n            .expectBody()\r\n            .jsonPath("$.id").isNotEmpty()\r\n            .jsonPath("$.version").isNotEmpty()\r\n            .jsonPath("$.firstName").isNotEmpty()\r\n            .jsonPath("$.lastName").isNotEmpty()\r\n            .jsonPath("$.email").isNotEmpty()\r\n            .jsonPath("$.phone").isNotEmpty()\r\n            .jsonPath("$.addresses").isNotEmpty()\r\n            .jsonPath("$.addresses").isArray()\r\n            .jsonPath("$.addresses[0].identifier").isNotEmpty()\r\n            .jsonPath("$.addresses[0].street").isNotEmpty()\r\n            .jsonPath("$.addresses[0].city").isNotEmpty()\r\n            .jsonPath("$.addresses[0].state").isNotEmpty()\r\n            .jsonPath("$.addresses[0].zip").isNotEmpty()\r\n            .jsonPath("$.addresses[0].type").isNotEmpty();\r\n    }\r\n}\n')),"\n",r.createElement(t.h2,{id:"business-flow-test-for-some-openapi-operations-that-work-together",style:{position:"relative"}},r.createElement(t.a,{href:"#business-flow-test-for-some-openapi-operations-that-work-together","aria-label":"business flow test for some openapi operations that work together permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Business Flow Test for some OpenAPI Operations that work together"),"\n",r.createElement(t.p,null,"You can use ZenWave IntelliJ Plugin with ZDL plugins:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-zdl"},'config {\r\n    plugins {\r\n▶️      SpringWebTestClientPlugin {\r\n            groupBy businessFlow\r\n            businessFlowTestName CustomerCRUDTest\r\n            operationIds createCustomer,getCustomer,updateCustomer,deleteCustomer\r\n\r\n            specFile "modules/customers/src/main/resources/apis/openapi.yml"\r\n            // these should match the values of openapi-generator-maven-plugin\r\n            openApiApiPackage "{{basePackage}}.adapters.web"\r\n            openApiModelPackage "{{basePackage}}.adapters.web.model"\r\n            openApiModelNameSuffix DTO\r\n            targetFolder "src/test/java"\r\n        }\r\n    }\r\n}\n')),"\n",r.createElement(t.p,null,"Or JBang CLI:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-shell"},"jbang zw -p io.zenwave360.sdk.plugins.SpringWebTestClientPlugin \\\r\n    specFile=src/main/resources/model/openapi.yml \\\r\n    targetFolder=src/test/java \\\r\n    testsPackage=io.zenwave360.example.adapters.web.tests \\\r\n    openApiApiPackage=io.zenwave360.example.adapters.web \\\r\n    openApiModelPackage=io.zenwave360.example.adapters.web.model \\\r\n    openApiModelNameSuffix=DTO \\\r\n    groupBy=businessFlow \\\r\n    businessFlowTestName=CustomerCRUDTest \\\r\n    operationIds=createCustomer,getCustomer,updateCustomer,deleteCustomer\n")),"\n",r.createElement(t.p,null,"This is the code you will get. Now it's just a matter of filling in the blanks and complete how each operation connects to the next one."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-java"},'public class CustomerCRUDTest extends BaseWebTestClientTest {\r\n\r\n    /**\r\n    * Business Flow Test for: createCustomer, updateCustomer, deleteCustomer, getCustomer.\r\n    */\r\n    @Test\r\n    public void testCustomerCRUDTest() {\r\n        // createCustomer: Create customer javadoc comment\r\n        CustomerDTO customerRequestBody0 = new CustomerDTO();\r\n        customerRequestBody0.setId(null);\r\n        customerRequestBody0.setVersion(null);\r\n        customerRequestBody0.setFirstName(null);\r\n        customerRequestBody0.setLastName(null);\r\n        customerRequestBody0.setEmail(null);\r\n        customerRequestBody0.setPhone(null);\r\n        customerRequestBody0.setAddresses(new java.util.ArrayList<>());\r\n        customerRequestBody0.getAddresses().get(0).setIdentifier("aaa");\r\n        customerRequestBody0.getAddresses().get(0).setStreet("aaa");\r\n        customerRequestBody0.getAddresses().get(0).setCity("aaa");\r\n        customerRequestBody0.getAddresses().get(0).setState("aaa");\r\n        customerRequestBody0.getAddresses().get(0).setZip("aaa");\r\n        customerRequestBody0.getAddresses().get(0).setType(new AddressTypeDTO());\r\n\r\n        var createCustomerResponse0 = webTestClient.method(POST).uri("/api/customers")\r\n            .accept(MediaType.APPLICATION_JSON)\r\n            .contentType(MediaType.APPLICATION_JSON)\r\n            .bodyValue(customerRequestBody0)\r\n            .exchange()\r\n            .expectStatus().isEqualTo(201)\r\n            .expectHeader().contentType(MediaType.APPLICATION_JSON)\r\n            .returnResult(CustomerDTO.class);\r\n\r\n        // updateCustomer: updateCustomer\r\n        CustomerDTO customerRequestBody1 = new CustomerDTO();\r\n        customerRequestBody1.setId(null);\r\n        customerRequestBody1.setVersion(null);\r\n        customerRequestBody1.setFirstName(null);\r\n        customerRequestBody1.setLastName(null);\r\n        customerRequestBody1.setEmail(null);\r\n        customerRequestBody1.setPhone(null);\r\n        customerRequestBody1.setAddresses(new java.util.ArrayList<>());\r\n        customerRequestBody1.getAddresses().get(0).setIdentifier("aaa");\r\n        customerRequestBody1.getAddresses().get(0).setStreet("aaa");\r\n        customerRequestBody1.getAddresses().get(0).setCity("aaa");\r\n        customerRequestBody1.getAddresses().get(0).setState("aaa");\r\n        customerRequestBody1.getAddresses().get(0).setZip("aaa");\r\n        customerRequestBody1.getAddresses().get(0).setType(new AddressTypeDTO());\r\n        var customerId1 = "";\r\n\r\n        var updateCustomerResponse1 = webTestClient.method(PUT).uri("/api/customers/{customerId}", customerId1)\r\n            .accept(MediaType.APPLICATION_JSON)\r\n            .contentType(MediaType.APPLICATION_JSON)\r\n            .bodyValue(customerRequestBody1)\r\n            .exchange()\r\n            .expectStatus().isEqualTo(200)\r\n            .expectHeader().contentType(MediaType.APPLICATION_JSON)\r\n            .returnResult(CustomerDTO.class);\r\n\r\n        // deleteCustomer: deleteCustomer\r\n        var customerId2 = "";\r\n\r\n        webTestClient.method(DELETE).uri("/api/customers/{customerId}", customerId2)\r\n            .accept(MediaType.APPLICATION_JSON)\r\n            .exchange()\r\n            .expectStatus().isEqualTo(204);\r\n\r\n        // getCustomer: getCustomer\r\n        var customerId3 = "";\r\n\r\n        var getCustomerResponse3 = webTestClient.method(GET).uri("/api/customers/{customerId}", customerId3)\r\n            .accept(MediaType.APPLICATION_JSON)\r\n            .exchange()\r\n            .expectStatus().isEqualTo(200)\r\n            .expectHeader().contentType(MediaType.APPLICATION_JSON)\r\n            .returnResult(CustomerDTO.class);\r\n\r\n    }\r\n}\n')))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)};function l(e){let{children:t}=e;return t}function u(e){return r.createElement(l,e,r.createElement(o,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-c-users-ivan-garcia-workspace-zenwave-zen-wave-360-github-io-website-pages-docs-api-testing-spring-web-test-client-mdx-2c7f331322f89c97d17d.js.map