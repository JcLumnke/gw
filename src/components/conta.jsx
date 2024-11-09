import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**CSS */
import '../styles/conta.css';
import '../styles/header.css';
import '../styles/endereco.css';

/**Components */
import Header from './Header';
import Endereco from './endereco';
import AcessibilidadeModal from './AcessibilidadeModal';

/**Img */
import logo from '../assets/logo.png';
import fixedUserImage from '../assets/image-10.png';
import fixedWattsZap from '../assets/QIP-15.png';
import defaultProfilePic from '../assets/image-10.png';
import qipIcon from '../assets/QIP-16.png';
import downArrowIcon from '../assets/down-arrow.png'; 

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
      <Header />
      <h1 className="title">Conta</h1>
      <div className='content'>
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
        <Endereco />
        </div>
        <div className='buttonsForm'>
          <button className="back-button" onClick={handleGoBack}>Voltar</button>
          <button className="save-button" onClick={handleSave}>Salvar</button>
        </div>

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
