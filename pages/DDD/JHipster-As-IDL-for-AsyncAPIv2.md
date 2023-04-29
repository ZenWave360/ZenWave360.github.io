---
layout: page
title: AsyncAPI Code Generator
permalink: /Domain-Driven-Design/JDL-Domain-Language/JHipster-As-IDL-for-AsyncAPIv2
parent: JDL for Entities, Aggregates and Relations
nav_order: 1
---

Writing YAML by hand is no fun, but you can simplify the process of writing AsyncAPI definition files by using a Domain Specific Language (DSL).

[JHipster Domain Language (JDL)](https://www.jhipster.tech/jdl/intro) is a Domain Specific Language (DSL) used to define the domain model of a web application. With JDL, you can describe the entities, relationships, and constraints of your system in a concise and readable way.

Zenwave SDK is set of tools to generate (and reverse engineering) code from JDL and API-First models.

Thanks to ZenWave SDK, you can convert JDL models into AsyncAPI definition files. This can save time and effort in the development process while ensuring that your APIs follow best practices and standards.

## JDL Example

```jdl
@aggregate
entity Customer {
    username String required minlength(3) maxlength(250)
    password String required minlength(3) maxlength(250)
    email String required minlength(3) maxlength(250)
    firstName String required minlength(3) maxlength(250)
    lastName String required minlength(3) maxlength(250)
}
entity Address {
    street String
    city String
    country String
    zipCode String
}

relationship OneToOne {
    Customer{address} to Address{customer}
}
```


## Generating AsyncAPI definition files from JDL with ZenWaveSDK

> See [JDL To AsyncAPI Generator](https://zenwave360.github.io/zenwave-sdk/plugins/jdl-to-asyncapi/) for a complete list of options and [GitHub repository](https://github.com/zenwave360/zenwave-sdk) for install instructions.

Because JDL can only describe static aspects of your models and doesn't cover dynamic behaviour, ZenWave SDK can only infer CRUD operations from your entities, generating:

- One channel for each entity for both publishing Domain Events and subscribing to Commands/Requests.
- Messages and payloads for each entity Create/Update/Delete events (AVRO and AsyncAPI schema)

```shell
jbang zw -p io.zenwave360.sdk.plugins.JDLToAsyncAPIPlugin \
    includeCommands=false \
    specFile=src/main/resources/model/entities-model.jdl \
    idType=integer \
    idTypeFormat=int64 \
    annotations=aggregate \
    payloadStyle=event \
    targetFile=src/main/resources/model/asyncapi.yml
```

You can choose to generate only Events or Commands using `includeEvents`  (default: true) and `includeCommands` (default: false) to filter which channels you want to include in your AsyncAPI definition file.

You can also filter which entities you want to include Messages for in your AsyncAPI definition file using: `entities`, `skipEntities`, `annotations` and `skipForAnnotations`.

## Supported Schema Formats and Message Styles

You can generate AsyncAPI definition files with the following options:

- Supported Schema Formats: AVRO and AsyncAPI schema
- Supported [Payload Styles](https://zenwave360.github.io/Event-Driven-Architectures/API-First-with-AsyncAPI#different-styles-of-message-payloads): "Entity State Transfer" and "Domain Event" (for Create/Update/Delete events):
  - State Transfer message contains the entire state of the aggregate so consumer does not need to make additional calls.
  - Domain Event Messages contains information about the event and interesting portions of the underlying aggregate, but not the entire state of the aggregate.


## Summary

By using JDL to define your domain model and ZenWave SDK to convert it into an AsyncAPI definition file, you can simplify the process of designing and documenting your APIs. This can improve the overall quality and consistency of your APIs, while also reducing errors and inconsistencies.

Overall, using JDL and ZenWave SDK provides a streamlined and efficient way to implement Domain Driven Design principles in Event-Driven applications, while also improving the efficiency and quality of the development process.

NOTE: You can also use ZenWave SDK to generate complete OpenAPI definitions from JDL models.
