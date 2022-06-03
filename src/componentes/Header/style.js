import styled from 'styled-components';

const HeaderContainer = styled.header`  

  .header-container {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #001319;
    box-shadow: 0px 0px 2px -1px white;
  }

  p{
    margin-left: 20px;
    font-size: 40px;
    font-family: 'Alef', sans-serif;
  }

  a {
    text-decoration: none;
  }
  ul {
    display: flex;
  }

  li {    
    height: 30px;
    list-style: none;
    margin-right: 18px;
    font-size: 20px;
  }  

  li:hover {
    box-shadow: 0 4px 2px -3px #08C8A4;
  }  
    
`;

export default HeaderContainer;
