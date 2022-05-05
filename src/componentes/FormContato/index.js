import React from 'react';
import FormContatoContainer from './style';

function FormContato() {
  return(
    <FormContatoContainer>
      <h1>Menssagem</h1>
      <form action="POST" id="form-contato">
        <label htmlFor="name-input">
          <input 
            type="text"
            id="name-input"
            name="name-input"
            placeholder="Nome"
          />
        </label>
        <label htmlFor="email-input">
          <input 
            type="text"
            id="email-input"
            name="email-input"
            placeholder="E-Mail"
          />
        </label>        
      </form>
      <div className="menssagem-e-button">
        <label htmlFor="text-area-messagem">
          <textarea 
            name="text-area-messagem"
            id="text-area-messagem"
            form="form-contato"
            placeholder="Menssagem..."
          />                  
        </label>
        <button type="button">ENVIAR</button>
      </div>
    </FormContatoContainer>    
  );
}

export default FormContato;
