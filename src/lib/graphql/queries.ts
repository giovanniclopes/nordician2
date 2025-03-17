import { gql } from 'graphql-request';

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      id
      title
      slug
      datePublished
      tags
      coverPhoto {
        url
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      content {
        html
      }
      datePublished
      tags
      coverPhoto {
        url
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;