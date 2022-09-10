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
      <div className="skillSection">
        <div className="skillCard">
          <div className="skillCardIcon" onClick={() => setSkillCard("react")}>
            <Icons.ReactLogo />
            React
          </div>
        </div>
        <div className="skillCard">
          <div className="skillCardIcon" onClick={() => setSkillCard("javascript")}>
          <Icons.Javascript />
            JavaScript
          </div>
        </div>
        <div className="skillCard">
          <div className="skillCardIcon" onClick={() => setSkillCard("html")}>
          <Icons.Html5 />
            HTML
          </div>
        </div>
        <hr />
        <div className="skillCard">
          <div className="skillCardIcon" onClick={() => setSkillCard("css")}>
          <Icons.Css3 />
           <p> CSS </p>
          </div>
        </div>
        <div className="skillCard">
          <div className="skillCardIcon" onClick={() => setSkillCard("styledcomponents")}>
          <Icons.Styledcomponents />
            Styled
            Components
          </div>
        </div>
        <div className="skillCard">
          <div className="skillCardIcon" onClick={() => setSkillCard("git")}>
          <Icons.Git />
           <p> Git </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2>Clique nos icones de skill para ler uma breve descrição!</h2>
      <p>{skillText}</p>
      </HomeContainer>      
      <Footer />
    </>
  );
}

export default Home;
