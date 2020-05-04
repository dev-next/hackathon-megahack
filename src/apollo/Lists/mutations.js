import gql from 'graphql-tag';

export const createCatalogue = gql`
  mutation createCatalogue($catalogue: CatalogueInput) {
    createCatalogue(catalogue: $catalogue) {
      id
    }
  }
`;
