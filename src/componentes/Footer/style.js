import styled from 'styled-components';
// background-color:  #F5F5F5;
const FooterContainer = styled.footer`  
  height: 80px;
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
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 32px;
  }
  
  svg {
    width: 44px;
    height: 44px;
    margin-right: 8px;
  }

  section:hover,
  section: hover svg{    
    color: #08C8A4;
    fill: #08C8A4;
  }

`;

export default FooterContainer;
