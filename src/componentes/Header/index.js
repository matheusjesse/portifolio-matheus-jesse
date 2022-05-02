import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from './style';

function Header() {
  return(
    <HeaderContainer>
      <div className='header-container'>
        <p className="title-head">MATHEUS</p>
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
      </div>           
    </HeaderContainer>
  );
}

export default Header;
