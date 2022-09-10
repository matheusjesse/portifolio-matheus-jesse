import styled from 'styled-components';
// background-color:  #F5F5F5;
const FooterContainer = styled.footer`  
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px -1px white;

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
    font-size: 20px;
  }

  section {
    width: 134px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  svg {
    width: 72px;
    height: 72px;
  }

  section:hover,
  section: hover svg{    
    color: #08C8A4;
    fill: #08C8A4;
  }

`;

export default FooterContainer;
