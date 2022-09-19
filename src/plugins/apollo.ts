import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { LOCALSTORAGE_TOKEN_KEY } from "@/constants";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL,
});
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default apolloClient;
