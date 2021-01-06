import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/buildingBlocks/Layout';
import PostLink from '../components/blog/PostLink';
import HeroHeader from '../components/blog/HeroHeader';
import withStyles from '@material-ui/styles/withStyles';
import SEO from '../components/buildingBlocks/SEO';
import Tag from '../components/buildingBlocks/Tag';
import _ from 'loadsh';
import { blog } from '../contants/routes';

const styles = {
  grids: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '2rem',
    marginTop: '2rem',
    '@media screen and (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    '@media only screen and (min-width: 1024px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
  tags: {
    padding: '2rem 0',
    '& span': {
      fontSize: '1.5rem',
    },
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
};

const BlogPage = ({ data: { site, prismic }, classes }) => {
  const [posts, setPosts] = useState([]);
  const [tag, setTag] = useState('all');

  useEffect(() => {
    const posts = _.get(prismic, 'allBlogposts.edges', [])
      .filter((edge) => {
        if (tag === 'all') return true;
        const currentPostTags = _.map(edge.node.tags, 'tag');
        return currentPostTags.includes(tag);
      })
      .map((edge) => edge.node);
    setPosts(posts);
  }, [tag, prismic]);

  const tags = _.uniq(
    _.get(prismic, 'allBlogposts.edges', []).flatMap((edge) =>
      _.map(edge.node.tags, 'tag')
    )
  );
  tags.unshift('all');

  return (
    <Layout title={site.siteMetadata.blog.title} to={blog}>
      <SEO
        title={site.siteMetadata.blog.title}
        description={site.siteMetadata.description}
      />
      <HeroHeader
        slogan={site.siteMetadata.blog.slogan}
        description={site.siteMetadata.blog.description}
      />
      <div className={classes.tags}>
        <span>Tags:</span>
        {tags.map((tagText) => (
          <Tag
            text={tagText}
            action={(value) => setTag(value)}
            key={tagText}
            active={tagText === tag}
          />
        ))}
      </div>
      <h2>Blog Posts &darr;</h2>
      <div className={classes.grids}>
        {posts.map((post) => (
          <PostLink key={post._meta.uid} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default withStyles(styles)(BlogPage);
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        description
        blog {
          title
          slogan
          description
        }
      }
    }
    prismic {
      allBlogposts(sortBy: publish_date_DESC) {
        edges {
          node {
            title
            author
            tags {
              tag
            }
            thumbnail
            thumbnailSharp {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 270) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            abstract
            publish_date
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`;
