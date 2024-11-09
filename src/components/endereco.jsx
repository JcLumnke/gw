import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const endereco = () => {

    return (
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
    )
}
export default endereco;