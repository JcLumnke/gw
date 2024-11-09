import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/cadastro.css';
import logo from '../assets/logo.png';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    
    navigate('/login');
  };

  return (
    <div className="Tela-Cadastro">
      <img src={logo} alt="Logo GW" className="Logo" />
      <h2 className="cadastro">Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <div className="Nome">
          <input
            type="text"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="Email">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Insira um endereço de e-mail válido"
          />
        </div>
        <div className="Senha">
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <div className="btnCadastrar">
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
