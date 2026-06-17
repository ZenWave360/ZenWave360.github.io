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
HOW    -> Humans Explore, Tools Connect, AI Understands
HOW    -> Discover -> Shape -> Generate -> Navigate
WHAT   -> What ZenWave Is + Maturity
WHAT   -> Arcadia Editions
WHAT   -> ZenWave SDK
8. Footer
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

BAND 1: HUMANS EXPLORE, TOOLS CONNECT, AI UNDERSTANDS
--------------------------------------------------------------------------------
Purpose:
Make the platform thesis memorable before showing the lifecycle graphic.

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

Possible supporting points:

[Point] Humans Explore
Move from workflows to APIs, events, schemas, services, tests, and source code
without losing architectural context.

[Point] Tools Connect
Keep open standards, ZenWave models, generated assets, and implementation code
linked as the system evolves.

[Point] AI Understands
Give AI assistants a connected architecture model so generated help starts from
system context instead of isolated prompts.
--------------------------------------------------------------------------------

BAND 2: DISCOVER -> SHAPE -> GENERATE -> NAVIGATE
--------------------------------------------------------------------------------
Purpose:
Show the lifecycle and make clear that ZenWave starts with architecture and
discovery, then brings in generation as part of delivery.

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

BAND 3: WHAT ZENWAVE PLATFORM IS + MATURITY
--------------------------------------------------------------------------------
Purpose:
Answer "What is this thing?" after the why and how are clear, then explain what
can be used today and how mature each part is.

This band replaces the older "Platform in construction" proof strip and the
older "A shared map of the system" copy. The old proof-strip ideas should be
folded into more useful places:
- "Built in public" belongs in Arcadia and maturity.
- "Open standards" belongs in this band.
- "In construction" belongs in maturity.

Suggested H2:
What ZenWave Platform Is

Suggested intro:
ZenWave Platform builds an architecture world model from the artifacts your
system already has, then enriches it with ZenWave modeling languages, IDE
navigation, and generation capabilities.

Cards:

[Card] Architecture World Model
Connect your company’s existing APIs and events, including OpenAPI and AsyncAPI,
and enrich them with ZenWave ZDL and ZFL for deeper domain and workflow context.

[Card] Domain Modeling Languages
ZDL and ZFL are domain-specific languages for modeling workflows and bounded
contexts. Grounded in Event Storming and DDD, they enrich your architecture with
business meaning and make ubiquitous language structured, versioned, and
executable.

[Card] SDK And Generators
Generates Spring Boot backend applications from architecture artifacts: complete
APIs, API client SDKs, event producer SDKs, schemas, tests, end-to-end tests,
and Kafka infrastructure.

Suggested H2:
Capabilities And Maturity

Suggested intro:
ZenWave is not one thing at one maturity level. Some capabilities are
production-proven, some are production-used and actively evolving, and some are
being built in public.

Preferred structure:
Use a compact table-like grid or cards with:
- Capability
- Maturity
- Signal / what it means

Rows/cards:

[AsyncAPI Generator]
Maturity: Production-proven
Signal: 4+ years of production-ready source code.

[ZenWave SDK + ZDL]
Maturity: Production-used, actively evolving
Signal: Used in production projects for years. ZDL is stable; the SDK continues
adding capabilities around ZDL, APIs, events, tests, and infrastructure.

[ZFL]
Maturity: Building in public
Signal: Work in progress, shaped through Arcadia and real flow-modeling
examples.

[Architecture World Model / Platform]
Maturity: Building in public
Signal: The integrated platform experience is being assembled from mature
components and new modeling/navigation layers.

Label guidance:
- Avoid generic "alpha / beta / stable" labels.
- Prefer narrative maturity labels:
  - Production-proven
  - Production-used, actively evolving
  - Building in public
- Do not make mature pieces look experimental just because the platform vision
  is still emerging.
--------------------------------------------------------------------------------

BAND 4: ARCADIA EDITIONS
--------------------------------------------------------------------------------
Purpose:
Show the public working example and give the "building in public" story a
concrete place to live.

Suggested H2:
Arcadia Editions is the working example

Short paragraph:
Arcadia Editions is a fictional company with real architectural pressure, used
to build the platform idea in public through workflows, contracts, services, events,
and operational concerns.

CTAs:
[Read the series] [View the code]

Visual:
Arcadia flow / architecture / event board.

Cards:

[Card] Why Arcadia exists
A fictional publisher with real product, catalog, order, event, and integration
pressure.

[Card] From Event Storming to ZFL
Discovery work becomes connected workflows that can be discussed, versioned, and
evolved.

[Card] From flow to service scaffolding
AI can help start the work, while ZenWave keeps the architecture understandable
as delivery continues.
--------------------------------------------------------------------------------

BAND 5: ZENWAVE SDK
--------------------------------------------------------------------------------
Purpose:
Keep SDK visible and concrete, but frame it as the delivery engine inside the
broader platform.

Suggested H2:
ZenWave SDK

Short paragraph:
The SDK remains the delivery engine inside the broader platform. It turns
connected architecture artifacts into Spring Boot applications, API surfaces,
event adapters, tests, and infrastructure support.

Visual:
Buddha / laptop visual.

Capability row:
- Spring Boot generation
- OpenAPI / AsyncAPI
- Tests
- Infrastructure support

CTA:
[Explore SDK]
--------------------------------------------------------------------------------

FOOTER
--------------------------------------------------------------------------------

IMPLEMENTATION NOTES
--------------------------------------------------------------------------------
Current relevant files:
- src/pages/index.astro
- src/components/ArchitectureLifecycleBand.astro

Bands that are conceptually OK but need visual/copy polishing:
- Hero
- Humans Explore, Tools Connect, AI Understands
- Discover -> Shape -> Generate -> Navigate
- Arcadia
- ZenWave SDK

Bands that should be refactored:
- Remove or replace the old "Platform in construction" proof strip.
- Refactor "A shared map of the system" into "What ZenWave Platform Is".
- Refactor "Available today" into "Available Capabilities And Maturity".

Do not overcommit the homepage to a claim that every platform capability is at
the same maturity level.
--------------------------------------------------------------------------------
