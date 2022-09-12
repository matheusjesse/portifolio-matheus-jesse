import React from 'react';
import ExplorerPageTrybeTunes from '../../assets/teladeExplorarTrybeTynes.png';
import DemoCarouselContainer from './style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import LoginPageTrybeTunes from '../../assets/teladeLoginTrybeTunes.png';
import TodoApi from '../../assets/todoapi.jpg';
import Programming from '../../assets/programming.jpg';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    
    <Slider { ...settings }>
      <DemoCarouselContainer>
      <div className="projetoCard" >
        <div className="projetoImage">
          <img
            src={LoginPageTrybeTunes} 
            alt="tela de login projeto TrybeTunes"
          >
          </img>
          <img
            src={ExplorerPageTrybeTunes} 
            alt="tela de explorar TryneTunes"
          >
          </img>
        </div>
          <div className="projetoDesc">
            <h1>Projeto TrybeTunes</h1>
            <h2>Tecnologias Usadas</h2>
              <ul>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>React</li>
                <li>StyledComponents</li>                
              </ul>
              <h3> Descrição </h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;A proposta do projeto foi 
                desenvolver o front-end de uma aplicação
                 web utilizando o end-point de uma API que retorna músicas 
                 e albums de cantores famosos.</p>
                 <a
                    href="https://github.com/matheusjesse/projeto-trybetunes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  > Veja no GuitHub </a>
          </div>
      </div>
      </DemoCarouselContainer>
      <DemoCarouselContainer>
      <div className="projetoCard" >
        <div className="projetoImage">
          <div></div>
          <img
            className="imageTodo"
            src={TodoApi} 
            alt="tela de explorar TryneTunes"
          >
          </img>
        </div>
          <div className="projetoDesc">
            <h1>API de ToDos</h1>
            <h2>Tecnologias Usadas</h2>
              <ul>
                <li>TypeScript</li>
                <li>NodeJs</li>
                <li>Express</li>
                <li>Test de Integração (mocha, chai, sinon)</li>
                <li>Sequelize(db: MySQL)</li>
                <li>Biblioteca Joi</li>
                <li>Biblioteca Jsonwebtoken</li>
              </ul>
              <h3> Descrição </h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;A proposta do projeto foi 
                desenvolver uma API para gerenciar um aplicativo de afazeres,
                afim de praticar as tecnologias listadas a cima.</p>
                 <a
                    href="https://github.com/matheusjesse/todo-api" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  > Veja no GuitHub </a>
          </div>
      </div>
      </DemoCarouselContainer>
      <DemoCarouselContainer>
      <div className="projetoCard" >
        <div className="projetoImage">
          <img
            className="programingImage"
            src={Programming} 
            alt="tela de explorar TryneTunes"
          >
          </img>
        </div>
          <div className="projetoDesc">
            <h1>Veja outros projetos</h1>
            <h3> GitHub </h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Você pode acompanhar outros projetos
                e saber no que estou trabalhando pelo meu GitHub.</p>
                <br></br>
                <br></br>
                <a
                  href="https://github.com/matheusjesse"
                  target="_blank" 
                  rel="noopener noreferrer"
                > Veja meu GitHub </a>
          </div>
      </div>
      </DemoCarouselContainer>
    </Slider>    
  );

}

export default Carousel;

