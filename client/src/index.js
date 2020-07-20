import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


//connects my  apolloclient instance with my graphQL api
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})
//instantiate apolloclient, pass in httpLink and a new instance of inMemoryCache
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

//wrap App, pass in client
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)