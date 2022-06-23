import React from 'react';
import Header from '../componentes/Header';
import Icons from '../componentes/Icons';
import { Link } from 'react-router-dom';
import { HomeContainer } from '../styles/HomeContainer';
import Computer from '../assets/computer-react.svg';
import Footer from '../componentes/Footer';

function Home() {  
  return(
    <>
      <Header />
      <HomeContainer>      
      <div className="contato-body">
        <div className="section-left">
          <h1>Bem vindo,</h1>
          <p>meu nome é Matheus Jessé, sempre fui fascinado na área de 
            tecnologia, atualmente estou estudando na Trybe e embreve me 
            formarei como web developer fullStack.
          </p>
          <Link to="/projetos">
            <button type="button">VER PROJETOS</button>
          </Link>
        </div>
        <div className="section-right">
          <img 
            src={ Computer }
            alt="person sitting next to a computer"
          />
        </div>
      </div>      
      <h1 className="skillTitle">Skills</h1>
      <div className="skillSection">
        <div className="skillCard">
          <div className="skillCardIcon">
            <Icons.ReactLogo />
            React
          </div>
          <div className="skillCardText">O React é uma biblioteca JavaScript declarativa, eficiente e 
          flexível para criar interfaces com o usuário.</div>
        </div>
        <div className="skillCard">
          <div className="skillCardIcon">
          <Icons.Javascript />
            JavaScript
          </div>
          <div className="skillCardText">O JavaScript (JS) é a linguagem de programação que permite criarmos 
          páginas web cada vez mais dinâmicas e interativas.
          </div>
        </div>
        <div className="skillCard">
          <div className="skillCardIcon">
          <Icons.Html5 />
            HTML
          </div>
          <div className="skillCardText">O HTML é uma linguagem de marcação utilizada junto a outras tecnologias
          para desenvolvimento de sites.
          </div>
        </div>
        <hr />
        <div className="skillCard">
          <div className="skillCardIcon">
          <Icons.Css3 />
           <p> CSS </p>
          </div>
          <div className="skillCardText">CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em 
          uma linguagem de marcação como HTML.
          </div>
        </div>
        <div className="skillCard">
          <div className="skillCardIcon">
          <Icons.Styledcomponents />
            Styled
            Components
          </div>
          <div className="skillCardText">styled-components é uma biblioteca para React e React Native que 
              permite que você use estilos ao nível de componente na sua aplicação.
          </div>
        </div>
        <div className="skillCard">
          <div className="skillCardIcon">
          <Icons.Git />
           <p> Git </p>
          </div>
          <div className="skillCardText"> um sistema de controle de versão de arquivos. Através deles podemos 
          desenvolver projetos na qual diversas pessoas podem contribuir simultaneamente.
          </div>
        </div>
      </div>
      </HomeContainer>      
      <Footer />
    </>
  );
}

export default Home;
