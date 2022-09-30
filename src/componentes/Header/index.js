import React from 'react';
import Icons from '../../componentes/Icons';
import HeaderContainer from './style';

function Header() {
  return(
    <HeaderContainer>
      <div className='header-container'>
        <p className="title-head">MATHEUS</p>
        <div className="links-section">
          <a
          href="https://www.linkedin.com/in/matheusjesse"
          target="_blank"
          rel="noopener noreferrer"
          >
            <section>
              <Icons.LinkedinWithCircle />    
              Linkedin
            </section>
          </a>
          <a
            href="https://github.com/matheusjesse" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <section>
              <Icons.Github />
              GitHub
            </section>
          </a>
        </div>         
      </div>           
    </HeaderContainer>
  );
}

export default Header;
