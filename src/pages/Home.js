import React, { useState } from 'react';
import Header from '../componentes/Header';
import Icons from '../componentes/Icons';
import { HomeContainer } from '../styles/HomeContainer';
import Computer from '../assets/computer-react.svg';
import Footer from '../componentes/Footer';
import { useEffect } from 'react';
import { text } from '../utils/HomeUtils'
import Projetos from './Projetos';
import Contato from './Contato';

function Home() {  

  const [skillCard, setSkillCard] = useState("");
  const [skillText, setSkillText] = useState("");
  
  useEffect(() => {    
    setSkillText(text[skillCard]);
  }, [skillCard]);

  useEffect(() => {
    setSkillCard("javascript");
  }, []);

  return(
    <>
      <Header />
      <HomeContainer>      
      <div className="contato-body">
        <div className="section-left">
          <h1>Olá,</h1>
          <p>meu nome é Matheus Jessé, sempre fui fascinado na área de 
            tecnologia, atualmente estou estudando na Trybe e embreve me 
            formarei como web developer fullStack.
          </p>
        </div>
        <div className="section-right">
          <img 
            src={ Computer }
            alt="person sitting next to a computer"
          />
        </div>
      </div>      
      <h1 className="skillTitle">Skills</h1>
      <div className="skillContainer">
        <div className="skillSection">
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("react")}>
              <Icons.ReactLogo id={skillCard === 'react' ? 'glow' : '' } />
              <p>React</p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("javascript")}>
            <Icons.Javascript id={skillCard === 'javascript' ? 'glow' : '' }/>
              <p>JavaScript</p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("html")}>
            <Icons.Html5 id={skillCard === 'html' ? 'glow' : '' }/>
              <p>HTML</p>
            </div>
          </div>
          <hr className="skillCardHr" />
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("css")}>
            <Icons.Css3 id={skillCard === 'css' ? 'glow' : '' }/>
            <p> CSS </p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("styledcomponents")}>
            <Icons.Styledcomponents id={skillCard === 'styledcomponents' ? 'glow' : '' }/>
              <p>Styled 
                Components</p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("git")}>
            <Icons.Git id={skillCard === 'git' ? 'glow' : '' }/>
            <p> Git </p>
            </div>
          </div>
          <hr className="skillCardHr" />
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("mysql")}>
            <Icons.Mysql id={skillCard === 'mysql' ? 'glow' : '' }/>
            <p> Mysql </p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("nodejs")}>
            <Icons.Nodejs id={skillCard === 'nodejs' ? 'glow' : '' }/>
            <p> NodeJs </p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("sequelize")}>
            <Icons.Sequelize id={skillCard === 'sequelize' ? 'glow' : '' }/>
            <p> Sequelize </p>
            </div>
          </div>
          <hr className="skillCardHr" />
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("jest")}>
            <Icons.Jest id={skillCard === 'jest' ? 'glow' : '' }/>
            <p> jest </p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("express")}>
            <Icons.Express id={skillCard === 'express' ? 'glow' : '' }/>
            <p> Express </p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("typescript")}>
            <Icons.Typescript id={skillCard === 'typescript' ? 'glow' : '' }/>
            <p> TypeScript </p>
            </div>
          </div>
        </div>
        <hr className="skillHr"></hr>
        <div className="descriptionSection">
          <h2>Clique nos icones de skill para ler uma breve descrição!</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{skillText}</p>          
        </div>
      </div>
      </HomeContainer>
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
}

export default Home;
