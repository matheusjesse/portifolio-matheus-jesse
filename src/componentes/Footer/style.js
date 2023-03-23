import styled from 'styled-components';
// background-color:  #F5F5F5;
const FooterContainer = styled.footer`  
  height: 140px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  img {
    width: 60px;
    height: 60px;    
  }

  a {    
    color:  #031014;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 16px;
  }

  section {
    width: 88px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  
  
  svg {
    width: 52px;
    height: 52px;
    fill: #131313;
  }
  section:hover,
  section: hover svg{    
    fill: #0094FF;
  }


  

`;

export default FooterContainer;
