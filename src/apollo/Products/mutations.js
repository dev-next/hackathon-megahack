import gql from 'graphql-tag';

export const createItem = gql`
  mutation createItem($item: ItemInput!, $store: ID!, $createdBy: ID!) {
    createItem(item: $item, store: $store, createdBy: $createdBy) {
      id
    }
  }
`;
