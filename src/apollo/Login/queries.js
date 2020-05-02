import gql from 'graphql-tag';

export const authenticate = gql`
  query authenticate ($phone: String!, $password: String!) {
    authenticate(phone: $phone, password: $password) {
      token
      user {
        id
        name
        type
        phone
        stores {
          id,
          name
        }
        photo
      }
    }
  }
`;
