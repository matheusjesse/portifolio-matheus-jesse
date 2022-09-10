import React from 'react';
import FormContato from '../componentes/FormContato';
import Header from '../componentes/Header'
import ContatoContainer from '../styles/ContatoContainer';
import Footer from '../componentes/Footer'

function Contato() {
  return(
    <>
      <Header />
      <ContatoContainer>
        <FormContato />
      </ContatoContainer>
      <Footer />
    </>
  );
}

export default Contato;
