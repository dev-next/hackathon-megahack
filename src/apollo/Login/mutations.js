import gql from 'graphql-tag';

export const createStoreAndOwner = gql`
  mutation ($owner: UserInput!, $store: StoreInput!) {
    createStoreAndOwner(user: $owner, store: $store) {
      id
    }
  }
`;
