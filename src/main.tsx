import React from 'react' import ReactDOM from 'react-dom/client' import App from './App.tsx' import './index.css' import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
})
client.query({
    query: gql`
        query
        {
          user(id:"2"){
            nickname
          }
        }
    `
}).then(result => console.log(result))  ReactDOM.createRoot(document.getElementById('root')!).render(     <ApolloProvider client={client}>         <App></App>     </ApolloProvider>   //<React.StrictMode>   //  <App />   //</React.StrictMode>, ) 