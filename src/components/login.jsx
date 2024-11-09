import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import logo from '../assets/logo.png';
import userIcon from '../assets/Graphic@3x.webp';

const Login = () => {  
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Botão entrar clicando!");
    
    navigate('/conta');
  };

  return (
    <div className="Tela-Login">
      <img src={logo} alt="GW Logo" className="Logo" />
      <img src={userIcon} alt="User Icon" className="UserIcon" />
      
      <div className="InputContainer">
        <label className="LoginLabel">Login</label>
        <input type="text" className="LoginInput" />
      </div>
      
      <div className="InputContainer">
        <label className="SenhaLabel">Senha</label>
        <input type="password" className="SenhaInput" />
      </div>
      
      <div className="ButtonContainer">
        <button className="CadastrarButton"onClick={() => navigate('/cadastro')}>Cadastrar</button>
        <button className="EntrarButton"onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
};

export default Login;
