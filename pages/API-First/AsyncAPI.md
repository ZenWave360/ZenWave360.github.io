---
layout: page
title: AsyncAPI
permalink: /API-First/AsyncAPI
parent: API-First
nav_order: 2
---

## API-First with AsyncAPI

![ZenWave360 - API-First with AsyncAPI](/resources/ZenWave360-API-First_with_AsyncAPI.png)

With ZenWave's `spring-cloud-streams3` and `jsonschema2pojo` sdk plugins you can generate:
- Strongly typed **business interfaces**
- **Payload DTOs** and
- **Header objects** from AsyncAPI definitions.

It uses Spring Cloud Streams, so it can connect to different brokers via provided binders.

And because everything is hidden behind interfaces we can encapsulate many Enterprise Integration Patterns.

If you are already doing API-First with OpenAPI, with ZenWave360 you can generate:

- [AsyncAPI JsonSchema2Pojo](https://zenwave360.github.io/zenwave-sdk/plugins/asyncapi-jsonschema2pojo/) sdk plugin uses [JsonSchema2Pojo](https://www.jsonschema2pojo.org/) library supporting all upstream options
- [Spring Cloud Streams implementation](https://zenwave360.github.io/zenwave-sdk/plugins/asyncapi-spring-cloud-streams3/) for those business interfaces, for producing and consuming messages to any broker supported by Spring Cloud Streams.
- Generates different [Enterprise Integration Patterns](Event-Driven-Architectures/Enterprise-Integration-Patterns/) behind those business interfaces:
  - Transactional Outbox: with MongoDB ChangeStreams, Plain SQL and Debezium SQL
  - Route different Business non-retrayable Exceptions to DeadLetter Queues
  - Enterprise Envelope
- Generates In-Memory Test-Doubles for your message producers.
- Reverse Engineering JDL Models from AsyncAPI schemas
- Generate [AsyncAPI definitions from JDL Models](https://zenwave360.github.io/zenwave-sdk/plugins/jdl-to-asyncapi/), for both json-schema or avro.
