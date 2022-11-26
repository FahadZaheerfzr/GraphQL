const { gql } = require('apollo-server');

const typeDefs = gql`
    type User{
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality: Nationality
        friends:[User]
        favoriteMovies:[Movie]
    }

    type Movie{
        id:ID!
        name:String!
        rating:Float!
        description:String
        isInTheaters:Boolean!
    }

    type Query{
        users: [User!]!
        user(id:ID!):User!
        movies: [Movie!]!
        movie(name:String!):Movie!
    }

    enum Nationality{
        US
        Canada
        UK
        Poland
        Scotland
    }
`;

module.exports = { typeDefs };