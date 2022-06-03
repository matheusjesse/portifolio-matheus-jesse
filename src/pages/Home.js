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
          <h2>Tecnologias usada na construção desse portifólio:</h2>
          <ul>
            <li className="tooltip">
              <span className="tooltipText">
                JavaScript é uma linguagem de programação de alto nível criada, 
                a princípio, para ser executada em navegadores e manipular 
                comportamentos de páginas web.
              </span>
              <Icons.Javascript />
            </li>
            <li className="tooltip">
              <span className="tooltipText">
              O React é uma biblioteca JavaScript declarativa, eficiente e 
              flexível para criar interfaces com o usuário. Ele permite compor UIs 
              complexas a partir de pequenos e isolados códigos chamados “componentes”.
              </span>
              <Icons.ReactLogo />
            </li>
            <li className="tooltip">
              <span className="tooltipText">
                HTML é uma linguagem de marcação para desenvolver páginas e documentos 
                eletrônicos para a internet, fornecendo informações para usuários, 
                navegadores e mecanismos de busca.
              </span>
              <Icons.Html5 />
            </li>
            <li className="tooltip">
              <span className="tooltipText">
              CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo 
              em Cascatas. É uma maneira de dar estilo ao código criado por linguagens 
              como HTML, XML ou XHTML, por exemplo. De forma prática, ela funciona como 
              uma camada de personalização ao conteúdo visível.
              </span>
              <Icons.Css3 />
            </li>
            <li className="tooltip">
              <span className="tooltipText">
              styled-components é uma biblioteca para React e React Native que 
              permite que você use estilos ao nível de componente na sua aplicação. 
              Eles são escritos em uma mistura de JavaScript com CSS.
              </span>
              <Icons.Styledcomponents />
            </li>
          </ul>
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
      </HomeContainer>      
      <Footer />
    </>
  );
}

export default Home;
