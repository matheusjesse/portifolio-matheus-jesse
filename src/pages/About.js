import React from 'react';
import AboutContainer from '../styles/AboutContainer';
import AboutDescription from '../componentes/AboutDescription';
import AboutImageSvg from '../assets/AboutImage.svg';
import WebSkillsSection from '../componentes/WebSkillsSection';
import UxSkillSection from '../componentes/UxSkillsSection';
import AchievementsSection from '../componentes/AchievementsSection';
import Footer from '../componentes/Footer';
import Header from '../componentes/Header';
import {skillsWeb, skillsUx, achievements} from '../utils/AboutUtils';

function About() {
  return(
    <AboutContainer>
      <Header title="about"/>
      <AboutDescription />
      <div className="imageContainer">
        <img src={AboutImageSvg} alt="Uma ilustração de uma tela de computador, com um gatinho em cima da tela, uma ilustração de um celular com notificação, uma ilustração de uma folha de anotação com um lapis e duas ilustrações de uma tela de computador com codigo de programação" />
      </div>
      <hr style={{width: "100%", visibility: "hidden"}} />
      <hr className='lineStyle' />
      <hr style={{width: "100%", visibility: "hidden"}} />
      <div className='moreInfoSection'>
        <WebSkillsSection data={skillsWeb}/>
        <UxSkillSection data={skillsUx} />
        <AchievementsSection data={achievements}/>
      </div>
      <hr style={{width: "100%", visibility: "hidden"}} />
      <Footer />
    </AboutContainer>
  );
}

export default About;
