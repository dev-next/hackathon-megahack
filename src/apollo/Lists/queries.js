import gql from 'graphql-tag';

export const validateSlug = gql`
  query validateSlug ($slug: String!) {
    validateSlug(slug: $slug)
  }
`;

export const users = gql`
  query users($where: UserWhereInput) {
    users(where: $where) {
      id
      name
    },
  }
`;

export const items = gql`
  query items {
    items {
      id
      name
    },
  }
`;
