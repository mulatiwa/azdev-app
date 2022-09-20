//  GraphQL
import { gql } from 'apollo-server-express';
import graphql from 'graphql';
import QueryType from './gql[queries].js';

//Operations

const { GraphQLSchema, printSchema } = graphql;

const schema = new GraphQLSchema(
  {
    query: QueryType,
  }
);

export const typeDefs = gql`${printSchema(schema)}`;

export default schema;