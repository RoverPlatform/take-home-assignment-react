import { useState } from 'react'
import './App.css'
import { useQuery, gql } from '@apollo/client';


const GET_PRODUCTS = gql`
  query GetProducts {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const GET_USERS = gql`
  query GetUsers {
    locations {
      id
      name
      description
      photo
    }
  }
`;
function App() {
    const [logIn, setLogIn] = useState(false)
    const openLogin = () => {
        setLogIn(!logIn);
    }
    return (
        <>
            <h1>Home Page</h1>
            <div className="card">
                <button onClick={openLogin}>Login</button>
            </div>
            <p className="read-the-docs">Sign in to view product list</p>
        </>
    )
}

export default App
