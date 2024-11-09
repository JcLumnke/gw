// src/components/Header.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import profileImage from '../assets/image-10.png';
import downArrowIcon from '../assets/down-arrow.png';
import qipIcon from '../assets/QIP-16.png'; // Certifique-se de ter a imagem correta ou o ícone desejado
import AcessibilidadeModal from './AcessibilidadeModal';
import '../styles/header.css'; // Criar um CSS específico para o cabeçalho

const Header = () => {
  const navigate = useNavigate();

  // Estados para controlar o modal de acessibilidade e o submenu
  const [isAcessibilidadeOpen, setAcessibilidadeOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

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
    <header className="header">
      <img src={logo} alt="Logo" className="logo" onClick={() => navigate('/home')} />
      <nav className="nav-menu">
        <button onClick={() => navigate('/servicos')}>Serviços</button>
        <button onClick={() => navigate('/forum')}>Fórum</button>
        <button onClick={() => navigate('/loja')}>Loja</button>
        <button onClick={() => navigate('/cadastro')}>Cadastro</button>
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar" />
          <span className="search-icon">🔍</span>
        </div>
      </nav>

      {/* Substituído o texto por um ícone de acessibilidade */}
      <button onClick={toggleAcessibilidadeModal} className="accessibility-button">
        <img src={qipIcon} alt="Acessibilidade" className="accessibility-icon" />
      </button>

      
      <button onClick={() => navigate('/conta')} className="profile-button">
        <img src={profileImage} alt="Perfil" className="profile-image" />
      </button>

      {/* Modal de Acessibilidade */}
      {isAcessibilidadeOpen && <AcessibilidadeModal onClose={toggleAcessibilidadeModal} />}

      {/* Botão para abrir o submenu */}
      <img
        src={downArrowIcon}
        alt="Submenu"
        className="submenu-icon"
        onClick={toggleSubMenu}
      />

      {/* Submenu Condicional */}
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
    </header>
  );
};

export default Header;
