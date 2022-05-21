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
  }
  
  svg {
    width: 44px;
    height: 44px;
    margin-right: 8px;
  }

  hr {
    height: 50px;
    margin: 0px 25px 0px 25px;
    width: 2px;
  }
`;

export default FooterContainer;
