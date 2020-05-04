import gql from 'graphql-tag';

export const createStoreAndOwner = gql`
  mutation createStoreAndOwner($owner: UserInput!, $store: StoreInput!) {
    createStoreAndOwner(user: $owner, store: $store) {
      id
    }
  }
`;
