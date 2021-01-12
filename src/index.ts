import "reflect-metadata";
import { importSchema } from 'graphql-import'
import { GraphQLServer } from 'graphql-yoga'

import {resolvers} from "./resolvers"
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const typeDefs = importSchema('schema.graphql'); // or .gql or glob pattern like **/*.graphql



const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
