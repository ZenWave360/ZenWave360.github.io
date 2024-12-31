---
title: JDL To OpenAPI
slug: /posts/JHipster-As-IDL-for-OpenAPIv3/
image: JDL-2-OpenAPI.svg
author: Ivan Garcia Sainz-Aja
date: 2023-04-29T06:00:00+01:00
excerpt: 'Because writing YAML by hand is now fun... You can generate OpenAPI v3 from  JHipster JDL models with ZenWave SDK.'
tags:
  - ZenWave SDK
  - Code Generator
  - JHipster
  - DSL
canonical: https://medium.com/@ivangsa/jhipster-jdl-to-openapi-generator-420393cbd40a
---

# Generating OpenAPI definition files from JDL with ZenWaveSDK

![JDL-2-OpenAPI](./JDL-2-OpenAPI.svg)

Writing YAML by hand is no fun, but you can simplify the process of writing OpenAPI definition files by using a Domain Specific Language (DSL).

Thanks to ZenWave SDK, you can convert JDL models into OpenAPI definition files. This can save time and effort in the development process while ensuring that your APIs follow best practices and standards.

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

It will add `x-business-entity` and `x-business-entity-paginated` to generated schemas, very useful if you are also using ZenWave to generate a complete backend from JDL


## Generating OpenAPI definition files from JDL with ZenWaveSDK

> See [JDL To OpenAPI Generator](https://zenwave360.github.io/zenwave-sdk/plugins/jdl-to-openapi/) for a complete list of options and [GitHub repository](https://github.com/zenwave360/zenwave-sdk) for install instructions.

ZenWave SDK will generate CRUD operations for your entities, including paginated lists and search operations.

```shell
jbang zw -p io.zenwave360.sdk.plugins.ZDLToOpenAPIPlugin \
    zdlFile=entities-model.jdl \
    idType=integer \
    idTypeFormat=int64 \
    targetFolder=. \
    targetFile=openapi.yml
```

By using JDL to define your domain model and ZenWave SDK to convert it into an OpenAPI definition file, you can simplify the process of designing and documenting your APIs. This can improve the overall quality and consistency of your APIs, while also reducing errors and inconsistencies.

