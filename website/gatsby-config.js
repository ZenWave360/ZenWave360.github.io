const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "ZenWave 360º",
        description: "ZenWave 360: DDD and API-First Modeling Tools for Modern Distributed Applications.",
        baseDirectory: path.resolve(__dirname, '../'),
        siteUrl: "https://zenwave360.github.io/",
        githubRepositoryURL: "https://github.com/zenwave360",
        sections: ['ZenWave 360º', 'Domain Modeling', 'ZenWave SDK', 'ZenWave & API-First', 'ZenWave & API Testing'],
        navItems: [
          { title: 'Documentation', url: '/docs/zenwave360' },
          { title: 'Plugin', url: '/plugin/' },
          { title: 'Blog', url: '/blog/' },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'G-PWPE0ZF877',
      },
    },
  ],
};
