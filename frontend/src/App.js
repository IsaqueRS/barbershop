import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import UserWelcome from './components/user';

const users = {
  "users": [
    {
      "id": 1,
      "nome": "João",
      "nome_barbearia": "Barbearia do João"
    },
    {
      "id": 2,
      "nome": "Maria",
      "nome_barbearia": "Barbearia da Maria"
    },
    {
      "id": 3,
      "nome": "Pedro",
      "nome_barbearia": "Barbearia do Pedro"
    },
    {
      "id": 4,
      "nome": "Ana",
      "nome_barbearia": "Barbearia da Ana"
    },
    {
      "id": 5,
      "nome": "Lucas",
      "nome_barbearia": "Barbearia do Lucas"
    },
    {
      "id": 6,
      "nome": "Julia",
      "nome_barbearia": "Barbearia da Julia"
    },
    {
      "id": 7,
      "nome": "Fernando",
      "nome_barbearia": "Barbearia do Fernando"
    },
    {
      "id": 8,
      "nome": "Mariana",
      "nome_barbearia": "Barbearia da Mariana"
    },
    {
      "id": 9,
      "nome": "Ricardo",
      "nome_barbearia": "Barbearia do Ricardo"
    },
    {
      "id": 10,
      "nome": "Carla",
      "nome_barbearia": "Barbearia da Carla"
    }
  ]
};


function App() {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#282c34',
    color: '#fff',
  };

  const labelStyles = {
    marginBottom: '10px',
    fontWeight: 'bold'
  };

  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {users.users.map(user => (
           <Route key={user.id} path={`/${user.id}`} element={<UserWelcome user={user} />} >
           </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;