import { GraphQLScalarType, Kind } from "graphql";
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    _id: ID
    productName: String!
    purchasePrice: Float
    purchaseDate: Date
    salePrice: Float
    saleDate: Date
    profit: Float
    profitPerMonth: Float
  }

  type Query {
    products: [Product]!
  }

  type Mutation {
    addProduct(
      productName: String!
      purchasePrice: Float
      purchaseDate: Date
    ): Product
    removeProduct(_id: ID!): Product
    editProduct(
      _id: ID!
      productName: String!
      purchasePrice: Float
      purchaseDate: Date
      salePrice: Float
      saleDate: Date
      profit: Float
    ): Sub
  }
`;

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error("GraphQL Date Scalar serializer expected a `Date` object");
  },
  parseValue(value) {
    if (typeof value === "number") {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error("GraphQL Date Scalar parser expected a `number`");
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

module.exports = typeDefs;
