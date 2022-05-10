import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://glowing-tortoise-92.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret':
      'ai6CMCP6sI2hGCuejTTjfYMBy21Zae99Lp3ElVYev7FeP7UphqO5PRtA2Z04zB7u',
  },
});

export default client;
