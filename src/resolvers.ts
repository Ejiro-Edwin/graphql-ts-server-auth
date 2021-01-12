import {IResolvers} from "graphql-yoga/dist/src/types"
export const resolvers: IResolvers = {
    Query: {
      hello: (_: any, { name }: GQL.IHelloOnQueryArguments) => `Hello ${name || 'World'}`,
    },
    Mutation:{
        reqister(_,{}: GQL.IHelloOnQueryArguments) => {

        }
    }
  }