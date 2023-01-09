---
layout: page
title: API-First with AsyncAPI
permalink: /Event-Driven-Architectures/API-First-with-AsyncAPI
parent: Event Driven Architectures
nav_order: 2
---

# API-First with AsyncAPI

- [API-First with AsyncAPI](#api-first-with-asyncapi)
  - [Broker-based APIs are Symmetric](#broker-based-apis-are-symmetric)
  - [Understanding AsyncAPI Definition](#understanding-asyncapi-definition)
    - [Info](#info)
    - [Servers](#servers)
    - [Channels: Publish / Subscribe](#channels-publish--subscribe)
    - [Messages](#messages)
    - [Message Payloads / Schemas](#message-payloads--schemas)
    - [Reusing Configurations: Operation Traits, Message Traits...](#reusing-configurations-operation-traits-message-traits)
  - [Different Styles of Message Payloads](#different-styles-of-message-payloads)
    - [Event Sourcing Messages](#event-sourcing-messages)
    - [Notification Messages](#notification-messages)
    - [State Transfer Messages](#state-transfer-messages)


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

## Understanding AsyncAPI Definition

If you are familiar with OpenAPI you may find useful the following image borrowed from AsyncAPI documentation (click image to follow):

[![OpenAPI and AsyncAPI](/resources/openapi-asyncapi.png)](https://www.asyncapi.com/docs/tutorials/getting-started/coming-from-openapi)

### Info

Document your API: name, purpose, contact details, license...

### Servers

Document where your API will be deployed and required security...

### Channels: Publish / Subscribe

Each channel represent one broker topic, channel, queue... where you are about to publish or subscribe to.

Use use above table to understand which section, publish or subscribe, you may want to use.

In a nutshell: providers publish events and subscribes to commands/queries.

### Messages

Use Messages to describe **Headers**, **Payload Schema** and **Content Type**. You can also include examples, descriptions and protocol-specific binding documentation... 

```yml
components:
  messages:
    turnOnOff:
      name: turnOnOff
      title: Turn on/off
      summary: Command a particular streetlight to turn the lights on or off.
      headers:
        type: object
        properties:
          my-app-header:
            type: string
      payload:
        $ref: "#/components/schemas/turnOnOffPayload"

```

### Message Payloads / Schemas

You can define message payloads as:

- Inline components/schemas in the same familiar way you do in OpenAPI
- External files: both `json-schema` and `avro schemas` (.avsc) are supported

```yml
components:
  messages:
    MessageWithAsyncAPISchema:
      payload:
        $ref: "#/components/schemas/turnOnOffPayload" ## asyncapi/inline schema
    MessageWithExternalJsonSchema:
      schemaFormat: 'application/schema+json;version=draft-07'
      payload:
        $ref: "some/external/file.schema" ## a json-schema file
    MessageWithAvroSchema:
      schemaFormat: application/vnd.apache.avro+json;version=1.9.0
      payload:
        $ref: "v1/imports/file.avsc" ## and avro schema file
```


### Reusing Configurations: Operation Traits, Message Traits...

Operation Traits, Message Traits are an excellent way to reuse chunks of configuration between different operations or messages.

For instance if various messages share some common headers, you can configure them as Message Traits:

```yml
components:
  messages:
    CustomerEventMessage:
      name: CustomerEventMessage
      title: Async Event for a Customer
      summary: Async Event for a Customer
      schemaFormat: application/vnd.aai.asyncapi;version=2.4.0
      traits:
        - $ref: '#/components/messageTraits/CommonHeaders' # 'CommonHeaders' contents will replace 'traits' property
      payload:
        $ref: '#/components/schemas/CustomerEventPayload'

  messageTraits:
    CommonHeaders:
      headers:
        type: object
        properties:
          my-app-header:
            type: integer
            minimum: 0
            maximum: 100
```

And the same concept applies to Operation Traits.

## Different Styles of Message Payloads

### Event Sourcing Messages

### Notification Messages


### State Transfer Messages
