import gql from 'graphql-tag';

export const catalogueBySlug = gql`
  query catalogueBySlug($slug: String!) {
    catalogueBySlug(slug: $slug) {
      id
      name
      seller {
        id
        email
        phone
      }
      customer {
        name
        phone
      }
      store {
        id
      }
      items {
        id
        name
        photos
        description
        tags
        value
        fields {
          label
          value
        }
        store {
          name
        }
      }
      slug
      creationDate
      updateDate
      active
    }
  }
`;

export const item = gql`
  query item ($id: ID!) {
    item(itemId: $id) {
      id
      description
      fields {
        label
        value
      }
      name
      photos
      tags
      value
    }
  }
`;
