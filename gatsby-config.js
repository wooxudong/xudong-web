require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: `Xudong's Utopia`,
    description: `wooxudong's personal website. I write blogs regarding film, tech and all random stuff.`,
    siteUrl: `https://www.wooxudong.com`,
    home: {
      title: `我们无惧看透痛苦与距离`,
      description: `All that is solid melts into air, all that is holy is profaned, and man is at last compelled to face with sober senses his real conditions of life, and his relations with his kind.`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/image`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: 'gatsby-remark-emojis',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-30027142-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        previews: false,
        omitPrismicScript: true,
        pages: [
          {
            type: 'Blogpost', // TypeName from prismic
            match: '/blog/:uid', // pages will be generated under this pattern
            component: require.resolve(
              './src/components/templates/blogTemplate.js'
            ),
          },
        ],
        sharpKeys: [/image|photo|picture/, 'thumbnail'],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
