require("dotenv").config({
  path: ".env"
});

module.exports = {
  siteMetadata: {
    homeTitle: `Xudong's Homepage`,
    description: `wooxudong's personal website. I write blogs regarding film, tech and all random stuff.`,
    siteUrl: `https://www.wooxudong.com`,
    blog: {
      title: `The Neverland`,
      slogan: `我们无惧看透痛苦与距离`,
      description: `All that is solid melts into air, all that is holy is profaned, and man is at last compelled to face with sober senses his real conditions of life, and his relations with his kind.`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/image`
      }
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        previews: false,
        pages: [
          {
            type: "Blogpost",
            match: "/blog/:uid",
            component: require.resolve(
              "./src/components/templates/blogTemplate.js"
            )
          }
        ],
        sharpKeys: [/image|photo|picture/, "thumbnail"]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Xudong's Personal Website`,
        short_name: `wooxudong`,
        description: `Xudong's personal website capturing life in film, technology and etc.`,
        lang: `en`,
        display: `standalone`,
        icon: `static/image/icons/favicon.png`,
        start_url: `/`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
