import styled from 'styled-components';

const HeaderContainer = styled.header`  
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 44px;
  height: 144px;

  @media only screen and (max-width: 447px) {
    margin-right: 0px;
  }
  .menuContainer {
      display: flex;
      width: 164px;
      justify-content: space-around;
  }

  a {
    text-decoration: none;
  }

  .titleText {
    height: 24px;
    font-family: 'Overpass', sans-serif;
    font-size: 22px;
    font-weight: 300;
    color: #131313;
    border-bottom: 1px solid #131313;
  }

  .titleText:hover {
    color: #0094FF;
    border-bottom: 1px solid #0094FF;
    cursor: pointer;
  }

`;

export default HeaderContainer;
