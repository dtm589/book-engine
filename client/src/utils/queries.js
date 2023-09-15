import { gpl } from '@apollo/client';

export const GET_ME = gpl`
query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
}
`;