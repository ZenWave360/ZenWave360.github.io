"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[254],{29639:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(27378),o=r(20951),a=r(16376),i=r.p+"static/openapi-customer-service-outline-68b9a96e93c4c92af26c41eaeecc07c3.png";function s(e){const t=Object.assign({h1:"h1",a:"a",div:"div",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre",blockquote:"blockquote",h3:"h3"},(0,o.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h1,{id:"exposing-a-rest-api-for-your-service",style:{position:"relative"}},n.createElement(t.a,{href:"#exposing-a-rest-api-for-your-service","aria-label":"exposing a rest api for your service permalink",className:"anchor before"},n.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Exposing a REST API for your Service"),"\n",n.createElement(t.p,null,"While ZDL Models the inside of your application, OpenAPI (whether generated, or manually written) will be the source of truth for your REST API."),"\n",n.createElement(t.p,null,"You can still document your ZDL Models for:"),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,"Annotate each service command documenting how it is connected to the REST API."),"\n",n.createElement(t.li,null,"Generate a quite complete draft versions of OpenAPI from these ZDL models annotations."),"\n"),"\n",n.createElement(t.h2,{id:"using-zenwave-zdl-as-definition-language-for-openapi",style:{position:"relative"}},n.createElement(t.a,{href:"#using-zenwave-zdl-as-definition-language-for-openapi","aria-label":"using zenwave zdl as definition language for openapi permalink",className:"anchor before"},n.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Using ZenWave ZDL as Definition Language for OpenAPI"),"\n",n.createElement(t.p,null,"Annotating each service command to document how is connected to the REST API."),"\n",n.createElement(t.p,null,"ZenWave SDK will use the service command name for matching with OpenAPI operationId, but you can always set it explicitly like this: ",n.createElement(t.code,null,'@get({path: "/somepath", operationId: "someOperationId"})')),"\n",n.createElement(t.p,null,"Supported annotations are:"),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,n.createElement(t.code,null,'@rest("/customers")')," marks this service as exposed via REST API and defines the base path for all operations in this service."),"\n",n.createElement(t.li,null,n.createElement(t.code,null,"@get"),", ",n.createElement(t.code,null,"@post"),", ",n.createElement(t.code,null,"@put"),", ",n.createElement(t.code,null,"@delete"),", ",n.createElement(t.code,null,"@patch")," defines the HTTP method for the operation."),"\n",n.createElement(t.li,null,n.createElement(t.code,null,"@paginated")," defines that the operation will return a paginated response."),"\n"),"\n",n.createElement(t.p,null,"So the following definition:"),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-zdl"},'/**\r\n * Customer Service annotated for REST and AsyncAPI serves two purposes:\r\n *   1. Document how each service command will be exposed to the outside world.\r\n *   2. Generate draft versions of AsyncAPI and OpenAPI from your ZDL models.\r\n */\r\n@rest("/customers")\r\nservice CustomerService for (Customer) {\r\n    @post\r\n    createCustomer(Customer) Customer\r\n    @put("/{customerId}")\r\n    updateCustomer(id, Customer) Customer?\r\n    @put({ path: "/{customerId}/address/{identifier}", params: {identifier: Long} }) // specify param types\r\n    updateCustomerAddress(id, AddressInput) Customer?\r\n    @delete("/{customerId}")\r\n    deleteCustomer(id)\r\n    @get("/{customerId}")\r\n    getCustomer(id) Customer?\r\n    @paginated\r\n    @get({path: "/search", params: {search: String}}) // this creates a query param in the OpenAPI\r\n    listCustomers() Customer[]\r\n}\r\n\r\n@inline\r\ninput AddressInput {\r\n    identifier String\r\n    address Address\r\n}\n')),"\n",n.createElement(t.p,null,"Will produce the following OpenAPI definition:"),"\n",n.createElement(a.Ee,{src:i,alt:"OpenAPI Customer Service Outline",align:"left"}),"\n",n.createElement(t.blockquote,null,"\n",n.createElement(t.p,null,"⚠️ REMEMBER: Once generated, OpenAPI definition becomes the source of truth for your REST API."),"\n"),"\n",n.createElement(t.h3,{id:"pagination-flavors",style:{position:"relative"}},n.createElement(t.a,{href:"#pagination-flavors","aria-label":"pagination flavors permalink",className:"anchor before"},n.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Pagination Flavor(s)"),"\n",n.createElement(t.p,null,"ZDLToOpenAPI supports the following pagination style out of the box:"),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-zdl"},'@rest("/customers")\r\nservice CustomerService for (Customer) {\r\n    @paginated\r\n    @get("/search")\r\n    listCustomers() Customer[]\r\n}\n')),"\n",n.createElement(t.p,null,"becomes ..."),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-yaml"},'paths:\r\n  /customers/search:\r\n    get:\r\n      operationId: listCustomers\r\n      description: "listCustomers"\r\n      tags: [Customer]\r\n      parameters:\r\n        - $ref: "#/components/parameters/page"\r\n        - $ref: "#/components/parameters/limit"\r\n        - $ref: "#/components/parameters/sort"\r\n      responses:\r\n        "200":\r\n          description: "OK"\r\n          content:\r\n            application/json:\r\n              schema:\r\n                $ref: "#/components/schemas/CustomerPaginated"\r\ncomponents:\r\n  schemas:\r\n    CustomerPaginated:\r\n      allOf:\r\n      - $ref: "#/components/schemas/Page"\r\n      - x-business-entity-paginated: "Customer"\r\n      - properties:\r\n          content:\r\n            type: "array"\r\n            items:\r\n              $ref: "#/components/schemas/Customer"\r\n\r\n    Page:\r\n      type: object\r\n      required:\r\n        - "content"\r\n        - "totalElements"\r\n        - "totalPages"\r\n        - "size"\r\n        - "number"\r\n      properties:\r\n        number:\r\n          type: integer\r\n          minimum: 0\r\n        numberOfElements:\r\n          type: integer\r\n          minimum: 0\r\n        size:\r\n          type: integer\r\n          minimum: 0\r\n          maximum: 200\r\n          multipleOf: 25\r\n        totalElements:\r\n          type: integer\r\n        totalPages:\r\n          type: integer\r\n\r\n  parameters:\r\n    page:\r\n      name: page\r\n      in: query\r\n      description: The number of results page\r\n      schema:\r\n        type: integer\r\n        format: int32\r\n        default: 0\r\n    limit:\r\n      name: limit\r\n      in: query\r\n      description: The number of results in a single page\r\n      schema:\r\n        type: integer\r\n        format: int32\r\n        default: 20\r\n    sort:\r\n      name: sort\r\n      in: query\r\n      description: The number of results page\r\n      schema:\r\n        type: array\r\n        items:\r\n          type: string\n')),"\n",n.createElement(t.blockquote,null,"\n",n.createElement(t.p,null,"Currently, you will need to create a custom implementation of ZDLToOpenAPI to support your own pagination style."),"\n"),"\n",n.createElement(t.p,null,"We are working on providing different pagination flavors out of the box and providing a way to customize the pagination style without the need to create your own plugin."),"\n",n.createElement(t.h2,{id:"generating-springmvc-controller-interfaces-with-official-openapi-generator",style:{position:"relative"}},n.createElement(t.a,{href:"#generating-springmvc-controller-interfaces-with-official-openapi-generator","aria-label":"generating springmvc controller interfaces with official openapi generator permalink",className:"anchor before"},n.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Generating SpringMVC Controller Interfaces with official OpenAPI Generator"),"\n",n.createElement(t.p,null,"Use the following configuration to generate SpringMVC Controller Interfaces from OpenAPI with the official ",n.createElement(t.a,{href:"https://openapi-generator.tech/docs/generators/spring/"},"OpenAPI Generator - Spring"),":"),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-xml"},"<plugin>\r\n    <groupId>org.openapitools</groupId>\r\n    <artifactId>openapi-generator-maven-plugin</artifactId>\r\n    <version>6.6.0</version>\r\n    <executions>\r\n        <execution>\r\n            <id>openapi-generator-server</id>\r\n            <goals>\r\n                <goal>generate</goal>\r\n            </goals>\r\n            <phase>generate-sources</phase>\r\n            <configuration>\r\n                <inputSpec>${project.basedir}/src/main/resources/apis/openapi.yml</inputSpec>\r\n                <generatorName>spring</generatorName>\r\n                <apiPackage>${basePackage}.adapters.web</apiPackage>\r\n                <modelPackage>${basePackage}.adapters.web.model</modelPackage>\r\n                <modelNameSuffix>DTO</modelNameSuffix>\r\n                <addCompileSourceRoot>true</addCompileSourceRoot>\r\n                <supportingFilesToGenerate>\r\n                    ApiUtil.java\r\n                </supportingFilesToGenerate>\r\n                <typeMappings>\r\n                    <typeMapping>Double=java.math.BigDecimal</typeMapping>\r\n                </typeMappings>\r\n                <configOptions>\r\n                    <useSpringBoot3>true</useSpringBoot3>\r\n                    <documentationProvider>none</documentationProvider>\r\n                    <openApiNullable>false</openApiNullable>\r\n                    <useOptional>true</useOptional>\r\n                    <useTags>true</useTags>\r\n                    <interfaceOnly>true</interfaceOnly>\r\n                    <delegatePattern>false</delegatePattern>\r\n                </configOptions>\r\n            </configuration>\r\n        </execution>\r\n    </executions>\r\n</plugin>\n")),"\n",n.createElement(t.p,null,"These settings are compatible with ",n.createElement(t.a,{href:"https://zenwave360.github.io/zenwave-sdk/plugins/openapi-controllers/"},"OpenAPI: REST Controllers Generator"),":"),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,n.createElement(t.code,null,"<typeMapping>Double=java.math.BigDecimal</typeMapping>")),"\n",n.createElement(t.li,null,n.createElement(t.code,null,"<useSpringBoot3>true</useSpringBoot3>")," (use SpringBoot 3 and jakarta annotations)"),"\n",n.createElement(t.li,null,n.createElement(t.code,null,"<openApiNullable>false</openApiNullable>")," (we use java.util.Optional instead)"),"\n",n.createElement(t.li,null,n.createElement(t.code,null,"<useOptional>true</useOptional>")," (we use java.util.Optional)"),"\n",n.createElement(t.li,null,n.createElement(t.code,null,"<useTags>true</useTags>")," (required for grouping the operations in services by tag)"),"\n",n.createElement(t.li,null,n.createElement(t.code,null,"<interfaceOnly>true</interfaceOnly>")),"\n",n.createElement(t.li,null,n.createElement(t.code,null,"<delegatePattern>false</delegatePattern>")),"\n"),"\n",n.createElement(t.h2,{id:"generating-springmvc-controller-from-openapi-skeletons",style:{position:"relative"}},n.createElement(t.a,{href:"#generating-springmvc-controller-from-openapi-skeletons","aria-label":"generating springmvc controller from openapi skeletons permalink",className:"anchor before"},n.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Generating SpringMVC Controller from OpenAPI (skeletons)"),"\n",n.createElement(t.p,null,"You can use ZenWave SDK ",n.createElement(t.a,{href:"https://zenwave360.github.io/zenwave-sdk/plugins/openapi-controllers/"},"OpenAPI: REST Controllers Generator")," to generate SpringMVC Controllers (skeletons) from OpenAPI."),"\n",n.createElement(t.p,null,"You can both use IntelliJ Plugin:"),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-zdl"},'/**\r\n * ZenWave Online Food Delivery - Customers Module.\r\n */\r\nconfig {\r\n    title "ZenWave Online Food Delivery - Customers Module"\r\n    basePackage "io.zenwave360.example.customers"\r\n    targetFolder "modules/customers"\r\n    persistence mongodb\r\n\r\n    // these can be executed directly from ZenWave IntelliJ Plugin\r\n    plugins {\r\n\r\n        ZDLToOpenAPIPlugin {\r\n            idType string\r\n            targetFile "{{targetFolder}}/src/main/resources/apis/openapi.yml"\r\n        }\r\n\r\n        OpenAPIControllersPlugin {\r\n            apiFile "modules/customers/src/main/resources/apis/openapi.yml" // relative to project root\r\n            zdlFile "models/customers.zdl" // this file: relative project root\r\n\r\n            // these should match the values of openapi-generator-maven-plugin\r\n            openApiApiPackage "{{basePackage}}.adapters.web"\r\n            openApiModelPackage "{{basePackage}}.adapters.web.model"\r\n            openApiModelNameSuffix DTO\r\n        }\r\n    }\r\n}\n')),"\n",n.createElement(t.p,null,"Or JBang CLI:"),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-bash"},"jbang zw -p io.zenwave360.sdk.plugins.OpenAPIControllersPlugin\r\n    apiFile=src/main/resources/model/openapi.yml \\\r\n    zdlFile=src/main/resources/model/orders-model.jdl \\\r\n    basePackage=io.zenwave360.example \\\r\n    controllersPackage={{basePackage}}.adapters.web \\\r\n    openApiApiPackage=io.zenwave360.example.adapters.web \\\r\n    openApiModelPackage=io.zenwave360.example.adapters.web.model \\\r\n    openApiModelNameSuffix=DTO \\\r\n    targetFolder=.\n")),"\n",n.createElement(t.p,null,"Generated Code:"),"\n",n.createElement(t.pre,null,n.createElement(t.code,null," src/main/java/\r\n   📦 <basePackage>\r\n       📦 adapters\r\n           └─ web (controllersPackage)\r\n              ├─ 📦 mappers\r\n              |   └─ CustomerDTOsMapper.java (MapStruct mapper)\r\n              └─ CustomerApiController (SpringMVC: implements CustomerApi)\r\n src/test/java/\r\n   📦 <basePackage>\r\n       📦 adapters\r\n           └─ web (controllersPackage)\r\n              └─ CustomerApiControllerTest (UnitTest using ServicesInMemoryConfig)\n")),"\n",n.createElement(t.p,null,"Given you configured rest annotations in your ZDL model, or customize it like ",n.createElement(t.code,null,'@get({path: "/somepath", operationId: "someOperationId"})'),", this is the implementation you will get out of the box:"),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-java"},'@RestController\r\n@RequestMapping("/api")\r\npublic class CustomerApiController implements CustomerApi {\r\n\r\n\tprivate final Logger log = LoggerFactory.getLogger(getClass());\r\n\r\n\t@Autowired\r\n\tprivate NativeWebRequest request;\r\n\r\n\tprivate CustomerService customerService;\r\n\r\n\t@Autowired\r\n\tpublic CustomerApiController setCustomerService(CustomerService customerService) {\r\n\t\tthis.customerService = customerService;\r\n\t\treturn this;\r\n\t}\r\n\r\n\tprivate CustomerDTOsMapper mapper = CustomerDTOsMapper.INSTANCE;\r\n\r\n\t@Override\r\n\tpublic Optional<NativeWebRequest> getRequest() {\r\n\t\treturn Optional.ofNullable(request);\r\n\t}\r\n\r\n\t@Override\r\n\tpublic ResponseEntity<CustomerDTO> createCustomer(CustomerDTO reqBody) {\r\n\t\tvar input = mapper.asCustomer(reqBody);\r\n\t\tvar customer = customerService.createCustomer(input);\r\n\t\tCustomerDTO responseDTO = mapper.asCustomerDTO(customer);\r\n\t\treturn ResponseEntity.status(201).body(responseDTO);\r\n\t}\r\n\r\n\t@Override\r\n\tpublic ResponseEntity<CustomerPaginatedDTO> listCustomers(Optional<Integer> page, Optional<Integer> limit,\r\n\t\t\tOptional<List<String>> sort) {\r\n\t\tvar customerPage = customerService.listCustomers(pageOf(page, limit, sort));\r\n\t\tvar responseDTO = mapper.asCustomerPaginatedDTO(customerPage);\r\n\t\treturn ResponseEntity.status(200).body(responseDTO);\r\n\t}\r\n\r\n\t@Override\r\n\tpublic ResponseEntity<CustomerDTO> updateCustomer(String customerId, CustomerDTO reqBody) {\r\n\t\tvar input = mapper.asCustomer(reqBody);\r\n\t\tvar customer = customerService.updateCustomer(customerId, input);\r\n\t\tif (customer.isPresent()) {\r\n\t\t\tCustomerDTO responseDTO = mapper.asCustomerDTO(customer.get());\r\n\t\t\treturn ResponseEntity.status(200).body(responseDTO);\r\n\t\t}\r\n\t\telse {\r\n\t\t\treturn ResponseEntity.notFound().build();\r\n\t\t}\r\n\t}\r\n\r\n\t@Override\r\n\tpublic ResponseEntity<Void> deleteCustomer(String customerId) {\r\n\t\t// TODO: customerService.deleteCustomer(customerId);\r\n\t\treturn ResponseEntity.status(204).build();\r\n\t}\r\n\r\n\t@Override\r\n\tpublic ResponseEntity<CustomerDTO> getCustomer(String customerId) {\r\n\t\tvar customer = customerService.getCustomer(customerId);\r\n\t\tif (customer.isPresent()) {\r\n\t\t\tCustomerDTO responseDTO = mapper.asCustomerDTO(customer.get());\r\n\t\t\treturn ResponseEntity.status(200).body(responseDTO);\r\n\t\t}\r\n\t\telse {\r\n\t\t\treturn ResponseEntity.notFound().build();\r\n\t\t}\r\n\t}\r\n\r\n\t@Override\r\n\tpublic ResponseEntity<CustomerDTO> updateCustomerAddress(String customerId, String identifier, AddressDTO reqBody) {\r\n\t\tvar input = mapper.asAddress(reqBody);\r\n\t\tvar customer = customerService.updateCustomerAddress(customerId, identifier, input);\r\n\t\tif (customer.isPresent()) {\r\n\t\t\tCustomerDTO responseDTO = mapper.asCustomerDTO(customer.get());\r\n\t\t\treturn ResponseEntity.status(200).body(responseDTO);\r\n\t\t}\r\n\t\telse {\r\n\t\t\treturn ResponseEntity.notFound().build();\r\n\t\t}\r\n\t}\r\n\r\n\tprotected Pageable pageOf(Optional<Integer> page, Optional<Integer> limit, Optional<List<String>> sort) {\r\n\t\treturn PageRequest.of(page.orElse(0), limit.orElse(10));\r\n\t}\r\n\r\n}\n')),"\n",n.createElement(t.p,null,"And this for the Unit Test:"),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-java"},"public class CustomerApiControllerTest {\r\n\r\n\tprivate final Logger log = LoggerFactory.getLogger(getClass());\r\n\r\n\tServicesInMemoryConfig context = new ServicesInMemoryConfig();\r\n\r\n\tCustomerApiController controller = new CustomerApiController().setCustomerService(context.customerService());\r\n\r\n\t@Test\r\n\tpublic void createCustomerTest() {\r\n\t\tCustomerDTO reqBody = null;\r\n\t\tvar response = controller.createCustomer(reqBody);\r\n\t\tAssertions.assertEquals(201, response.getStatusCode().value());\r\n\t}\r\n\r\n\t@Test\r\n\tpublic void listCustomersTest() {\r\n\t\tOptional<Integer> page = null;\r\n\t\tOptional<Integer> limit = null;\r\n\t\tOptional<List<String>> sort = null;\r\n\t\tvar response = controller.listCustomers(page, limit, sort);\r\n\t\tAssertions.assertEquals(200, response.getStatusCode().value());\r\n\t}\r\n\r\n\t@Test\r\n\tpublic void updateCustomerTest() {\r\n\t\tString customerId = null;\r\n\t\tCustomerDTO reqBody = null;\r\n\t\tvar response = controller.updateCustomer(customerId, reqBody);\r\n\t\tAssertions.assertEquals(200, response.getStatusCode().value());\r\n\t}\r\n\r\n\t@Test\r\n\tpublic void deleteCustomerTest() {\r\n\t\tString customerId = null;\r\n\t\tvar response = controller.deleteCustomer(customerId);\r\n\t\tAssertions.assertEquals(204, response.getStatusCode().value());\r\n\t}\r\n\r\n\t@Test\r\n\tpublic void getCustomerTest() {\r\n\t\tString customerId = null;\r\n\t\tvar response = controller.getCustomer(customerId);\r\n\t\tAssertions.assertEquals(200, response.getStatusCode().value());\r\n\t}\r\n\r\n\t@Test\r\n\tpublic void updateCustomerAddressTest() {\r\n\t\tString customerId = null;\r\n\t\tString identifier = null;\r\n\t\tAddressDTO reqBody = null;\r\n\t\tvar response = controller.updateCustomerAddress(customerId, identifier, reqBody);\r\n\t\tAssertions.assertEquals(200, response.getStatusCode().value());\r\n\t}\r\n\r\n}\n")))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?n.createElement(t,e,n.createElement(s,e)):s(e)};function c(e){let{children:t}=e;return t}function u(e){return n.createElement(c,e,n.createElement(l,e))}},16376:function(e,t,r){r.d(t,{d2:function(){return n.d},zx:function(){return c},L0:function(){return d},$s:function(){return v},VS:function(){return b},gT:function(){return y},P7:function(){return f},Gz:function(){return g},S:function(){return L},VM:function(){return O},sd:function(){return T},kW:function(){return P},$D:function(){return I},DH:function(){return S},vC:function(){return E},LR:function(){return C},Ee:function(){return z},Bk:function(){return N},Nm:function(){return _},X_:function(){return p.X},YZ:function(){return B},vk:function(){return Z},BW:function(){return q},Mo:function(){return M}});var n=r(63585),o=r(27378),a=r(87573),i=r(30294);const s=e=>{let{background:t,backgroundHover:r,on:n}=e;return()=>(0,i.ivY)(["background-color:",";color:",";&:hover:not(:disabled){background-color:",";color:",";}&:active:not(:disabled){background-color:",";color:",";}"],t,n,r,n,r,n)},l=i.ZPm.buttonBox.withConfig({displayName:"Button__InnerButton",componentId:"sc-1qxez5q-0"})(["appearance:none;border-radius:base;transition:base;font-weight:500;border:0;display:inline-flex;align-items:center;cursor:pointer;font-size:16;padding:2 3;text-decoration:none !important;&:disabled{opacity:0.5;cursor:default;}&[data-variant='primary']{","}&[data-variant='success']{","}&[data-variant='danger']{","}&[data-variant='neutral']{","}"],s({background:"primary-600",backgroundHover:"primary-700",on:"white"}),s({background:"green-600",backgroundHover:"green-700",on:"white"}),s({background:"red-600",backgroundHover:"red-700",on:"white"}),s({background:"gray-300",backgroundHover:"gray-400",on:"black"})),c=o.forwardRef(((e,t)=>{let{variant:r="primary",children:n,...i}=e;return o.createElement(a.z,{ref:t,"data-variant":r},(e=>o.createElement(l,Object.assign({},e,i),n)))}));r(23824),r(31729);var u=r(63681),p=r(84234);const m=i.ZPm.box.withConfig({displayName:"Feature__InnerFeature",componentId:"sc-17n9iec-0"})(["border-left:1;border-left-style:dashed;border-left-color:layout-border;padding-left:4 !important;padding-right:5 !important;"]),d=o.forwardRef(((e,t)=>o.createElement(m,Object.assign({ref:t,col:{xs:1,md:1/3},px:2,pt:4,pb:{xs:2,md:5}},e)))),g=i.ZPm.h2.withConfig({displayName:"Feature__FeatureTitle",componentId:"sc-17n9iec-1"})(["margin:3 0;font-size:16;font-weight:500;border-left:1;border-color:primary-400;margin-left:",";padding-left:",";"],u.th.px(-9),u.th.px(9)),f=i.ZPm.p.withConfig({displayName:"Feature__FeatureText",componentId:"sc-17n9iec-2"})(["color:on-background-light;font-size:15;text-align:justify;margin:4 0;"]),h=i.ZPm.img.withConfig({displayName:"Feature__InnerFeatureImage",componentId:"sc-17n9iec-3"})(["margin-top:3;"]),v=o.forwardRef(((e,t)=>o.createElement(h,Object.assign({ref:t,width:48,height:48},e)))),b=o.forwardRef(((e,t)=>o.createElement(p.X,Object.assign({ref:t,row:!0,my:-4,px:3},e)))),y=o.forwardRef(((e,t)=>o.createElement(i.x.section,Object.assign({ref:t,py:4,borderTop:1,borderBottom:1,borderColor:"layout-border"},e)))),C=i.ZPm.h1Box.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-18tbum5-0"})(["font-size:38;font-weight:600;line-height:1.2;letter-spacing:-1.12px;margin:0 0 2;"," ",""],(0,u.up)("md",(0,i.ivY)(["padding-top:4;font-size:48;"])),(0,u.up)("xl",(0,i.ivY)(["font-size:60;"]))),E=i.ZPm.pBox.withConfig({displayName:"Hero__HeroTeaser",componentId:"sc-18tbum5-1"})(["font-size:18;margin:3 0;"," ",""],(0,u.up)("md",(0,i.ivY)(["font-size:20;"])),(0,u.up)("xl",(0,i.ivY)(["font-size:24;"]))),w=(0,i.ZPm)(p.X).withConfig({displayName:"Hero__InnerHero",componentId:"sc-18tbum5-2"})(["background-repeat:no-repeat;background-position:top -5% center;background-size:100% auto;padding-top:65%;text-align:center;"," ",""],(0,u.up)("md",(0,i.ivY)(["padding-top:0;margin-top:5;background-position:center right;background-size:58% auto;min-height:400;text-align:left;"])),(0,u.up)("xl",(0,i.ivY)(["margin-top:6;"]))),O=o.forwardRef(((e,t)=>{let{backgroundImageURL:r,...n}=e;return o.createElement(w,Object.assign({ref:t,backgroundImage:"url("+r+")"},n))})),I=o.forwardRef(((e,t)=>o.createElement(i.x.div,Object.assign({ref:t,w:{md:.5}},e)))),S=i.ZPm.sectionBox.withConfig({displayName:"Hero__HeroSection",componentId:"sc-18tbum5-3"})(["overflow:hidden;padding-top:2;padding-bottom:5;"]),P=o.forwardRef(((e,t)=>o.createElement(i.x.div,Object.assign({ref:t,row:!0,m:-2,justifyContent:{xs:"center",md:"initial"}},e)))),T=o.forwardRef(((e,t)=>o.createElement(i.x.div,Object.assign({ref:t,col:"auto",p:2},e))));var k=r(24956);const x=i.ZPm.div.withConfig({displayName:"Image__ImageContainer",componentId:"sc-1b0134e-0"})(["text-align:",";"],(e=>e.align)),A=i.ZPm.img.withConfig({displayName:"Image__InnerImage",componentId:"sc-1b0134e-1"})(["display:inline-block;"]),D=(e,t)=>"dark"===t?e.dark||e.src:e.light||e.src,z=o.forwardRef(((e,t)=>o.createElement(x,{align:e.align||"center",className:e.visible},o.createElement(A,Object.assign({ref:t,src:D(e,(0,k.If)()[0])},e)))));r(15239),r(83160);const R=(0,i.ZPm)(i.x.cite).withConfig({displayName:"Quote__Cite",componentId:"sc-12i53kz-0"})(["display:block;text-align:right;margin-top:1rem;"]),N=o.forwardRef(((e,t)=>o.createElement(i.x.blockquote,Object.assign({ref:t,className:"quote"},e)))),_=o.forwardRef(((e,t)=>o.createElement(R,Object.assign({ref:t},e)))),q=o.forwardRef(((e,t)=>o.createElement(i.x.section,Object.assign({ref:t,py:4,borderTop:1,borderBottom:1,borderColor:"layout-border"},e)))),B=i.ZPm.divBox.withConfig({displayName:"WideFeature",componentId:"sc-1ak5yjf-0"})(["display:block;",")"],(0,u.up)("md",(0,i.ivY)(["margin:0 20px;border-top:1px dashed;border-bottom:1px dotted;border-color:var(--xstyled-colors-layout-border,#d4d4d8);display:grid;grid-template-columns:1fr 1fr 1fr;"]))),M=i.ZPm.divBox.withConfig({displayName:"WideFeature__WideFeatureText",componentId:"sc-1ak5yjf-1"})(["padding:1rem;grid-column-start:span 2;font-size:18;"," ",""],(0,u.up)("md",(0,i.ivY)(["font-size:20;padding:3rem;padding-top:2rem;"])),(0,u.up)("xl",(0,i.ivY)(["font-size:24;"]))),j=i.ZPm.divBox.withConfig({displayName:"WideFeature__WideFeatureImageContainer",componentId:"sc-1ak5yjf-2"})(["padding:1rem;text-align:center;"]),H=i.ZPm.imgBox.withConfig({displayName:"WideFeature__InnerImage",componentId:"sc-1ak5yjf-3"})(["display:inline-block;"]),F=(e,t)=>"dark"===t?e.dark||e.src:e.light||e.src,Z=o.forwardRef(((e,t)=>o.createElement(j,{className:e.className},o.createElement(H,Object.assign({ref:t,src:F(e,(0,k.If)()[0])},e))))),L=e=>{let{gist:t,file:r}=e;const n=(0,o.useRef)(null);(0,o.useEffect)((()=>{(async()=>{const e=r?"https://gist.githubusercontent.com/"+t+"/raw/"+r:"https://gist.githubusercontent.com/"+t+"/raw";try{const t=await fetch(e);if(t.ok){const e=22*(await t.text()).split("\n").length+40;n.current&&(n.current.style.height=e+"px")}else console.error("Failed to fetch Gist content")}catch(o){console.error("Error fetching Gist content:",o)}})()}),[t,r]);const a=r?"https://gist.github.com/"+t+".pibb?file="+r:"https://gist.github.com/"+t+".pibb",i=r?"https://gist.github.com/"+t+"#file-"+r.replace(/\./g,"-").toLowerCase():"https://gist.github.com/"+t;return o.createElement("div",{style:{border:"1px solid #ccc",padding:"10px 0 0 0",borderRadius:"5px"}},r&&o.createElement("header",{style:{marginLeft:"10px",fontStyle:"oblique"}},o.createElement("span",{role:"img","aria-label":"source code"},"🗒️"),o.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},r)),o.createElement("iframe",{title:r,ref:n,src:a,width:"100%",frameBorder:"0",style:{margin:"0",padding:"0"}}))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-c-users-ivangsa-workspace-zenwave-zen-wave-360-github-io-website-pages-docs-sdk-exposing-rest-api-mdx-871be65a7d8c811c28bd.js.map