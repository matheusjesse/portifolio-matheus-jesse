import React from 'react';
import GitHub from '../../assets/github.svg';
import FooterContainer from './style';
import Icons from '../../componentes/Icons';

function Footer () {
  return (
    <FooterContainer>
      <a
        // arrumar os links
        href="www.linkedin.com/in/matheusjesse"
        target="_blank"
        rel="noopener"
      >
        <section>
          <Icons.LinkedinWithCircle />
          Linkedin
        </section>
      </a>
      <hr/>
      <a
        // arrumar os Links
        href="www.linkedin.com/in/matheusjesse" 
        target="_blank" 
        rel="noopener"
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
