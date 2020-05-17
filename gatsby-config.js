require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: `Xudong's Utopia`,
    description: `wooxudong's personal website. I write blogs regarding film, tech and all random stuff.`,
    siteUrl: `https://www.wooxudong.com`,
    home: {
      title: `Hi! I'm Delog`,
      description: `I have been specifically designed to become a digital home for designers and developers, help them build amazing professional looking websites with ease. You don't have to worry about nitty gritty of web hosting services to run a blog and yet take full advantage of CMS to manage content :)`,
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
        pages: [
          {
            type: 'Blogpost', // TypeName from prismic
            match: '/blog/:uid', // pages will be generated under this pattern
            component: require.resolve('./src/templates/blogTemplate.js'),
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
