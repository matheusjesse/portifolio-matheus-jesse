import styled from 'styled-components';
// background-color:  #F5F5F5;
const FooterContainer = styled.footer`  
  height: 140px;
  display: flex;
  width: 100%;
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

  section svg {
    fill: #131313;
    width: 82px;
  }
  
  svg {
    width: 52px;
    height: 52px;
  }

  section:hover,
  section: hover svg{    
    color: #5987E1;
    fill: #5987E1;
  }

`;

export default FooterContainer;
