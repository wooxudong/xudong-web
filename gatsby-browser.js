//import './src/styles/global.scss';
import './src/styles/global.css';
const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require('./src/utils/linkResolver');

registerLinkResolver(linkResolver);
