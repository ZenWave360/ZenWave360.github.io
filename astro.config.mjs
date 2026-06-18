// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { readFileSync } from 'node:fs';
import {
  customShikiLangAlias,
  customShikiLanguages,
  zenWaveDarkCodeTheme,
  zenWaveLightCodeTheme,
} from './src/utils/code-highlighting.ts';
import { remarkPlantUml } from './src/utils/remark-plantuml.ts';

const redirects = JSON.parse(
  readFileSync(new URL('./src/redirects.json', import.meta.url), 'utf-8'),
);

export default defineConfig({
  site: 'https://www.zenwave360.io',
  output: 'static',
  redirects,
  integrations: [
    sitemap(),
    starlight({
      title: 'ZenWave 360',
      logo: {
        src: './public/images/zenwave-logo.svg',
        alt: 'ZenWave Platform',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/zenwave.css'],
      credits: false,
      expressiveCode: {
        themes: [zenWaveDarkCodeTheme, zenWaveLightCodeTheme],
      },
      components: {
        Header: './src/components/ZenHeader.astro',
        Footer: './src/components/StarlightFooter.astro',
        PageTitle: './src/components/EmptyPageTitle.astro',
        ThemeSelect: './src/components/ZenThemeToggle.astro',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/ZenWave360' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/TWyXEeV2Ae' },
      ],
      sidebar: [
        {
          label: '',
          collapsed: false,
          items: [
            { label: 'Getting Started', link: '/docs/getting-started/' },
            { label: 'ZDL Domain Language', link: '/docs/event-driven-design/zenwave-domain-language/' },
            { label: 'ZFL Flow Language', link: '/docs/event-driven-design/zenwave-flow-language/' },
          ],
        },
        {
          label: 'ZenWave SDK',
          collapsed: false,
          items: [
            { label: 'ZenWave SDK', link: '/docs/zenwave-sdk/' },
            { label: 'Backend Application', link: '/docs/zenwave-sdk/backend-application/' },
            { label: 'Entities with JPA', link: '/docs/zenwave-sdk/jpa/' },
            { label: 'Entities with Mongodb', link: '/docs/zenwave-sdk/mongodb/' },
            { label: 'Modeling Aggregates', link: '/docs/zenwave-sdk/modeling-aggregates/' },
            { label: 'Producing Domain Events', link: '/docs/zenwave-sdk/producing-domain-events/' },
            { label: 'Consuming Async Commands', link: '/docs/zenwave-sdk/consuming-async-commands/' },
            { label: 'Exposing a REST API', link: '/docs/zenwave-sdk/exposing-a-rest-api/' },
            { label: 'Customizing Generated Code', link: '/docs/zenwave-sdk/customizing-code/' },
          ],
        },
        {
          label: 'SDK Plugins',
          collapsed: true,
          items: [
            { label: 'AsyncAPI Generator for Java', link: '/zenwave-sdk/plugins/asyncapi-generator/' },
            { label: 'AsyncAPI JsonSchema2Pojo', link: '/zenwave-sdk/plugins/asyncapi-jsonschema2pojo/' },
            { label: '(A Better) Avro Schema Generator', link: '/zenwave-sdk/plugins/avro-schema-compiler/' },
            { label: 'AsyncAPI to Terraform', link: '/zenwave-sdk/plugins/asyncapi-ops/' },
            { label: 'Backend Application Default', link: '/zenwave-sdk/plugins/backend-application-default/' },
            { label: 'Kotlin Backend Application', link: '/zenwave-sdk/plugins/customizations/kotlin-backend-application/' },
            { label: 'OpenAPI Controllers', link: '/zenwave-sdk/plugins/openapi-controllers/' },
            { label: 'OpenAPI Spring WebTestClient', link: '/zenwave-sdk/plugins/openapi-spring-webtestclient/' },
            { label: 'OpenAPI Karate', link: '/zenwave-sdk/plugins/openapi-karate/' },
            { label: 'ZDL to OpenAPI', link: '/zenwave-sdk/plugins/zdl-to-openapi/' },
            { label: 'ZDL to AsyncAPI', link: '/zenwave-sdk/plugins/zdl-to-asyncapi/' },
            { label: 'Maven & Gradle Support', link: '/zenwave-sdk/zenwave-sdk-maven-plugin/' },
          ],
        },
        {
          label: 'ZenWave & API-First',
          collapsed: false,
          items: [
            { label: 'OpenAPI', link: '/API-First/OpenAPI/' },
            { label: 'AsyncAPI', link: '/API-First/AsyncAPI/' },
          ],
        },
        {
          label: 'ZenWave & API Testing',
          collapsed: false,
          items: [
            { label: 'Spring WebTestClient', link: '/docs/zenwave-sdk/api-testing/spring-webtestclient/' },
            { label: 'KarateDSL', link: '/docs/zenwave-sdk/api-testing/karate/' },
          ],
        },
        {
          label: 'Examples',
          collapsed: false,
          items: [
            { label: 'DDD Examples', link: '/docs/examples/ddd-examples/' },
            { label: 'EDA Examples', link: '/docs/examples/eda-examples/' },
          ],
        },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkPlantUml],
    shikiConfig: {
      langs: customShikiLanguages,
      langAlias: customShikiLangAlias,
    },
  },
});
