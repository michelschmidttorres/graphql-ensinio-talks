const { ApolloServer } = require('apollo-server');
const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { addResolversToSchema } = require('@graphql-tools/schema');
const { join } = require('path');

const resolversFunctions = require('./resolvers');

const schema = loadSchemaSync(join(__dirname, './schema/index.graphql'), { loaders: [new GraphQLFileLoader()] })
const resolvers = {
  ...resolversFunctions
};

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ schema: schemaWithResolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

