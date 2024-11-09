import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Conta from './components/conta';
import Cadastro from './components/cadastro'; 

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/cadastro" element={<Cadastro />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
