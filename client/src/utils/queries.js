import {gql} from '@apollo/client';

export const QUERY_ME = gql`
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

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const QUERY_GOOGLE_BOOKS = gql`
    query googleBooks($query: String!) {
        googleBooks(query: $query) {
            bookId
            authors
            description
            title
            image
            link
        }
    }
`;
