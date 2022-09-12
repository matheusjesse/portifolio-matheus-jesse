import styled from 'styled-components';

const HeaderContainer = styled.header`  

  .header-container {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 68px 0px 68px;
    
  }

  p{
    margin-left: 20px;
    font-size: 40px;
    font-family: 'Alef', sans-serif;
    width: 260px;
    height: 60px;
    border-radius: 40px;
    padding-top: 4px;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    box-shadow: 1px 1px 8px 1px black;
    
  }

  a {
    text-decoration: none;
  }
  ul {
    display: flex;
    width: 400px;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 60px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    padding-left: 18px;
    box-shadow: 1px 1px 8px 1px black;
    
  }

  li {    
    height: 30px;
    list-style: none;
    margin-right: 18px;
    font-size: 20px;
    text-align: center;
  }  

  li:hover {
    box-shadow: 0 3px 1px -2px #08C8A4;
  }  
    
`;

export default HeaderContainer;
