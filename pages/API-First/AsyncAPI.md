---
layout: page
title: AsyncAPI
permalink: /API-First/AsyncAPI
parent: API-First
nav_order: 2
---

## API-First with AsyncAPI

If you are already doing API-First with OpenAPI, with ZenWave360 you can generate:

- Strongly typed business interfaces, DTOs and Header objects from your AsyncAPI definition.
- [AsyncAPI JsonSchema2Pojo](https://zenwave360.github.io/zenwave-code-generator/plugins/asyncapi-jsonschema2pojo/) generator plugin uses [JsonSchema2Pojo](https://www.jsonschema2pojo.org/) library supporting all upstream options
- [Spring Cloud Streams implementation](https://zenwave360.github.io/zenwave-code-generator/plugins/asyncapi-spring-cloud-streams3/) for those business interfaces, for producing and consuming messages to any broker supported by Spring Cloud Streams.
- Generates different [Enterprise Integration Patterns](Event-Driven-Architectures/Enterprise-Integration-Patterns/) behind those business interfaces:
  - Transactional Outbox: with MongoDB ChangeStreams, Plain SQL and Debezium SQL
  - Route different Business non retrayable Exceptions to DeadLetter Queues
  - Enterprise Envelope
- Generates In-Memory Test-Doubles for your message producers.
- Reverse Engeneering JDL Models from AsyncAPI schemas
- Generate [AsyncAPI definitions from JDL Models](https://zenwave360.github.io/zenwave-code-generator/plugins/jdl-to-asyncapi/), for both json-schema or avro.
