import styled from 'styled-components';

const HeaderContainer = styled.header` 
  background-color: #031014;  

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
    list-style: none;
    margin-right: 18px;
    font-size: 20px;
  }
    
`;

export default HeaderContainer;
