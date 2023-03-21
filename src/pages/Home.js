import React from 'react';
import HomeContainer from '../styles/HomeContainer';
import CardMenu from '../componentes/CardMenu';
import EmailIcon from '../assets/emailIcon.svg';
import ProjectIcon from '../assets/projectIcon.svg';
import GitHubIcon from '../assets/githubIcon.svg';
import LinkedinIcon from '../assets/linkedinIcon.svg';
import ProfileIcon from '../assets/profileIcon.svg';
import {CardMenuSection} from '../styles/HomeContainer';
function Home() {  

  return(
    <HomeContainer>
      <h1>Matheus Jessé</h1>
      <h2>Desenvolvedor Web</h2>
      <CardMenuSection>
        <CardMenu 
          image={EmailIcon}
          altText={"Uma seta inclinada para cima no lado direito"}
          hoverText={"Email"}
        />
        <CardMenu
          image={ProjectIcon}
          altText={"Uma reguá e um lapis um do lado do outro"}
          hoverText={"Ver Projetos"}
        />
        <CardMenu
          image={GitHubIcon}
          altText={"Um circulo preto com a silhueta de um gato dentro"}
          hoverText={"GitHub"}
        />
        <CardMenu
          image={LinkedinIcon}
          altText={"A letra I e a letra N um do lado do outro"}
          hoverText={"Linkedin"}
        />
        <CardMenu
          image={ProfileIcon}
          altText={"ilustração de um homem do peito até a cabeça "}
          hoverText={"Sobre"}
        />
      </CardMenuSection>
    </HomeContainer>
  );
}

export default Home;
