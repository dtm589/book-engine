const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    bookCount: String
    savedBooks: [Books]
}

type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

input InputBook {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;