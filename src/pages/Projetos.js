import React from 'react';
import Header from '../componentes/Header'
import ProjetoContainer from '../styles/ProjetoContainer';
import Carousel from '../componentes/DemoCarousel';

function Projetos() {
  return(
    <>
      <Header />
      <ProjetoContainer>
        <h1>Projetos</h1>
        <div className="projetoSection">
          <Carousel />
        </div>
      </ProjetoContainer>
    </>
  );
}

export default Projetos;
