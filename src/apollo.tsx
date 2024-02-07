import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      MoveModule: {
        fields: {
          functions: relayStylePagination(),
        },
      },
      MovePackage: {
        fields: {
          modules: relayStylePagination(),
        },
      },
    },
  }),
});
