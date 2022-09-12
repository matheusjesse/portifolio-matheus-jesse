import LoginPageTrybeTunes from '../../assets/teladeLoginTrybeTunes.png';
import ExplorerPageTrybeTunes from '../../assets/teladeExplorarTrybeTynes.png';
import DemoCarouselContainer from './style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';

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
            <h1>TESTE TESTE</h1>
              <p> Lorem lorem lorem lorem loram loream
                loram lormaw  dsadasd asd asdasdsadsad
                ad iwakm spdmapsmdaosdjkassad asdadsada
                asdsadasdasdasdasdasd.
              </p>
          </div>
      </div>
      </DemoCarouselContainer>
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
            <h1>TESTE TESTE</h1>
              <p> Lorem lorem lorem lorem loram loream
                loram lormaw  dsadasd asd asdasdsadsad
                ad iwakm spdmapsmdaosdjkassad asdadsada
                asdsadasdasdasdasdasd.
              </p>
          </div>
      </div>
      </DemoCarouselContainer>
    </Slider>    
  );

}

export default Carousel;

