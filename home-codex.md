--------------------------------------------------------------------------------
TOP NAV
[ZenWave Platform logo]                     [Documentation] [SDK] [Plugin] [Blog]
--------------------------------------------------------------------------------

HOMEPAGE DIRECTION
--------------------------------------------------------------------------------
ZenWave is moving from an SDK-first message to a platform-first message.

The homepage should explain three things clearly:

1. What ZenWave Platform is.
2. How the architecture lifecycle works.
3. What is available today, with honest maturity levels.

Important positioning:
- ZenWave Platform is not just a code generator.
- ZenWave Platform is not only ZDL/ZFL.
- OpenAPI and AsyncAPI are first-class inputs to the architecture world model.
- ZDL and ZFL are ZenWave-specific DSLs that enrich the model, but the
  architecture world model can work without them.
- Some parts are production-proven; other parts are being built in public.
--------------------------------------------------------------------------------

PAGE FLOW
--------------------------------------------------------------------------------
WHY    -> Hero
HOW    -> Humans Explore, Tools Connect, AI Understands + Discover -> Shape -> Generate -> Navigate
WHAT   -> What ZenWave Platform Is
PROOF  -> Reference Architectures
Footer
--------------------------------------------------------------------------------

HERO
--------------------------------------------------------------------------------
| EYEBROW: ZenWave Platform                                                   |
|                                                                             |
| H1: Understanding the big picture is the only way to build, maintain, and    |
| evolve software with confidence.                                            |
|                                                                             |
| Short paragraph:                                                            |
| ZenWave Platform makes the big picture of your software explicit, connected,|
| and navigable for your team, your tools, and your AI agents.                |
|                                                                             |
| [Explore the docs]   [See it in action]                                      |
|                                                                             |
| Small trust/status line:                                                    |
| Grounded in open standards. Built in public.              |
|                                                                             |
| --------------------------------------------------------- --------------    |
| | Main visual: architecture map / model graph             | Small card |    |
| | showing workflows, contexts, APIs, events, schemas,     | ZenWave SDK|    |
| | services, and generated artifacts connected             | Buddha img |    |
| |                                                        | Delivery   |    |
| |                                                        | engine     |    |
| --------------------------------------------------------- --------------    |
--------------------------------------------------------------------------------

Current design notes:
- Main homepage shell should align around one shared width.
- Current agreed shell width: 1320px.
- Hero headline should be strong but not so large that it forces awkward
  wrapping.
- The SDK Buddha image can appear in the hero as a secondary "Delivery engine"
  signal, but the hero should stay platform-first.
--------------------------------------------------------------------------------

BAND 1: HUMANS EXPLORE, TOOLS CONNECT, AI UNDERSTANDS + DISCOVER -> SHAPE -> GENERATE -> NAVIGATE
--------------------------------------------------------------------------------
Purpose:
Make the platform thesis memorable, then show the lifecycle cards that explain
how the platform works.

This band explains why the architecture world model matters:
- Humans can explore architecture by meaning, not by hunting through isolated
  files.
- Tools can connect contracts, models, schemas, events, services, tests, and
  generated artifacts.
- AI can work from connected architecture context instead of disconnected
  snippets.

Suggested H2:
Humans Explore, Tools Connect, AI Understands

Suggested intro:
ZenWave makes architecture readable by people, traversable by tools, and usable
as context for AI-assisted delivery.

Then show the lifecycle and make clear that ZenWave starts with architecture and
discovery, then brings in generation as part of delivery. Use the lifecycle
cards as the supporting content for this band instead of separate Humans,
Tools, and AI cards.

Current implementation:
- Native SVG + CSS component.
- Component name: ArchitectureLifecycleBand.astro.
- Imported and rendered from src/pages/index.astro.
- Inspired by Generated image 1.png, but recreated as code so labels remain
  sharp, themeable, and responsive.

Layout:
[Discover icon] -> [Shape icon] -> [Generate icon] -> [Navigate icon]

Required vertical layers:
- top circular icons
- CSS arrows
- four visual panels
- legend/action icons at the bottom

Stages:

[Discover]
Meaning: understand the domain before modeling or generating code.
Visual: Event Storming, sticky notes, business events, domain conversations.
Legend direction: People, Process, Signals.

