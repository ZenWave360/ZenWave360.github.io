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

- [JHipster Domain Language (JDL)](https://www.jhipster.tech/jdl/intro)
- [AsyncAPI](https://www.asyncapi.com/docs/getting-started/coming-from-openapi)
- [OpenAPI](https://swagger.io/specification/)

Using JHipster Domain Language as **Ubiquitous Language** for **Data on the Inside** and **API-First** specs like **AsyncAPI** and **OpenAPI** to describe Inter Process Communications (IPC) for **Data on the Outside**.

![ZenWave Modeling Languages](https://zenwave360.github.io/zenwave-code-generator/docs/00-ZenWave-ModelingLanguages.excalidraw.svg)

- **JHipster Domain Language (JDL) as Ubiquitous Language:** To describe your domain core domain model
- **API-First specs like AsyncAPI and OpenAPI:** to describe Inter Process Communications (IPC) between bounded contexts/microservices.
- **ZenWave Code Generator:** to generate (_a lot of_) infrastructure, functional and testing code from your models and APIs.

## Not (just) a Code Generator

ZenWave Code Generator is not a Code Generator but a **Modeling Tool** for Domain Driven Design and API-First in disguise of a _code generator_.

Its purpose is to produce successful software projects by dramatically shortening the feedback loop between the expert domain knowledge and working software and its tests.

![Domain Driven Design Feedback Loop](https://zenwave360.github.io/zenwave-code-generator/docs/ZenWave-360-DDD-Feedback-Loop-with-ZW-Products.excalidraw.svg)

In this way all team members: **Domain Experts**, **Product Owners**, **Software Archytechts**, **Developers** and **Testers** can provide early feedback based on an **Ubiquitous Language (JDL)** and the software and tests generated from that model.

## Why Domain Driven Design?

> "There are three types of developers implementing microservices. Those who use DDD, those who don't realise they do, and those who fail."

**DDD:** is about building software around a domain model that represents the problem we want to solve. Expressed by and Ubiquitous Language that is shared by all team members. It helps understand the problem before thinking of a solution. It connects Domain Experts with Technical Experts building a shared understanding of the problem and the solution.

**ZenWave360:** is about speeding up the feedback loop from idea -> model -> working software and tests.

![Design to Code](https://zenwave360.github.io/zenwave-code-generator/docs/ZenWave360-Design-Code-Loop.excalidraw.svg)

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
