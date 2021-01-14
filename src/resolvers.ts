import * as bcrypt from "bcryptjs";
import { User } from "./entity/User";
import { ResolverMap } from "./types/graphql-utils";

export const resolvers: ResolverMap = {
    Query: {
      hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Hello ${name || 'World'}`,
    },
    Mutation:{
        register: async(_, { email, password }: GQL.IRegisterOnMutationArguments) => {
            const hashedPassword = await bcrypt.hash(password,10)
            await User.create({
              email,
              password: hashedPassword,
            })
            return true;
        }
    }
  }