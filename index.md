---
layout: home
title: What is ZenWave360
nav_order: 1
---

<div class="buddha-blockquote">
    <img src="resources/laptop-buddha.png" alt="ZenWave Programmer">
    <blockquote> <p>👉 ZenWave360 Helps You Create Software<br/> Easy to Understand</p> </blockquote>
</div>
<hr/>

<h1 class="home-h1">
Domain Driven Design (DDD) and API-First for Event Driven Microservices
</h1>


<p align="center">
  <img src="resources/code-generator-logo.excalidraw.svg" alt="ZW> Code Generator" />
</p>

We believe in the <span class="tag-cloud">simplicity</span> and <span class="tag-cloud">elegance</span> of <span class="tag-cloud">software well designed</span>:

<ul class="check"> 
    <li>Simple,</li>
    <li>Meaningful and</li>
    <li>Easy to understand</li>
</ul>

<span class="tag-cloud">ZenWave Code Generator</span> is part of suite of tools to help you create software easy to understand.

## Not (just) a Code Generator

ZenWave Code Generator is not a Code Generator but a <span class="tag-cloud">Modeling Tool</span> for Domain Driven Design and API-First in disguise of a _code generator_.

Its purpose is to produce successful software projects by <span class="tag-cloud">dramatically shortening the feedback loop</span> between the expert domain knowledge and working software and its tests.

![Domain Driven Design Feedback Loop](https://zenwave360.github.io/zenwave-code-generator/docs/ZenWave-360-DDD-Feedback-Loop-with-ZW-Products.excalidraw.svg)

In this way all team members: **Domain Experts**, **Product Owners**, **Software Architects**, **Developers** and **Testers** can provide early feedback based on an **Ubiquitous Language (JDL/ZDL)** and the software and tests generated from that model.
  
<div class="check"  markdown="1">

## How

### Leveraging <span class="tag-cloud">DDD</span>

- Adopting [JHipster Domain Language (JDL)](https://www.jhipster.tech/jdl/intro) to let you define your domain model: entities, relationships, aggregates, input models, search criteria...
- Providing ZenWave Domain Language (<span class="tag-cloud">ZDL</span>) ([coming soon](Domain-Driven-Design/ZDL-Domain-Language)) to let you connect your business model to Event-Driven Architecture, much more than an AsyncAPI IDL...

### Leveraging <span class="tag-cloud">API-First</span>

- Generating (draft) API Definition Documents (OpenAPI and AsyncAPI) from your DDD models, saving a lot of time
- Generating Functional Code from API Definitions (OpenAPI and AsyncAPI)
- (AsyncAPI) Implementing API-First Producers, Consumers and Enterprise Integration Patterns from AsyncAPI Definitions for your Event-Driven Microservices

### <span class="tag-cloud">Tests First</span>

- Generating Tests from API First Definitions
- Generating Consumer Contracts: Mocks and InMemory Implementations and Contexts from API First Definitions

## What

- Extensible CLI with an ever-growing set of [standard generator-plugins](ZenWave-Code-Generator/CLI#list-of-available-plugins)
- [Maven Plugin](ZenWave-Code-Generator/Maven-Plugin) so you can execute any standard or custom generator-plugin as part of your build process
- IDE Model Editor (coming soon): text-based model editor that lets you visualize and work with your Models and APIs in different ways so your software _fits in your own head_


## Getting Started

This is a list of currently available functionality in WenWave 360 for DDD and API-First modeling:

## API-First with OpenAPI

If you are already doing API-First with OpenAPI, with ZenWave360 you can generate:

- [SpringMVC Controllers](/zenwave-code-generator/plugins/jdl-openapi-controllers/) implementing your API-First generated interfaces and Mapstruct Mappers for your DTOs-Domain model.
- [Spring WebTestClient Tests](https://zenwave360.github.io/zenwave-code-generator/plugins/openapi-spring-webtestclient/) for SpringMVC, Spring WebFlux or remote REST API Testing.
- [REST-Assured Tests](https://zenwave360.github.io/zenwave-code-generator/plugins/openapi-rest-assured/)
- KarateDSL Tests (with sister project [ZenWave KarateIDE](https://github.com/ZenWave360/karate-ide) VSCode extension)
- Stateful Mocks with KarateDSL and [ZenWave APIMock](https://github.com/ZenWave360/zenwave-apimock)
- OpenAPI IDL: Generating [OpenAPI CRUD definitions from JDL Models](https://zenwave360.github.io/zenwave-code-generator/plugins/jdl-to-openapi/)
- Reverse Engineering [JDL Models from OpenAPI schemas](https://zenwave360.github.io/zenwave-code-generator/plugins/jdl-to-openapi/#openapi-to-jdl)

## API-First with AsyncAPI

If you are already doing API-First with OpenAPI, with ZenWave360 you can generate:

- Strongly typed business interfaces, DTOs and Header objects from your AsyncAPI definition.
- [Spring Cloud Streams implementation](https://zenwave360.github.io/zenwave-code-generator/plugins/asyncapi-spring-cloud-streams3/) for those business interfaces, for producing and consuming messages to any broker supported by Spring Cloud Streams.
- [AsyncAPI JsonSchema2Pojo](https://zenwave360.github.io/zenwave-code-generator/plugins/asyncapi-jsonschema2pojo/) generator plugin uses [JsonSchema2Pojo](https://www.jsonschema2pojo.org/) library supporting all upstream options
- Generates different [Enterprise Integration Patterns](Event-Driven-Architectures/Enterprise-Integration-Patterns/) behind those business interfaces:
  - Transactional Outbox: with MongoDB ChangeStreams, JDBC and Debezium SQL
  - Route different Business non-retrayable Exceptions to DeadLetter Queues
  - Enterprise Envelope
  - Automatic Headers at Runtime 
- Generates In-Memory Test-Doubles for your message producers.
- AsyncAPI IDL: Generating [AsyncAPI definitions from JDL Models](https://zenwave360.github.io/zenwave-code-generator/plugins/jdl-to-asyncapi/), for both json-schema or avro.
- Reverse Engineering JDL Models from AsyncAPI schemas

## DDD with JHipster JDL and ZenWave Domain Language

Focus on define/design you application domain model first using JDL and ZDL domain languages and then generate your Software, Tests and APIs from that model.

- You can use [JHipster Domain Language](Domain-Driven-Design/JDL-Domain-Language) (JDL) to describe entity aggregates and their relations.

- And [ZenWave Domain Language](Domain-Driven-Design/ZDL-Domain-Language) to describe Event-Driven microservices beyond CRUD applications.

- ZenWave Code Generator can generate a [full backend application](https://zenwave360.github.io/zenwave-code-generator/) following a flexible hexagonal/clean architecture and best practices for: Spring-Boot, SpringMVC, Spring-Data (MongoDB and JPA), Spring Cloud Streams and ElasticSearch...

</div>

![ZenWave360 - Software Easy to Understand](/resources/ZenWave360-Software_Easy_To_Understand.png)

<p>&nbsp;</p>
<div class="buddha-blockquote">
    <img src="resources/laptop-buddha.png" alt="ZenWave Programmer">
    <blockquote> <p>👉 ZenWave360 Helps You Create Software<br/> Easy to Understand</p> </blockquote>
</div>
