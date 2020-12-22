import React, { useEffect, useState } from 'react';
import Layout from '../components/buildingBlocks/Layout';
import { makeStyles } from '@material-ui/styles';
import { graphql } from 'gatsby';
import { portfolio } from '../contants/routes';
import SEO from '../components/buildingBlocks/SEO';
import HeroHeader from '../components/portfolio/HeroHeader';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import { get } from 'loadsh';
import Tag from '../components/buildingBlocks/Tag';

const useStyles = makeStyles({
  grids: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '2rem',
    marginTop: '1rem',
    '@media screen and (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  tags: {
    padding: '1.5rem 0.5rem',
    '& > *': {
      marginRight: '.5rem',
      marginBottom: '.5rem',
      '&:last-child': {
        marginRight: 0,
      },
      '&:first-child': {
        marginRight: '.7rem',
      },
    },
  },
});
const PortfolioPage = ({ data: { site, prismic } }) => {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [tag, setTag] = useState('all');

  useEffect(() => {
    const posts = get(prismic, 'allPortfolioitems.edges', [])
      .filter((edge) => (tag === 'all' ? true : edge.node.tag === tag))
      .map((edge) => edge.node);
    setPosts(posts);
  }, [tag, prismic]);

  const tags = get(prismic, 'allPortfolioitems.edges', []).map(
    (edge) => edge.node.tag
  );
  tags.unshift('all');
  return (
    <Layout
      title={site.siteMetadata.portfolio.title}
      to={portfolio}
      isBlog={false}
    >
      <SEO
        title={site.siteMetadata.portfolio.title}
        description={site.siteMetadata.description}
      />
      <HeroHeader slogan={site.siteMetadata.portfolio.slogan} />
      <div className={classes.tags}>
        <span>Tags:</span>
        {tags.map((tag) => (
          <Tag
            text={tag}
            action={(value) => setTag(value)}
            key={tag}
            isBlog={false}
          />
        ))}
      </div>
      <div className={classes.grids}>
        {posts.map((post) => (
          <PortfolioCard post={post} key={post._meta.uid} />
        ))}
      </div>
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
    prismic {
      allPortfolioitems(sortBy: publish_date_DESC) {
        edges {
          node {
            _meta {
              uid
            }
            abstract
            author
            publish_date
            thumbnail
            tag
            title
            thumbnailSharp {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 306) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
