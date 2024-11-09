// src/components/Header.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import profileImage from '../assets/image-10.png';
import downArrowIcon from '../assets/down-arrow.png';
import qipIcon from '../assets/QIP-16.png'; // Certifique-se de ter a imagem correta ou o ícone desejado
import AcessibilidadeModal from './AcessibilidadeModal';
import '../styles/header.css'; // Criar um CSS específico para o cabeçalho
import fixedUserImage from '../assets/image-10.png';

const Header = () => {
  const navigate = useNavigate();

  // Estados para controlar o modal de acessibilidade e o submenu
  const [isAcessibilidadeOpen, setAcessibilidadeOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  

  const handleLogoClick = () => {
    navigate('/inicio');
  };

  // Funções para alternar a visibilidade do modal e do submenu
  const toggleAcessibilidadeModal = () => {
    setAcessibilidadeOpen(!isAcessibilidadeOpen);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const handleSubMenuClick = (option) => {
    // Fecha o submenu após a seleção
    setSubMenuOpen(false);

    // Redireciona ou executa uma ação com base na opção selecionada
    if (option === 'Conta') {
      navigate('/conta');
    } else if (option === 'Configurações') {
      navigate('/configuracoes');
    } else if (option === 'Sair') {
      console.log('Usuário saiu');
    }
  };

  return (
    <div className="header">
    <img src={logo} alt="GW Logo" className="logo" onClick={handleLogoClick} />
    <a className="menu-item">Serviços</a>
    <a className="menu-item">Fórum</a>
    <a className="menu-item">Loja</a>
    <a className="menu-item">Cadastro</a>
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar" />
      </div>
    <img src={fixedUserImage} alt="User" className="user-image" onClick={toggleSubMenu} />
    {isSubMenuOpen && (
        <div className="submenu">
          <div className="submenu-item" onClick={() => handleSubMenuClick('Conta')}>
            <span className="submenu-icon">👤</span> Conta
          </div>
          <div className="submenu-item" onClick={() => handleSubMenuClick('Configurações')}>
            <span className="submenu-icon">⚙️</span> Configurações
          </div>
          <div className="submenu-item" onClick={() => handleSubMenuClick('Sair')}>
            <span className="submenu-icon">🚪</span> Sair
          </div>
        </div>
      )}
  </div>

  
  );
};

export default Header;
