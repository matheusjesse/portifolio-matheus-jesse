import React from 'react';
import FooterContainer from './style';
import Icons from '../../componentes/Icons';

function Footer () {
  return (
    <FooterContainer>
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
        href="https://www.linkedin.com/in/matheusjesse" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <section>
          <Icons.Github />
          GitHub
        </section>
      </a>
    </FooterContainer>
  );
};

export default Footer;
