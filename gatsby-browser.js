import "./src/styles/global.css";
import "./src/styles/prism-theme-material.css";

const { registerLinkResolver } = require("gatsby-source-prismic-graphql");
const { linkResolver } = require("./src/utils/linkResolver");

registerLinkResolver(linkResolver);
