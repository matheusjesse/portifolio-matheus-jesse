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
    border-bottom: 1px solid white;
    background-color: #001319;
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
    border-bottom: 2px solid #00476D;
  }
    
`;

export default HeaderContainer;
