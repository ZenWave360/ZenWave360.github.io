---
layout: page
title: Maven Plugin
permalink: /ZenWaveSDK/Maven-Plugin
parent: ZenWave SDK
nav_order: 2
---

# ZenWave SDK - Maven Plugin

ZenWave SDK Maven Plugin can execute any plugin-generator as part of your build process.

- You need to add any plugin-generator you want to use to this maven-plugin `dependencies` section. By default, no custom or standard plugin-generators are added.
- Use `generatorName` to specify the class name or short code of the plugin-generator you want to exec.
- `inputSpec` supports file URIs and also `classpath` URIs, so you can generate code from API files in your project and/or maven-plugin classpath.
- Configure your plugin-generator using `configOptions` section.

The main advantage of ZenWave SDK Maven Plugin over the Command Line Interface is to generate API-First code as part of your build process.

Check out [AsyncAPI and JsonSchema2Pojo](https://zenwave360.github.io/zenwave-sdk/plugins/asyncapi-jsonschema2pojo/) and [Spring Cloud Stream 3](https://zenwave360.github.io/zenwave-sdk/plugins/asyncapi-spring-cloud-streams3/) for examples on how to generate API-First artifacts for AsyncAPI with this maven plugin.

```xml
<plugin>
    <groupId>io.github.zenwave360.zenwave-sdk</groupId>
    <artifactId>zenwave-sdk-maven-plugin</artifactId>
    <version>${zenwave.version}</version>
    <executions>
        <execution>
            <id>generate-asyncapi-producer</id>
            <phase>generate-sources</phase>
            <goals>
                <goal>generate</goal>
            </goals>
            <plugin>
                <generatorName>spring-cloud-streams3</generatorName>
                <inputSpec>${pom.basedir}/src/main/resources/model/asyncapi.yml</inputSpec>
                <configOptions>
                    <role>provider</role><!-- provider or client -->
                    <style>imperative</style>
                    <apiPackage>io.zenwave360.example.adapters.events.producer</apiPackage>
                    <modelPackage>io.zenwave360.example.adapters.events.model</modelPackage>
                </configOptions>
            </plugin>
        </execution>
        <execution>
            <id>generate-asyncapi-producer-dtos</id>
            <phase>generate-sources</phase>
            <goals>
                <goal>generate</goal>
            </goals>
            <plugin>
                <generatorName>jsonschema2pojo</generatorName>
                <inputSpec>${pom.basedir}/src/main/resources/model/asyncapi.yml</inputSpec>
                <configOptions>
                    <modelPackage>io.zenwave360.example.adapters.events.model</modelPackage>
                </configOptions>
            </plugin>
        </execution>
    </executions>
    <dependencies>
        <dependency>
            <groupId>io.github.zenwave360.zenwave-sdk.plugins</groupId>
            <artifactId>asyncapi-spring-cloud-streams3</artifactId>
            <version>${zenwave.version}</version>
        </dependency>
        <dependency>
            <groupId>io.github.zenwave360.zenwave-sdk.plugins</groupId>
            <artifactId>asyncapi-jsonschema2pojo</artifactId>
            <version>${zenwave.version}</version>
        </dependency>
    </dependencies>
</plugin>
```

You can find main Maven Plugin documentation at (zenwave-sdk-maven-plugin)[https://zenwave360.github.io/zenwave-sdk/zenwave-sdk-maven-plugin/]
