---
layout: page
title: Business Dead-Letter Queue
permalink: /Event-Driven-Architectures/Enterprise-Integration-Patterns/Business-Dead-Letter-Queue
parent: Enterprise Integration Patterns
grand_parent: Event Driven Architectures
nav_order: 2
---

# Business Dead-Letter-Queue Routing

This document is still a DRAFT, see the **AsyncAPI ApiFirst Generator KitchenSink** project for a working example: https://github.com/ZenWave360/AsyncAPI-ApiFirst-Generator-KitchenSink/#with-deadletterqueue-routing

```yaml
spring:
  cloud:
    stream:
      bindings:
        on-customer-event-in-0:
          dead-letter-queue-error-map: >
            {
              'javax.validation.ValidationException': 'on-customer-event-validation-error-out-0',
              'java.lang.Exception': 'on-customer-event-error-out-0'
            }
```
