import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import Cors from 'micro-cors';

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors();

export default cors((req,res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  return apolloServer.createHandler({ path: "/api/graphql" })(req,res);
})
