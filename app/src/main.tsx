import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ProductList from './components/ProductList.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';



const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
});

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path:'/products',
      element: <ProductList />,
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <RouterProvider router={router} />
        </ApolloProvider>
    </React.StrictMode>
)
