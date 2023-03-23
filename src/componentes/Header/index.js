import React from 'react';
import HeaderContainer from './style';
import { Link } from "react-router-dom";
const ProjectHeader = () => { 
  return(
    <div className='menuContainer'>
      <Link to="/home">
        <div className='titleText'>Início</div>
      </Link>
      <Link to="/about">
        <div className='titleText'>Sobre</div>
      </Link>
    </div>
  )
}

const AboutHeader = () => { 
  return(
    <div className='menuContainer'>
        <Link to="/home">
          <div className='titleText'>Início</div>
        </Link>
        <Link to="/projetos">
          <div className='titleText'>Projetos</div>
        </Link>
    </div>
  )
}

function Header({title}) {
  return(
    <HeaderContainer>
        {
          title === "projetos" ? <ProjectHeader /> : <AboutHeader />
        }
    </HeaderContainer>
  );
}

export default Header;
