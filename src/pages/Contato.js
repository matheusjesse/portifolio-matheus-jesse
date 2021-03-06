import React from 'react';
import FormContato from '../componentes/FormContato';
import Header from '../componentes/Header'
import ContatoContainer from '../styles/ContatoContainer';

function Contato() {
  return(
    <>
      <Header />
      <hr />
      <ContatoContainer>
        <FormContato />
      </ContatoContainer>
    </>
  );
}

export default Contato;
