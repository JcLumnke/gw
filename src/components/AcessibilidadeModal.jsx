import React from 'react';
import '../styles/conta.css';

const AcessibilidadeModal = ({ onClose }) => {
  const settings = [
    'Aumentar contraste',
    'Leitor de tela',
    'Navegação por teclado',
    'Aumentar tamanho da letra',
    'Transcrição de áudio',
    'Transcrição em libras',
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="ACESSIBILIDADE">ACESSIBILIDADE</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          {settings.map((setting, index) => (
            <div className="setting-row" key={index}>
              <div className="setting-buttons">
                <div className="Pill">ON</div>
                <div className="Pill off">OFF</div>
              </div>
              <span className="setting-label">{setting}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcessibilidadeModal;
