import gql from 'graphql-tag';

export const validateSlug = gql`
  query validateSlug ($slug: String!) {
    validateSlug(slug: $slug)
  }
`;

export const tags = gql`
  query tags {
    tags,
  }
`;
