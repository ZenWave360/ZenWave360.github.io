---
title: SpringBoot + Kotlin is coming to ZenWaveSDK
slug: /posts/ZenWave-Spring-Kotlin-Announcement/
image: ZenWave-Spring-Kotlin-Announcement.png
author: Ivan Garcia Sainz-Aja
date: 2025-06-15T06:00:00+01:00
excerpt: 'With ZenWaveSDK v2.1.0 soon, you’ll be able to generate Spring Boot backend applications in either Java or Kotlin, with full customization to adapt to your team’s internal libraries or custom annotations.'
tags:
  - ZenWave SDK
  - Code Generator
  - Spring Boot
  - Java
  - Kotlin
---

![SpringBoot + Kotlin is coming to ZenWaveSDK](./ZenWave-Spring-Kotlin-Announcement.png)


# SpringBoot + Kotlin is coming to ZenWaveSDK

ZenWaveSDK will soon support generating well-structured Spring Boot applications with #OpenAPI and #AsyncAPI support in both Java and Kotlin!

You can model your backend application using a lightweight, developer-friendly DSL grounded in DDD and API-First principles. This DSL serves as an ubiquitous language, enabling teams to think, discuss, and collaborate effectively on software design... And then use a fully customizable set of plugins to generate all the boring staff that is already present in the model.

**A note on ZenWaveSDK 2.0.0** 

The 2.0.0 release was a bit chaotic. While the code was ready early this year, we were working off the development branch, we didn't have the time to write the release notes and the documentation for all the new features.

Because we were presenting some bits of ZenWaveSDL in #Codemotion and #SpringIO and version 2.0.0 was to be published under it's own 'io.zenwave360' namespace/groupId we decided to release version 2.0.0 even without documenting all the new features.

**What’s in ZenWaveSDK 2.0.0?**  

- Fully customizable project layouts: Clean/Hexagonal architectures, Layered layout, and Simple Domain Packaging.  
- First-class support for modular monoliths without class duplication between modules.  
- Support for `naturalIds` in your entities 
- Support for partial updates with `@patch`
- OpenAPI and AsyncAPI overlays for easy and automated API customization
- Enhanced REST API support for edge cases derived from real-world projects


**What’s coming in v2.1.0?**  

Soon, you’ll be able to generate Spring Boot backend applications in either Java or Kotlin, with full customization to adapt to your team’s internal libraries or custom annotations.


Stay tuned for more updates, and thank you for building with ZenWaveSDK!