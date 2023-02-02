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
          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;meu nome é Matheus Jessé, sou desenvolvedor web júnior, apaixonado por transformar ideias em realidade através da tecnologia. Sempre busco novos desafios e oportunidades de aprendizado para melhorar minhas habilidades.</p>
          <p>&emsp;&emsp;No front-end, tenho experiência com React, JavaScript, CSS, HTML, styledComponents, Redux e Next.js, o que me permite criar interfaces atrativas e intuitivas para o usuário. No back-end, trabalho com Node.js, Express, Sequelize, API REST, MySQL e MongoDB para oferecer soluções eficientes e escaláveis. Além disso, tenho conhecimento com TypeScript, o que me permite escrever código de alta qualidade e fácil manutenção.</p>
          <p>&emsp;&emsp;Sou uma pessoa colaborativa e gosto de trabalhar em equipe. Utilizo ferramentas como Git e Github para garantir a integridade do código e a colaboração com a equipe. Tenho conhecimentos com Docker, testes unitários e testes de integração, o que me permite garantir a qualidade e confiabilidade das soluções desenvolvidas. Adoto também tecnologias ágeis, como Scrum e Kanban, para garantir a entrega eficiente de projetos.</p>
          <p>&emsp;&emsp;Estou animado para contribuir com minhas habilidades e conhecimentos em projetos desafiadores. Acredito em entregar soluções de alta qualidade e continuar me desenvolvendo como desenvolvedor web. Quero fazer a diferença, tornando ideias realidade.</p>          
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
