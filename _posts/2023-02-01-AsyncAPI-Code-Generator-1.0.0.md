---
layout: post
title:  "ZenWave 360: AsyncAPI Code Generator 1.0.0 Released"
date:   2021-02-1 07:00:00 +0200
categories: api-first asyncapi eda
---

ZenWave 360: API-First with AsyncAPI and ZenWave 360º is now version 1.0.0 GA.

![ZenWave360 - Software Easy to Understand](/resources/ZenWave360-API-First_with_AsyncAPI.png)

With ZenWave's `spring-cloud-streams3` and `jsonschema2pojo` generator plugins you can generate:
- Strongly typed **business interfaces**
- **Payload DTOs** and 
- **Header objects** from AsyncAPI definitions.

It uses Spring Cloud Streams so it can connect to many different brokers via provided binders.

And because everything is hidden behind interfaces we can encapsulate many Enterprise Integration Patterns:

- Transactional Outbox: with MongoDB ChangeStreams, Plain SQL and Debezium SQL flavors
- Business DeadLetter Queues: allowing you to route different business Exceptions to different DeadLetter queues for non-retrayable errors.
- Enterprise Envelope: when your organization uses a common Envelope for messages, you can still express your AsyncAPI definition in terms of your business payload.

![AsyncAPI and Spring Cloud Streams 3](https://zenwave360.github.io/zenwave-code-generator/docs/ZenWave360-AsyncAPI-SpringCloudStreams.excalidraw.svg)

And these are just examples of currently implemented Enterprise Integration Patterns, you can always [fork any ZenWave generator plugin](https://github.com/zenwave360/zenwave-code-generator#forking-an-standard-or-custom-plugin) and create your own implementation.

Please refere to [API First with AsyncAPI](/Event-Driven-Architectures/API-First-with-AsyncAPI) and [AsyncAPI Code Generator](/Event-Driven-Architectures/AsyncAPI-Code-Generator) for more details.