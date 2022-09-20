import graphql from 'graphql';
const { GraphQLObjectType } = graphql;

const QueryType = new GraphQLObjectType(
  {
    name: 'Query',
    fields: () =>(
      {
      }
    )
  }
);

export default QueryType;