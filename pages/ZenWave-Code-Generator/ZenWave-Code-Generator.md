---
layout: page
title: ZenWave Code Generator
permalink: /ZenWave-Code-Generator/
nav_order: 2
has_children: true
---

# ZenWave Code Generator

> 👉 ZenWave360 Helps You Create Software that's Easy to Understand


ZenWave Code Generator is a configurable and extensible code generator tool for **Domain Driven Design (DDD)** and **API-First** for **Event Driven Microservices** that can generate code from a mix of different models including:

- [JHipster Domain Language JDL](Domain-Driven-Design/JDL-Domain-Language) to describe your domain model: entities, aggregated and relations.
- [ZenWave Domain Language ZDL](Domain-Driven-Design/ZDL-Domain-Language) for Event-Driven Microservices beyond CRUD applications.
- [AsyncAPI](API-First/OpenAPI)
- [OpenAPI](API-First/AsyncAPI)

Using JHipster Domain Language/ZenWave Domain Language as **Ubiquitous Language** for **Data on the Inside** and **API-First** specs like **AsyncAPI** and **OpenAPI** to describe Inter Process Communications (IPC) for **Data on the Outside**.

- **JHipster Domain Language/ZenWave Domain Language as Ubiquitous Language:** To describe your domain core domain model and its relations, operations and events.
- **API-First specs like AsyncAPI and OpenAPI:** To describe Inter Process Communications (IPC) between bounded contexts/microservices.

## Generate complete Event Driven Microservices using DDD and API-First

You can generate complete Event Driven Microservices using DDD and API-First

> 👉 Describe your Model → Generate Backend ⤳ Generate OpenAPI ⤳ Generate AsyncAPI → Generate API Implementations → Generate Tests and Contracts 👍

1. Start by describing your core domain model using JDL entities and relationships, annotations and comments.
2. Generate a complete Backend Application from your Domain Definition Model.
3. Generate a draft OpenAPI definition from the JDL model. Edit collaboratively this OpenAPI document and then generate some more functional code and tests from that definition.
4. Generate a draft AsyncAPI definition for consuming async request commands and publishing domain events. Now use zenwave maven plugin to generate strongly typed business interfaces implementing some Enterprise Integration Patterns like: transactional outbox, business dead letter queue...
5. Generate E2E, Integration tests and Consumer Contracts for the public APIs you just produced.


![ZenWave Features MindMap](https://zenwave360.github.io/zenwave-code-generator/docs/ZenWave-MindMap.svg)


## What can we generate for you today?

Whether you are:

- Designing a system from scratch,
- Refactoring a legacy monolith
- Adding functionality on top of an existent microservices architecture

...ZenWave Code Generator can... **generate a lot of code for you!!**

![06-ServiceImplementation-Hexagonal](https://zenwave360.github.io/zenwave-code-generator/docs/06-ServiceImplementation-Hexagonal.excalidraw.svg)

## Extensible and Configurable

ZenWave Code Generator is designed to be easily extensible and adaptable to your project or your organization needs and likes.

Navigate to ZenWave Code Generator to [read more...](https://zenwave360.github.io/zenwave-code-generator/)
