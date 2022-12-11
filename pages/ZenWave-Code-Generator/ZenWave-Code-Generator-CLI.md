---
layout: page
title: Command Line Interface
permalink: /ZenWave-Code-Generator/CLI
parent: ZenWave Code Generator
nav_order: 1
---

# ZenWave Code Generator CLI

ZenWave Code Generator is designed to be modular, so you can create and add custom plugins and generators packed as Java `jar` files.

## Jbang Instalation

The easiest way to install ZenWave Code Generator as a CLI is with [JBang alias](https://www.jbang.dev/documentation/guide/latest/alias_catalogs.html):

```shell
jbang alias add --name=zw release@zenwave360/zenwave-code-generator --fresh
```

This command will create a JBang alias named `zw` with all standard plugin generators at their current `RELEASE` version.

If you want to add custom plugins to your cli interface you will need to use the extended format.

## Adding Custom Plugins to Jbang Installation

```shell
jbang alias add --name=zw \
    -m=io.zenwave360.generator.Main \
    --repos=mavencentral,snapshots=https://s01.oss.sonatype.org/content/repositories/snapshots \
    --deps=\
org.slf4j:slf4j-simple:1.7.36,\
io.github.zenwave360.zenwave-code-generator.plugins:asyncapi-spring-cloud-streams3:RELEASE,\
io.github.zenwave360.zenwave-code-generator.plugins:asyncapi-jsonschema2pojo:RELEASE,\
io.github.zenwave360.zenwave-code-generator.plugins:openapi-spring-webtestclient:RELEASE,\
io.github.zenwave360.zenwave-code-generator.plugins:openapi-rest-assured:RELEASE,\
io.github.zenwave360.zenwave-code-generator.plugins:jdl-backend-application-default:RELEASE,\
io.github.zenwave360.zenwave-code-generator.plugins:jdl-to-openapi:RELEASE,\
io.github.zenwave360.zenwave-code-generator.plugins:jdl-to-asyncapi:RELEASE,\
io.github.zenwave360.zenwave-code-generator.plugins:jdl-openapi-controllers:RELEASE \
    io.github.zenwave360.zenwave-code-generator:zenwave-code-generator-cli:RELEASE
```

You can include any **custom plugin** jars in the `--deps` option.

JBang will use you maven settings for repository resolution, but you can also specify a custom maven repository in the `--repos` option.


## List of Available Plugins

You can list all available plugins in your local installation with the following command

```shell
jbang zw --help -f list
```

Refer to individual plugin's documentation for more information:

| **Plugin**                                                                               | **Description**                    | **Model Types**            |
| ---------------------------------------------------------------------------------------- | ---------------------------------- | -------------------------- |
| [AsyncAPI JSON Schema to POJO](https://zenwave360.github.io/zenwave-code-generator/plugins/asyncapi-jsonschema2pojo/README.md)             | AsyncAPI JSON Schema to POJO       | AsyncAPI, JsonSchema       |
| [AsyncAPI to Spring Cloud Streams 3](https://zenwave360.github.io/zenwave-code-generator/plugins/asyncapi-spring-cloud-streams3/README.md) | AsyncAPI to Spring Cloud Streams 3 | AsyncAPI, AVRO, JsonSchema |
| [JDL Backend Application Default](https://zenwave360.github.io/zenwave-code-generator/plugins/jdl-backend-application-default/README.md)   | JDL Backend Application Default    | JDL                        |
| [Java 2 JDL Reverse Engineering](https://zenwave360.github.io/zenwave-code-generator/plugins/java-to-jdl/README.md)                        | Java 2 JDL Reverse Engineering     | Java, JDL                  |
| [JDL OpenAPI Controllers](https://zenwave360.github.io/zenwave-code-generator/plugins/jdl-openapi-controllers/README.md)                   | JDL OpenAPI Controllers            | OpenAPI, JDL               |
| [JDL to OpenAPI](https://zenwave360.github.io/zenwave-code-generator/plugins/jdl-to-openapi/README.md)                                     | JDL to OpenAPI and OpenAPI to JDL  | JDL, OpenAPI               |
| [OpenAPI to Spring WebTestClient](https://zenwave360.github.io/zenwave-code-generator/plugins/openapi-spring-webtestclient/README.md)      | OpenAPI to Spring WebTestClient    | OpenAPI                    |
| [REST-Assured](https://zenwave360.github.io/zenwave-code-generator/plugins/openapi-rest-assured/README.md)                                 | OpenAPI to REST-Assured            | OpenAPI                    |

NOTE: This will list any available plugin, standard or custom, inside any of these root java packages "io", "com" or "org".

## Getting Help and Executing individual plugins

And get help for a given plugin:

```shell
jbang zw --help -p <pluginConfigClass>
```

You can add choose a help output format (options `-f`): `help`, `detailed` or `markdown`

You can execute individual plugins using the `-p` options followed by any plugin option in the following format.

```shell
jbang zw -p <pluginConfigClass or short-code> optionName=value optionName2=value
```

You can separate values with commas (`,`) for options that support lists or arrays.