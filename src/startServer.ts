import { importSchema } from "graphql-import";
import { GraphQLServer } from "graphql-yoga";
import * as path from "path";

import { resolvers } from "./resolvers";
import { createTypeOrmConnection } from "./utils/createTypeOrmConnection";
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

// or .gql or glob pattern like **/*.graphql

export const startServer = async () => {
  const typeDefs = importSchema(path.join(__dirname, "./schema.graphql"));
  const server = new GraphQLServer({ typeDefs, resolvers });
   await createTypeOrmConnection()
   const app = await server.start({port:process.env.NODE_ENV ==="test" ? 0 : 4000});
   console.log("Server is running on localhost:4000")

   return app;
};