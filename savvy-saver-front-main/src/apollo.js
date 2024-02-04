import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: 'https://api.taddy.org',

});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'X-USER-ID': '',
      'X-API-KEY': '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
