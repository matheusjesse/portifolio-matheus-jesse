import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <>
      <h1 className="title-head">Matheus</h1>
      <li>
        <Link to="/home">
          <ul>HOME</ul>
        </Link>
        <Link to="/projetos">
          <ul>PROJETOS</ul>
        </Link>
        <Link to="/contato">
          <ul>CONTATO</ul>
        </Link>
      </li>
    </>
  );
}

export default Header;
