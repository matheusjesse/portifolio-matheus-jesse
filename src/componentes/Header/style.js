import styled from 'styled-components';

const HeaderContainer = styled.header`  
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #031014;
  
  a {
    
    text-decoration: none;
  }
  ul {
    display: flex;    
  }
  li {
    list-style: none;
    margin-right: 18px;
  }
`;

export default HeaderContainer;
