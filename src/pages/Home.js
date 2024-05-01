import React from 'react';
import HomeContainer from '../styles/HomeContainer';
import CardMenu from '../componentes/CardMenu';
import EmailIcon from '../assets/emailIcon.svg';
import ProjectIcon from '../assets/projectIcon.svg';
import GitHubIcon from '../assets/githubIcon.svg';
import LinkedinIcon from '../assets/linkedinIcon.svg';
import ProfileIcon from '../assets/profileIcon.svg';
import {CardMenuSection} from '../styles/HomeContainer';
import { Link } from "react-router-dom";
import Vector from '../assets/Vector.svg';

function Home() {  

  return(
    <HomeContainer> 
      <h1 className="animate glow delay-Title"> Matheus Jessé</h1>
      <h2 className="animate glow delay-SubTitle">Desenvolvedor Web | UX/UI Designer</h2>
      <CardMenuSection>
        <a href="mailto:matheus_jesse@hotmail.com">
          <div className="animate glow delay-1">
            <CardMenu 
              image={EmailIcon}
              altText={"Uma seta inclinada para cima no lado direito"}
              hoverText={"Email"}
            />
          </div>
        </a>
        <Link to="/projetos">
          <div className="animate glow delay-2">
            <CardMenu
              image={ProjectIcon}
              altText={"Uma reguá e um lapis um do lado do outro"}
              hoverText={"Ver Projetos"}
            />
          </div>
        </Link>
        <a
        href="https://github.com/matheusjesse" 
        target="_blank" 
        rel="noopener noreferrer"
        >
          <div className="animate glow delay-3">
            <CardMenu
              image={GitHubIcon}
              altText={"Um circulo preto com a silhueta de um gato dentro"}
              hoverText={"GitHub"}
            />
          </div>
        </a>
        <a
        href="https://www.linkedin.com/in/matheusjesse"
        target="_blank"
        rel="noopener noreferrer"
        >
          <div className="animate glow delay-4">
            <CardMenu 
              className="linked"
              image={LinkedinIcon}
              altText={"A letra I e a letra N um do lado do outro"}
              hoverText={"Linkedin"}
            />
          </div>
        </a>
        <Link to="/about">
          <div className="animate glow delay-5">
            <CardMenu
              image={ProfileIcon}
              altText={"ilustração de um homem do peito até a cabeça "}
              hoverText={"Sobre"}
            />
          </div>
        </Link>
      </CardMenuSection>
      <hr />
      <div className='skill-section'>
        <h3>Habilidades</h3>
        <div className='skill-card-home'>
          <span>Front-End</span>
          <div className="skillImage">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=html,css,styledcomponents,js,react,ts,nextjs,vite,tailwind&theme=light&perline=6" alt='skill-icons'/>
          </a>
          </div>
          <p>html, css, styled-components, javascript, typescript, react, nextjs, vite, tailwind.</p>
        </div>
        <div className='skill-card-home'>
          <span>Back-End</span>
          <div className="skillImage">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=mysql,mongodb,postgres,express,nodejs,ts,sequelize&theme=light&perline=6" alt='skill-icons'/>
          </a>
          </div>
          <p>mysql, mongodb, postgres, sequelize, express, node, typescript.</p>
        </div>
        <div className='skill-card-home'>
          <span>Tecnologias</span>
          <div className="skillImage">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=vscode,postman,linux,git,github,figma,docker&theme=light&perline=6" alt='skill-icons'/>
          </a>
          </div>
          <p>visual studio code, postman, linux, git, github, figma, docker.</p>
        </div>
        <div className='skill-card-home'>
          <span>Habilidades que da para desenrolar</span>
          <div className="skillImage">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=py,cs&theme=light&perline=6" alt='skill-icons'/>
          </a>
          </div>
          <p>python, c#(sharp)</p>
        </div>        
      </div>
      
    </HomeContainer>
  );
}

export default Home;
