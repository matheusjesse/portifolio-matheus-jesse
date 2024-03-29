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
    </HomeContainer>
  );
}

export default Home;
