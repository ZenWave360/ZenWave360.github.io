---
layout: page
title: Event Driven Architectures
permalink: /Event-Driven-Architectures/
nav_order: 5
has_children: true
---

# Event-Driven Architectures (Draft)

Asynchronous message-based communication is certainly not new and have existed as part of Service Oriented Architectures (SOAs) but the need to scale up not only increasingly big sets of data but also the organizational challenge of multiple teams working together has lead to a new architectural style: Event-Driven Architectures or EDAs for short.

In Event-Driven Architectures, small services, in size and in purpose, communicate with each other asynchronously by producing and consuming events and messages.

These (micro-)services can be stateful or stateless, complex or simple, they might be implemented as long-running, standalone applications or executed as functions...

One key advantage of Event-Driven Architectures is that it promotes loose coupling between different services. The consumer does not need to know any detail about services it depends on it simply consumes events from even channels, all they need is a common understanding of event schema and format.

This also makes testing EDA microservices way easier.

ZenWave Code generator helps you to create software easy to understand by leveraging API-First industry standard AsyncAPI specification:
- Generating strongly typed interfaces with the names and models of your domain
- Hiding implementation details
- And abstracting away many [Enterprise Integration Patterns](./Enterprise-Integration-Patterns/) behind those strongly typed interfaces

![AsyncAPI and Spring Cloud Streams 3](https://zenwave360.github.io/zenwave-sdk/docs/ZenWave360-AsyncAPI-SpringCloudStreams.excalidraw.svg)
