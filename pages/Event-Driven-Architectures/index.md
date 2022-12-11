---
layout: page
title: Event Driven Architectures
permalink: /Event-Driven-Architectures/
nav_order: 5
has_children: true
---

# Event-Driven Architectures

Asynchronous message-based communication is certainly not new and have existed as part of Service Oriented Architectures (SOAs) but the need to scale up not only increasingly big sets of data but also the organizational challenge of multiple teams working together has lead to a new architectural style: Event-Driven Architectures or EADs for short.

In Event-Driven Architectures small, in size and in pourpose, services comunicate with each other asynchronously by produccing and consuming events and messages.

These (micro-)services can be stateful or stateless, complex or simple, they might be implemented as long running, standalone applications or executed as functions... TODO size as fittin in one own's head


TODO include the concept of bounded context

ZenWave Code generator helps you creating software easy to understand by leveraging API-First industry standard AsyncAPI specification:
- Generating strongly typed interfaces with the names and models of your domain
- Hidding implementation details
- And abstracting away many [Enterprise Integration Patterns](./Enterprise-Integration-Patterns/) behind those strongly typed interfaces

![AsyncAPI and Spring Cloud Streams 3](https://zenwave360.github.io/zenwave-code-generator/docs/ZenWave360-AsyncAPI-SpringCloudStreams.excalidraw.svg)