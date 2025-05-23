---
title: JDL To AsyncAPI v2
slug: /posts/JHipster-As-IDL-for-AsyncAPIv2/
image: JDL-2-AsyncAPI.svg
author: Ivan Garcia Sainz-Aja
date: 2023-04-29T06:00:00+01:00
excerpt: 'Because writing YAML by hand is now fun... You can generate AsyncAPI v2/v3 from  JHipster JDL models with ZenWave SDK.'
tags:
  - ZenWave SDK
  - Code Generator
  - JHipster
  - DSL
---

# Generating AsyncAPI definition files from JDL with ZenWaveSDK

![JDL-2-AsyncAPI](./JDL-2-AsyncAPI.svg)


Writing YAML by hand is no fun, but you can simplify the process of writing AsyncAPI definition files by using a Domain Specific Language (DSL).

Thanks to ZenWave SDK, you can convert JDL models into AsyncAPI definition files. This can save time and effort in the development process while ensuring that your APIs follow best practices and standards.

## JDL Example

```zdl
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

> See [JDL To AsyncAPI Generator](https://www.zenwave360.io/zenwave-sdk/plugins/jdl-to-asyncapi/) for a complete list of options and [GitHub repository](https://github.com/zenwave360/zenwave-sdk) for install instructions.

Because JDL can only describe static aspects of your models and doesn't cover dynamic behaviour, ZenWave SDK can only infer CRUD operations from your entities, generating:

- One channel for each entity for both publishing Domain Events and subscribing to Commands/Requests.
- Messages and payloads for each entity Create/Update/Delete events (AVRO and AsyncAPI schema)

```shell
jbang zw -p io.zenwave360.sdk.plugins.JDLToAsyncAPIPlugin \
    includeCommands=false \
    zdlFile=src/main/resources/model/entities-model.jdl \
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
- Supported [Payload Styles](https://www.zenwave360.io/Event-Driven-Architectures/API-First-with-AsyncAPI#different-styles-of-message-payloads): "Entity State Transfer" and "Domain Event" (for Create/Update/Delete events):
  - State Transfer message contains the entire state of the aggregate so consumer does not need to make additional calls.
  - Domain Event Messages contains information about the event and interesting portions of the underlying aggregate, but not the entire state of the aggregate.

By using JDL to define your domain model and ZenWave SDK to convert it into an AsyncAPI definition file, you can simplify the process of designing and documenting your APIs. This can improve the overall quality and consistency of your APIs, while also reducing errors and inconsistencies.