[Shape]
Meaning: turn discovery into structured architecture.
Visual: bounded contexts, domain model, APIs, events, schemas, workflows.
Legend direction: Bounded Contexts, Domain Model, OpenAPI, AsyncAPI.

[Generate]
Meaning: use the model to create delivery artifacts, then complete the
implementation.
Visual: code editor, service scaffolding, tests, build/delivery pipeline.
Legend direction: Generate APIs & Events, Scaffold Services, Tests, Build & Deliver.

[Navigate]
Meaning: keep the system understandable after generation.
Visual: IDE navigation, architecture map, connected services/events.
Legend direction: Humans Explore, Tools Connect, AI Understands.

Design notes:
- The lifecycle band should align to the same outer shell as the rest of the
  homepage, currently via --home-shell-width.
- It may be visually dense, but it should not feel like a separate wider page.
- Desktop: four columns.
- Tablet: two columns.
- Mobile: one column.
--------------------------------------------------------------------------------

BAND 2: WHAT ZENWAVE PLATFORM IS
--------------------------------------------------------------------------------
Purpose:
Answer "What is this thing?" after the why and how are clear. Present ZenWave
Platform as one connected set of capabilities, with maturity badges inside each
capability card instead of a separate maturity table.

This band replaces the older "Platform in construction" proof strip and the
older "A shared map of the system" copy. The old proof-strip ideas should be
folded into more useful places:
- "Built in public" belongs in Arcadia and maturity.
- "Open standards" belongs in this band.
- "In construction" belongs in maturity.

Eyebrow:
ZenWave Platform

H2:
What ZenWave Platform Is

Intro:
ZenWave Platform is a set of connected capabilities for making the big picture
of your software explicit, connected, and navigable, from discovery and modeling
to generation and navigation.

Screenshot carousel:
- Business flow modeled from Event Storming sessions
- Systems map generated from a business flow
- Flowchart visualization generated from ZFL
- Sequence diagrams derived from business flows
- Domain model with aggregates, entities and lifecycle states
- OpenAPI contracts derived from annotated service commands
- AsyncAPI contracts generated from domain events

Carousel interaction:
- One click on the right half advances to the next screenshot.
- One click on the left half moves to the previous screenshot.
- Include visible previous and next arrow controls so the carousel reads as
  interactive.

Featured row:
Two large cards with asymmetric width. Architecture World Model is wider, while
ZenWave SDK remains prominent enough for the monk and delivery-engine message
to land clearly.

[Card] ZenWave Platform: Architecture World Model
Image: connected architecture diagram visual
An IDE experience for designing, navigating, and connecting domain models,
business flows, APIs, source code, local folders, Git repositories, and schema
registries with Apicurio. The big picture of your software made explicit,
connected, and navigable.
Badge: Building in public

[Card] ZenWave SDK
Image: monk / buddha visual
An ever-growing set of plugins that generate Spring Boot services, APIs, tests,
event adapters, and infrastructure from connected architecture artifacts.
Badge: Production ready, evolving
CTAs: Get started, Explore plugins

Platform Capabilities:
4-column grid on desktop. This row reads left to right as foundational
generation, domain modeling, flow modeling, and IDE navigation. It also reads
left to right as maturity descending.

[Card] AsyncAPI Generator
Icon: official AsyncAPI logo
The original ZenWave generator and most production-proven capability. Generate
strongly typed Spring Kafka and Spring Cloud Stream producers and consumers from
AsyncAPI specifications.
Badge: Production ready

[Card] ZDL Modeling Language
Icon: zdl-icon.png
Model bounded contexts, entities, aggregates, commands, events, and services as
structured domain artifacts.
Badge: Production ready

[Card] ZFL Flow Language
Icon: zfl-icon.png
Model business flows where policies react to events, trigger commands, and
connect the flow to APIs, schemas, and domain models.
Badge: Building in public

[Card] ZenWave IDE & MCP
Icon: zenwave-logo.svg
Architecture-aware navigation and context for IDEs and AI agents, powered by a
Kotlin Multiplatform LSP server. IntelliJ first, VS Code next, with MCP support
for agent workflows.
Badge: Building in public

Supporting OSS:
4-column grid on desktop.

[Card] EventCatalog Generator
Icon: generic catalog/list icon
Export OpenAPI, AsyncAPI, and ZenWave models from ZenWave world model metadata
to EventCatalog, or import existing EventCatalog documentation back into the
ZenWave world model.
Badge: Coming soon

