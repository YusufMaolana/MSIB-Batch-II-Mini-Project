import { ApolloClient, InMemoryCache } from '@apollo/client';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: 'https://glowing-tortoise-92.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      'ai6CMCP6sI2hGCuejTTjfYMBy21Zae99Lp3ElVYev7FeP7UphqO5PRtA2Z04zB7u',
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'wss://glowing-tortoise-92.hasura.app/v1/graphql',
    connectionParams: {
      headers: {
        'x-hasura-admin-secret':
          'ai6CMCP6sI2hGCuejTTjfYMBy21Zae99Lp3ElVYev7FeP7UphqO5PRtA2Z04zB7u',
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
