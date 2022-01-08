---
layout: page
title: JDL for Entities, Aggregates and Relations
permalink: /Domain-Driven-Design/JDL-Domain-Language
parent: Domain Driven Design
nav_order: 1
---

#  JHipster Domain Language JDL

ZenWave360 uses [JHipster Domain Language JDL](https://www.jhipster.tech/jdl/intro) to describe your domain model: entities, aggregated and relations.

<details markdown="1">
  <summary>orders-model.jdl (expand to see)</summary>

```jdl
@auditing
entity BaseEntity {
}


/* Customers */
@aggregate
@search(elasticsearch)
@searchCriteria
@extends(BaseEntity)
entity Customer {
  username String required minlength(3) maxlength(250)
  password String required minlength(3) maxlength(250)
  email String required minlength(3) maxlength(250)
  firstName String required minlength(3) maxlength(250)
  lastName String required minlength(3) maxlength(250)
}


/* Orders */
enum OrderStatus { CONFIRMED, SHIPPED, DELIVERED }

@aggregate
@searchCriteria(CustomerOrderSearchCriteria)
@extends(BaseEntity)
entity CustomerOrder { // Order is a reserved word
  date Instant,
  status OrderStatus
  customer Customer
  orderedItems OrderedItem[]
  paymentDetails PaymentDetails
  shippingDetails ShippingDetails
}

@skip
entity CustomerOrderSearchCriteria {
  status OrderStatus
  dateFrom Instant
  dateTo Instant
}

@embedded
entity OrderedItem {
  catalogItemId Long,
  name String required minlength(3) maxlength(250),
  price BigDecimal required,
  quantity Integer
}

@embedded
entity PaymentDetails {
  creditCardNumber String
}

@embedded
entity ShippingDetails {
  address String
}

service Customer with CustomerUseCases
service CustomerOrder with CustomerOrderUseCases
```
</details>

## JDL Extensions/Customizations

This generator supports the following JDL extensions:

### Extensions In JDL Language
- Field Types: in addition to enums and basic types it allows:
  - other entities as field type, this is useful for embedded fields which are not relations
  - array fields `fieldName String[]` or even `fieldName OtherEntity[]`
- Service: in addition to serviceClass and serviceImpl it allows configuring free text value as serviceName to allow grouping multiple entities in a given service. Then it's up to each generator to generate an interface or just an implementation class.

### Extensions With Annotations

- **@extends(entityName)**
- **@copy(entityName)**
- **@auditing**

- if any entity is annotated with @aggregate then the following table applies:

| **Annotation**                  | **Entity** | **@Persistence** | **Repository** | **Id** |
|:--------------------------------|------------|:-----------------|:---------------|:-------|
| **entity**                      | yes        | yes              |                | yes    |
| **@aggregate**                  | yes        | yes              | yes            | yes    |
| **@embedded**                   | yes        | yes              |                |        |
| **@vo**                         | yes        |                  |                |        |
| **@searchCriteria(entityName)** |            |                  |                |        |
| **@skip**                       | no         |                  |                |        |

- **@searchCriteria(entityName)** is used to specify the entity name for the search criteria, if empty will take the same fields as the actual entity.
- **@skip** entities used as search criteria should be marked with @skip