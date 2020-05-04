import gql from 'graphql-tag';

export const sellers = gql`
  query sellers {
    sellers {
      name
      email
      phone
      photo
      invite {
        status
      }
      tags
      creationDate
    }
  }
`;
