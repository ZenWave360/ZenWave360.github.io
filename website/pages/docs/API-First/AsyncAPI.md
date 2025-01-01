---
section: ZenWave & API-First
title: AsyncAPI
slug: /API-First/AsyncAPI/
parent: API-First
order: 2
---

## API-First with AsyncAPI

> This is a summary of two long posts about [API-First with AsyncAPI](/posts/API-First-with-AsyncAPI-And-ZenWave-SDK/) and [ZenWave AsyncAPI Code Generator](/posts/ZenWave-AsyncAPI-Code-Generator/).

![AsyncAPI and Spring Cloud Streams 3](/posts/ZenWave-AsyncAPI-Code-Generator/ZenWave360-AsyncAPI-SpringCloudStreams.excalidraw.svg)

## API-First with AsyncAPI and ZenWave SDK

With ZenWave's `spring-cloud-streams3` and `jsonschema2pojo` plugins you can generate:
- Strongly typed **business interfaces**
- **Payload DTOs** and
- **Header objects** from AsyncAPI definitions.

It uses Spring Cloud Streams as default implementation, so it can connect to many different brokers via provided binders.

And because everything is hidden behind interfaces we can encapsulate many Enterprise Integration Patterns:

- Transactional Outbox: with MongoDB ChangeStreams, Plain SQL and Debezium SQL flavors
- Business DeadLetter Queues: allowing you to route different business Exceptions to different DeadLetter queues for non-retrayable errors.
- Enterprise Envelope: when your organization uses a common Envelope for messages, you can still express your AsyncAPI definition in terms of your business payload.

## Broker-based APIs are Symmetric

Because APIs mediated by a broker are inherently **symmetric** it's difficult to establish the roles of client/server: what represents a `publish` operation from one side will be a `subscribe` operation seen from the other side. Also, a given service can act as a publisher and subscriber on the same API.

For these reasons, to avoid defining the same API operations multiple times from each perspective, we propose to define the API only once from the perspective of the provider of the functionality, which may be a producer, a consumer or both.

Some definitions:

- SERVICE: An independent piece of software, typically a microservice, that provides a set of capabilities to other services.
- PROVIDER: The service that implements the functionality of the API. It may be accepting asynchronous command request or publishing business domain events.
- CLIENT/s: The service/s that makes use of the functionality of the API. It may be requesting asynchronous commands or subscribing to business domain events.
- PRODUCER: A service that writes a given message.
- CONSUMER: A service that reads a given message.

> Define your AsyncAPI from the perspective of the **PROVIDER** of the functionality, which may be a producer, a consumer or both. Share this definition with your **CLIENTS**.

Use the table to understand which section of AsyncAPI (publish or subscribe) to use for each topic, and which role (provider or client) to use on the plugin configuration.

|                              | Events                | Commands                |
|------------------------------|-----------------------|-------------------------|
| Provider                     | Produces (publish)    | Consumes (subscribe)    |
| Client                       | Consumes (subscribe)  | Produces (publish)      |
| OperationId Suggested Prefix | **on**&lt;Event Name> | **do**&lt;Command Name> |

If you still find confusing which one is a provider and a client just use this rule: it can be only one provider of a given message while clients of a given message there can be many:

- If the provider is the producer use publish section
- If is the consumer use subscribe section.

## Events, Commands, and Messages

In a messaging system, there are two types of messages: events and commands. An event message describes a change that has already happened, while a command message describes an operation that needs to be carried out. In other words, events are used to notify subscribers about something that has already occurred, while commands are used to initiate an action or process.

- **Event:** A message describing a change that has already happened.
- **Command:** A message describing an operation that has to be carried out.

Also, while there can be only one provider that produces a given event, but commands can be issued for one or many client producers.

## Understanding AsyncAPI Specification

> See [AsyncAPI Reference](https://www.asyncapi.com/docs/reference) and [Understanding AsyncAPI Specification](/posts/API-First-with-AsyncAPI-And-ZenWave-SDK/#understanding-asyncapi-definition) blog post for more details about AsyncAPI documents.

### Different Styles of Event Messages

> See [Different Styles of Event Messages](/posts/API-First-with-AsyncAPI-And-ZenWave-SDK/#different-styles-of-event-messages) to learn about `Notification Messages`, `State Transfer Messages` and `Domain Event Messages`.

## API-First Code Generator from AsyncAPI

You can use [API-First AsyncAPI Maven Plugin](https://zenwave360.github.io/zenwave-sdk/plugins/asyncapi-spring-cloud-streams3/#maven-plugin-configuration-api-first) to generate models (DTOs) and a producer implementation.

> See [Producing Domain Events](/docs/zenwave-sdk/producing-domain-events) and [Consuming Async Commands](/docs/zenwave-sdk/consuming-async-commands) for more details on how to configure the plugin, and how to use generated code.

## Some Patterns supported by ZenWave AsyncAPI Code Generator

### [Exception Handling with Business Dead Letter Queue](/posts/ZenWave-AsyncAPI-Code-Generator/#exception-handling-with-business-dead-letter-queue)

### [Populating Headers at Runtime Automatically](/posts/ZenWave-AsyncAPI-Code-Generator/#populating-headers-at-runtime-automatically)

### [Transactional Outbox with MongoDB ChangeStreams](https://zenwave360.github.io/zenwave-sdk/plugins/asyncapi-spring-cloud-streams3/#provider-imperative-style-with-mongodb-transactional-outbox)


## AsyncAPI Conference On Tour Madrid 2023

&nbsp;

<iframe width="1050" height="591" src="https://www.youtube.com/embed/gUsoD8RaCuw?si=KLGLktrNQqjxodg2" title="Code Generation For Enterprise Integration Patterns w/ AsyncAPI & ZenWave SDK - Ivan Garcia Sain-Aja" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
