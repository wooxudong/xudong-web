import React from "react";
import Layout from "../components/buildingBlocks/Layout";
import { makeStyles } from "@material-ui/styles";
import { graphql } from "gatsby";
import { portfolio } from "../contants/routes";
import SEO from "../components/buildingBlocks/SEO";
import HeroHeader from "../components/portfolio/HeroHeader";

const useStyles = makeStyles({});
const PortfolioPage = ({ data: { site } }) => {
  const classes = useStyles();

  return (
    <Layout title={site.siteMetadata.portfolio.title} to={portfolio}>
      <SEO
        title={site.siteMetadata.portfolio.title}
        description={site.siteMetadata.description}
      />
      <HeroHeader slogan={site.siteMetadata.portfolio.slogan} />
    </Layout>
  );
};

export default PortfolioPage;
export const pageQuery = graphql`
  query portfolioPageQuery {
    site {
      siteMetadata {
        description
        portfolio {
          title
          slogan
        }
      }
    }
  }
`;
