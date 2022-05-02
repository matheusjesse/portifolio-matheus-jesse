import React from 'react';
import Linkedin from '../../assets/linkedin.svg';
import GitHub from '../../assets/github.svg';
import FooterContainer from './style';

function Footer () {
  return (
    <FooterContainer>
      <a
        // arrumar os links
        href="www.linkedin.com/in/matheusjesse"
        target="_blank"
        rel="noopener"
      >
        <img src={Linkedin} alt="Linkedin Icon" />
        Linkedin
      </a>
      <hr/>
      <a
        // arrumar os Links
        href="www.linkedin.com/in/matheusjesse" 
        target="_blank" 
        rel="noopener"
      >
        <img src={GitHub} alt="GitHub Icon" />
        GitHub
      </a>
    </FooterContainer>
  );
};

export default Footer;
