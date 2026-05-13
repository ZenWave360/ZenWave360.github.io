const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "ZenWave 360º",
        description: "ZenWave 360: DDD and API-First Modeling Tools for Modern Distributed Applications.",
        baseDirectory: path.resolve(__dirname, '../'),
        siteUrl: "https://www.zenwave360.io/",
        githubRepositoryURL: "https://github.com/zenwave360",
        discordInvite: "https://discord.gg/TWyXEeV2Ae",
        goatCounterURL: "https://zenwave360.goatcounter.com/count",
        sections: ['ZenWave 360º', 'ZenWave SDK', 'SDK Plugins', 'ZenWave & API-First', 'ZenWave & API Testing', 'Examples', 'DDD Examples', 'EDA Examples'],
        navItems: [
          { title: 'Documentation', url: '/docs/' },
          { title: 'SDK', url: '/zenwave-sdk/' },
          { title: 'Plugin', url: '/plugin/' },
          { title: 'Blog', url: '/blog/' },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: `https://www.zenwave360.io/`,
    //     stripQueryString: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.zenwave360.io`,
        noQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
  ],
};
