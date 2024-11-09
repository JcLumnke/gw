import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Cadastro from './cadastro';
import Conta from './conta';
import Contratado from './contratado';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/conta" element={<Conta />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/contratado" element={<Contratado />} /> {/* Rota para o componente Contratado */}
        <Route path="/" element={<Login />} /> {/* Redireciona para login */}
      </Routes>
    </div>
  </Router>
);
}

export default App;