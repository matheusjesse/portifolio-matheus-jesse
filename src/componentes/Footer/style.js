import styled from 'styled-components';

const FooterContainer = styled.footer` 
  background-color:  #F5F5F5;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    background-color:  #F5F5F5;
  }

  a {
    background-color:  #F5F5F5;
    color:  #031014;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
  }

  hr {
    height: 50px;
    margin: 0px 25px 0px 25px;
    width: 3px;
  }
`;

export default FooterContainer;