[Card] Terraform / asyncapi-ops
Icon: generic infrastructure/provisioning icon
Provision Kafka topics, ACLs, and Schema Registry infrastructure from AsyncAPI
contracts.
Badge: Beta

[Card] Spring Modulith Events
Icon: generic event/stream icon
Externalize Spring Modulith domain events through Spring Cloud Stream. Used by
the AsyncAPI Generator for Transactional Outbox integration.
Badge: Production ready

[Card] JSON Schema Parser
Icon: generic "{}" schema icon
Standalone JSON Schema reference parsers for JVM and Kotlin Multiplatform, used
across ZenWave SDK, the IDE tooling, and other platform components.
Badge: Supporting OSS

Card rhythm:
Icon, title, description, then maturity badge.

Label guidance:
- Avoid generic "alpha / beta / stable" labels.
- Prefer narrative maturity labels:
  - Production ready
  - Production ready, evolving
  - Building in public
- Do not make mature pieces look experimental just because the platform vision
  is still emerging.

Badge color guidance:
- Production ready: green, confident and proven.
- Building in public: amber, in progress and honest.
- Beta / Coming soon: muted gray-blue, available or planned but not committed.
- Supporting OSS: teal, a supporting role rather than a ZenWave capability.
--------------------------------------------------------------------------------

BAND 3: REFERENCE ARCHITECTURES
--------------------------------------------------------------------------------
Purpose:
Show concrete systems and examples that make the platform idea real. Arcadia
Editions is the prominent reference architecture, followed by smaller practical
examples from the same architecture/tooling ecosystem.

Eyebrow:
Built in public

H2:
Reference Architectures

Intro:
Examples that show how discovery, domain models, APIs, events, schemas,
generated services, and operational concerns work together in realistic systems.

Featured card:

[Card] Arcadia Editions
Image: arcadia.png
Badge: Building in public
A fictional publisher with real product, catalog, order, event, and integration
pressure.

Arcadia is the working example for the ZenWave Platform idea: from Event
Storming to ZFL flows, contracts, services, events, and AI-assisted delivery.

CTAs:
[Read the series] [View the code]

Layout:
Large horizontal card with image on the left and copy/actions on the right.

Reference cards:

[Card] AsyncAPI Shopping Cart
Image: ShoppingCartAsyncAPI.png
Define AsyncAPI and Avro contracts, then derive Kafka producers and consumers
for a multi-module event-driven application.
CTA: Follow the tutorial
Route: /docs/examples/eda-examples/asyncapi-shopping-cart/

[Card] Order Fulfillment Kotlin
Image: OrderFulfillmentKotlin.png
Capture ubiquitous language in ZDL and derive a Kotlin Spring Boot service with
REST APIs, domain events, and generated implementation.
CTA: Follow the tutorial
Route: /docs/examples/ddd-examples/order-fullillment-kotlin/

[Card] Transactional Outbox
Image: TransactionalOutBoxWithAsyncAPIAndSpringModulith.png
Implement the transactional outbox pattern with AsyncAPI, Spring Cloud Stream,
Spring Modulith, and ZenWave SDK generation.
CTA: Follow the tutorial
Route: /posts/TransactionalOutBoxWithAsyncAPIAndSpringModulith/

[Card] Clinical Tool Modulith
Image: ClinicalToolModulith.png
Model multiple bounded contexts and derive a modular monolith where domain
boundaries, APIs, and persistence stay aligned.
CTA: Follow the tutorial
Route: /docs/examples/ddd-examples/modulith-clinical-tool-jpa/
--------------------------------------------------------------------------------

FOOTER
--------------------------------------------------------------------------------

IMPLEMENTATION NOTES
--------------------------------------------------------------------------------
Current relevant files:
- src/pages/index.astro
- src/components/ArchitectureLifecycleBand.astro
- public/images/platform/screenshots
- public/images/platform/icons

Bands that are conceptually OK but need visual/copy polishing:
- Hero
- Humans Explore, Tools Connect, AI Understands + Discover -> Shape -> Generate -> Navigate
- Reference Architectures
- What ZenWave Platform Is

Do not overcommit the homepage to a claim that every platform capability is at
the same maturity level.
--------------------------------------------------------------------------------
