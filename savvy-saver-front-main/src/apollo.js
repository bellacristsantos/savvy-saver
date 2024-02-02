import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import dotenv from 'dotenv';

dotenv.config();


const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URI,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'X-USER-ID': process.env.REACT_APP_USER_ID,
      'X-API-KEY': process.env.REACT_APP_API_KEY,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
