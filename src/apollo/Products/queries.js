import gql from 'graphql-tag';

export const items = gql`
  query {
    items {
      id
      name
      description
      photos
      value
      tags
      fields {
        label
        value
      }
      creationDate
    }
  }
`;
