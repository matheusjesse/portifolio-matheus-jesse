import React from 'react';
import FormContato from '../componentes/FormContato';
import ContatoContainer from '../styles/ContatoContainer';

function Contato() {
  return(
    <>    
      <h1 style={ { textAlign:'center' } }>Contato</h1>
      <ContatoContainer>
        <FormContato />
      </ContatoContainer>
    </>
  );
}

export default Contato;
