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

  .links-section {
    width:  280px;
    height: 60px;
    display: flex;  
    font-size: 20px;  
    border-radius: 40px;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    box-shadow: 1px 1px 8px 1px black;
  }

  .links-section section {
    width: 112px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .links-section section svg {
    width: 22px;
    margin-right: 4px;
  }
  
  
  .links-section section:hover,
  section: hover svg{    
    color: #08C8A4;
    fill: #08C8A4;
  }

    
`;

export default HeaderContainer;
