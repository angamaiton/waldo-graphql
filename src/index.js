import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

// import store from './store';

import App from './components/App';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://core-graphql.dev.waldo.photos/pizza' }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);

