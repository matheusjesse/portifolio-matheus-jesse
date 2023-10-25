import React from 'react';
import HeaderContainer from './style';
import { Link } from "react-router-dom";
const ProjectHeader = () => { 
  return(
    <div className='menuContainer'>
      <Link to="/home">
        <div className='titleTextLeft'>Início</div>
      </Link>
      <Link to="/about">
        <div className='titleTextRight'>Sobre</div>
      </Link>
    </div>
  )
}

const AboutHeader = () => { 
  return(
    <div className='menuContainer'>
        <Link to="/home">
          <div className='titleTextLeft'>Início</div>
        </Link>
        <Link to="/projetos">
          <div className='titleTextRight'>Projetos</div>
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
