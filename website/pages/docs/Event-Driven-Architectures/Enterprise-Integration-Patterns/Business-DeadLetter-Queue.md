---
section: Enterprise Integration Patterns
title: Business Dead-Letter Queue
slug: /Event-Driven-Architectures/Enterprise-Integration-Patterns/Business-Dead-Letter-Queue
order: 2
---

# Business Dead-Letter-Queue Routing

Dead Letter Queue:
> What will the messaging system do with a message it cannot deliver?

Business Dead-Letter-Queue:
> What will the messaging system do with a delivered message it can not process due to business rules, invariants or validation errors?

## Configuring ZenWave Consumers for Business Dead-Letter-Queue Routing

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
