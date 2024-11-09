import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/conta.css';
import '../styles/header.css';
import logo from '../assets/logo.png';
import fixedUserImage from '../assets/image-10.png';
import fixedWattsZap from '../assets/QIP-15.png';
import defaultProfilePic from '../assets/image-10.png';
import qipIcon from '../assets/QIP-16.png';
import downArrowIcon from '../assets/down-arrow.png'; 
import AcessibilidadeModal from './AcessibilidadeModal';  

const Conta = () => {
  const [profilePic, setProfilePic] = useState(defaultProfilePic);
  const [isAcessibilidadeOpen, setAcessibilidadeOpen] = useState(false);  
  const [isSubMenuOpen, setSubMenuOpen] = useState(false); 
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/inicio');
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    alert('Dados salvos com sucesso!');
  };

  const handleGoBack = () => {
    navigate('/login');
  };

  const toggleAcessibilidadeModal = () => {
    setAcessibilidadeOpen(!isAcessibilidadeOpen);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const handleSubMenuClick = (option) => {
    if (option === 'Conta') {
      navigate('/conta');
    } else if (option === 'Configurações') {
      // Navegar para a página de Configurações quando for implementada
      alert('Página de Configurações será implementada em breve.');
    } else if (option === 'Sair') {
      navigate('/login');
    }
    setSubMenuOpen(false);
  };

  return (
    <div className="tela-conta">
      <div className="header">
        <img src={logo} alt="GW Logo" className="logo" onClick={handleLogoClick} />
        <a className="menu-item">Serviços</a>
        <a className="menu-item">Fórum</a>
        <a className="menu-item">Loja</a>
        <a className="menu-item">Cadastro</a>
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar" />
          </div>
        <img src={fixedUserImage} alt="User" className="user-image" />
        <img src={downArrowIcon} alt="Submenu" className="submenu-icon" onClick={toggleSubMenu} />
      </div>
      
      <h1 className="title">Conta</h1>
      <div className="dados-pessoais">
        <h2 className="section-title">Dados Pessoais</h2>
        <div className="input-group">
          <label>Nome</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="input-group">
          <label>Fone</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>CPF</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Foto de perfil</label>
          <input type="file" onChange={handleProfilePicChange} />
        </div>
      </div>
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="endereco">
        <h2 className="section-title">Endereço</h2>
        <div className="input-group">
          <label>Rua</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>CEP</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>N°</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Estado</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Cidade</label>
          <input type="text" />
        </div>
      </div>
      <img src={fixedWattsZap} alt="WhatsApp" className="whatsapp-icon" />
      <button className="save-button" onClick={handleSave}>Salvar</button>
      <button className="back-button" onClick={handleGoBack}>Voltar</button>

      {isAcessibilidadeOpen && <AcessibilidadeModal onClose={toggleAcessibilidadeModal} />} {/* Condicional para abrir o modal */}

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

export default Conta;
