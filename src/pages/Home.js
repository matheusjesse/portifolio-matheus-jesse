import React, { useState } from 'react';
import Header from '../componentes/Header';
import Icons from '../componentes/Icons';
import { Link } from 'react-router-dom';
import { HomeContainer } from '../styles/HomeContainer';
import Computer from '../assets/computer-react.svg';
import Footer from '../componentes/Footer';
import { useEffect } from 'react';
import { text } from '../utils/HomeUtils'

function Home() {  

  const [skillCard, setSkillCard] = useState("");
  const [skillText, setSkillText] = useState("");
  
  useEffect(() => {
    return setSkillText(text[skillCard]);
  }, [skillCard])

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
      <div className="skillContainer">
        <div className="skillSection">
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("react")}>
              <Icons.ReactLogo />
              <p>React</p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("javascript")}>
            <Icons.Javascript />
              <p>JavaScript</p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("html")}>
            <Icons.Html5 />
              <p>HTML</p>
            </div>
          </div>
          <hr className="skillCardHr" />
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("css")}>
            <Icons.Css3 />
            <p> CSS </p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("styledcomponents")}>
            <Icons.Styledcomponents />
              <p>Styled 
                Components</p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("git")}>
            <Icons.Git />
            <p> Git </p>
            </div>
          </div>
          <hr className="skillCardHr" />
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("mysql")}>
            <Icons.Mysql />
            <p> Mysql </p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("nodejs")}>
            <Icons.Nodejs />
            <p> NodeJs </p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("sequelize")}>
            <Icons.Sequelize />
            <p> Sequelize </p>
            </div>
          </div>
          <hr className="skillCardHr" />
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("jest")}>
            <Icons.Jest />
            <p> jest </p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("express")}>
            <Icons.Express />
            <p> Express </p>
            </div>
          </div>
          <div className="skillCard">
            <div className="skillCardIcon" onClick={() => setSkillCard("typescript")}>
            <Icons.Typescript />
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
      <Footer />
    </>
  );
}

export default Home;
