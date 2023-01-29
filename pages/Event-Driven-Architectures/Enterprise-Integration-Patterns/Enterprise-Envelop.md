---
layout: page
title: Enterprise Envelop
permalink: /Event-Driven-Architectures/Enterprise-Integration-Patterns/Enterprise-Envelop
parent: Enterprise Integration Patterns
grand_parent: Event Driven Architectures
nav_order: 3
---

# Enterprise Envelope

https://www.enterpriseintegrationpatterns.com/patterns/messaging/EnvelopeWrapper.html

## Configuring ZenWave Producers and Consumers to use an Enterprise Envelope

This document is still a DRAFT, see the **AsyncAPI ApiFirst Generator KitchenSink** project for a working example:

https://github.com/ZenWave360/AsyncAPI-ApiFirst-Generator-KitchenSink/#with-enterprise-envelope

```yaml
channels:
  customer.events:
    publish:
      summary: Customer Domain Events
      operationId: onCustomerEvent
      x-envelope-java-type: io.zenwave360.example.events.support.model.Envelope
```

```java
@Component
// implements both wrapper and unwrapper
public class EnvelopeWrapperUnWrapper implements CustomerEventsProducer.EnvelopeWrapper, OnCustomerEventConsumer.EnvelopeUnWrapper {
    @Override
    public Object wrap(Object payload) {
        var envelope = new Envelope();
        envelope.setPayload((CustomerEventPayload) payload);
        return envelope;
    }

    @Override
    public Object unwrap(Object envelope) {
        return ((Envelope) envelope).getPayload();
    }
}
```

