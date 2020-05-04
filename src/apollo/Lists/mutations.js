import gql from 'graphql-tag';

export const createCatalogue = gql`
  mutation createCatalogue(
    $name: String
    $slug: String
    $items: [ID]
    $seller: ID
    $customer: ID
  ) {
    createItem(
      name: $name
      slug: $slug
      items: $items
      seller: $seller
      customer: $customer
    ) {
      id
    }
  }
`;
