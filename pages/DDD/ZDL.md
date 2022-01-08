---
layout: page
title: ZenWave Domain Language for Event-Driven Microservices
permalink: /Domain-Driven-Design/ZDL-Domain-Language
parent: Domain Driven Design
nav_order: 2
---

#  ZenWave Domain Language for Event-Driven Microservices

ZenWave Domain Language: describe your model aggregates and events beyond CRUD applications.

**ZDL Draft:**

<details open markdown="1">
  <summary>orders-model.jdl (expand to see)</summary>

```jdl
// entities and aggregates ommited for brevity

services {
	service CustomerUseCases (Customer) {
		createCustomer(Customer) Customer events onCustomerEvent(CustomerCreated)
		updateCustomer(id, customer Customer) Customer events onCustomerEvent(CustomerUpdated), onCustomerAddressEvent(CustomerAddressUpdated)
		deleteCustomer(id) void events onCustomerEvent(CustomerDeleted)
	}

	service CustomerOrderUseCases (CustomerOrder) {
		createCustomerOrder(CustomerOrder) CustomerOrder events onCustomerOrderEvent(CustomerOrderCreated)
		updateCustomerOrder(id, customerOrder CustomerOrder) CustomerOrder events onCustomerOrderEvent(CustomerOrderUpdated)
		deleteCustomerOrder(id) events onCustomerOrderEvent(CustomerOrderDeleted)
	}
}

events {

	event CustomerCreated {
		customerId Long
		customer Customer
	}

	event CustomerUpdated {
		customerId Long
		customer Customer
	}

	event CustomerAddressUpdated {
		customerId Long
		address Address
	}

	operation onCustomerEvent {
		channel customers
		events CustomerCreated, CustomerUpdated
	}

	operation onCustomerAddressEvent {
		channel customers
		events CustomerAddressUpdated
	}

	operation onCustomerOrderEvent {
		channel customerOrders
		events CustomerOrderCreated, CustomerOrderUpdated
	}
}

```
</details>