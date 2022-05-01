import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from './style';

function Header() {
  return(
    <HeaderContainer>
      <h1 className="title-head">Matheus</h1>
      <ul>
        <Link to="/home">
          <li>HOME</li>
        </Link>
        <Link to="/projetos">
          <li>PROJETOS</li>
        </Link>
        <Link to="/contato">
          <li>CONTATO</li>
        </Link>
      </ul>
    </HeaderContainer>
  );
}

export default Header;
