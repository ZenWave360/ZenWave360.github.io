---
layout: post
title:  "ZenWave 360: AsyncAPI SDK 1.0.0 Released"
date:   2021-02-1 07:00:00 +0200
categories: api-first asyncapi eda
published: false
---

ZenWave 360: API-First with AsyncAPI and ZenWave 360º is now version 1.0.0 GA.

![ZenWave360 - API-First with AsyncAPI](/resources/ZenWave360-API-First_with_AsyncAPI.png)

With ZenWave's `spring-cloud-streams3` and `jsonschema2pojo` sdk plugins you can generate:
- Strongly typed **business interfaces**
- **Payload DTOs** and 
- **Header objects** from AsyncAPI definitions.

It uses Spring Cloud Streams, so it can connect to many different brokers via provided binders.

And because everything is hidden behind interfaces we can encapsulate many Enterprise Integration Patterns:

- Transactional Outbox: with MongoDB ChangeStreams, Plain SQL and Debezium SQL flavors
- Business DeadLetter Queues: allowing you to route different business Exceptions to different DeadLetter queues for non-retrayable errors.
- Enterprise Envelope: when your organization uses a common Envelope for messages, you can still express your AsyncAPI definition in terms of your business payload.
- Automatic Headers at Runtime

![AsyncAPI and Spring Cloud Streams 3](https://zenwave360.github.io/zenwave-sdk/docs/ZenWave360-AsyncAPI-SpringCloudStreams.excalidraw.svg)

And these are just examples of currently implemented Enterprise Integration Patterns, you can always [fork any ZenWave sdk plugin](https://github.com/zenwave360/zenwave-sdk#forking-an-standard-or-custom-plugin) and create your own implementation.

Please refer to [API First with AsyncAPI](/Event-Driven-Architectures/API-First-with-AsyncAPI) and [AsyncAPI SDK](/Event-Driven-Architectures/AsyncAPI-Code-Generator) for more details.