import React from 'react';
import ProjetoContainer from '../styles/ProjetoContainer';
import Carousel from '../componentes/DemoCarousel';

function Projetos() {
  return(
    <>
      <ProjetoContainer>
        <h1 id="project-page">Projetos</h1>
        <div className="projetoSection">
          <Carousel />
        </div>
      </ProjetoContainer>
    </>
  );
}

export default Projetos;
