import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: 'https://api.taddy.org',

});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'X-USER-ID': '977',
      'X-API-KEY': '1279142acc0c062fffeed36b5f78c056a4b16d9bb87601d6bc0f8e6f8322042bd7fa9c91299f3074a16d461841e6186dc2',
     /*  'X-USER-ID': " ",
      'X-API-KEY': "", */
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
