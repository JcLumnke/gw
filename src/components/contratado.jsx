// src/components/Contratado.jsx
import React, { useState } from 'react';
import Header from './Header'; // Importar o cabeçalho
import '../styles/contratado.css';
import image7 from '../assets/image-7.png';
import QIP16 from '../assets/QIP-16.png';
import image100 from '../assets/image-100.png';
import QIP1 from '../assets/QIP-1.png';
import QIP2 from '../assets/QIP-2.png';
import QIP15 from '../assets/QIP-15.png';
import '../styles/header.css';

const Contratado = () => {
  const [descricao, setDescricao] = useState(
    'Francisco é um jardineiro experiente e apaixonado pela natureza...'
  );
  const [comentarios, setComentarios] = useState([
    { id: 1, nome: 'Juninho', texto: 'Amores, nada como um jardim bem cuidado...' }
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleSave = () => {
    setIsEditing(false);
    // Lógica para salvar alterações no backend
  };

  const handleDelete = () => {
    alert('Perfil excluído.');
    // Lógica para excluir o perfil
  };

  const addComment = () => {
    if (newComment.trim()) {
      setComentarios([...comentarios, { id: Date.now(), nome: 'Usuário', texto: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div className="contratado">
      {/* Cabeçalho */}
      <Header /> {/* Incluindo o cabeçalho reutilizável */}

      {/* Conteúdo principal */}
      <header className="header">
        <h1>Perfil do Profissional</h1>
      </header>
      <div className="perfil">
        <span className="Francisco">Francisco</span>
        {isEditing ? (
          <textarea
            className="Paragraph"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        ) : (
          <span className="Paragraph">{descricao}</span>
        )}
        <img src={image7} alt="Perfil" className="image-7" />

        <div className="avaliacao">
          <img src={QIP16} alt="Avaliação" className="QIP-16" />
        </div>

        <span className="Redes-Sociais">Redes Sociais</span>
        <div className="redes-sociais-icons">
          {/* Ícones das redes sociais */}
        </div>

        <button className="-Button---Primary">
          <span className="Entrar-em-contato">Entrar em Contato</span>
        </button>

        <img src={QIP15} alt="WhatsApp" className="QIP-15" />
      </div>

      <div className="comentarios">
        <span className="Comentrios">Comentários</span>
        {comentarios.map((comentario) => (
          <div key={comentario.id} className="comentario">
            <img src={image100} alt="Usuário" className="image-100" />
            <span className="comment-text">{comentario.texto}</span>
            <img src={QIP1} alt="Joinha" className="QIP-1" />
            <img src={QIP2} alt="Joinha" className="QIP-2" />
          </div>
        ))}
        <div className="add-comment">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Escreva um comentário..."
          />
          <button onClick={addComment}>Comentar</button>
        </div>
      </div>

      <div className="acoes">
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Salvar' : 'Editar Perfil'}
        </button>
        <button onClick={handleDelete}>Apagar Perfil</button>
        <button onClick={() => alert('Voltando para a página de login')}>Voltar</button>
      </div>
    </div>
  );
};

export default Contratado;
