import gql from 'graphql-tag';

export const items = gql`
  query items {
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

export const tags = gql`
  query tags {
    tags,
  }
`;
