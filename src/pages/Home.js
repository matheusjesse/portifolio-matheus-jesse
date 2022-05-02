import React from 'react';
import Header from '../componentes/Header';
import Icons from '../componentes/Icons';
import { HomeContainer } from '../styles/HomeContainer';
import Computer from '../assets/computerPerson.svg';

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
            <li><Icons.Javascript /></li>
            <li><Icons.ReactLogo /></li>
            <li><Icons.Html5 /></li>
            <li><Icons.Css3 /></li>
            <li><Icons.Styledcomponents /></li>
          </ul>
          <button type="button">VER PROJETOS</button>
        </div>
        <div className="section-right">
          <img 
            src={ Computer }
            alt="person sitting next to a computer"
          />
        </div>
      </div>
      </HomeContainer>
    </>
  );
}

export default Home;
