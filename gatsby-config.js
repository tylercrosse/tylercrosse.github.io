module.exports = {
  siteMetadata: {
    title: `Tyler Crosse`,
    description: `Sharing my projects and expanding my knowledge of Software Development with a Frontend slant`,
    author: `Tyler Crosse`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-T75VQ64',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        commonmark: true,
        footnotes: true,
        pedantic: true,
        plugins: [
          `gatsby-remark-unwrap-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`, // should be before prismjs
          `gatsby-remark-prismjs`,
        ],
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // develop: true,
        tailwind: true,
        purgeOnly: [
          'src/css/tailwindBase.css',
          'src/css/tailwindComponents.css',
          'src/css/tailwindUtilities.css',
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tyler Crosse`,
        short_name: `TC`,
        start_url: `/`,
        background_color: `--theme-p10`,
        theme_color: `--theme-p10`,
        display: `minimal-ui`,
        icon: `src/images/favicon-512.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-graphql-codegen`, // generates graphql-types - turn on/off
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        extensions: ['ts', 'tsx'],
        exclude: ['node_modules', '.cache', 'public'],
        stages: ['develop', 'build-javascript'],
      },
    },
    `gatsby-plugin-catch-links`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
