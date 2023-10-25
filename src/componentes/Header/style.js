import styled from 'styled-components';

const HeaderContainer = styled.header`  
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 44px;
  height: 144px;
  position: fixed;
  top: 0;

  @media only screen and (max-width: 447px) {
    margin-right: 12px;
  }
  .menuContainer {
      display: flex;
      justify-content: space-around;
      width: 147px;
      height: 44px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 22px;   
      margin-right: 48px;   
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
      @media only screen and (max-width: 700px) {
      margin-right: 32px;
    }
  }

  a {
    text-decoration: none;
  }

  .titleTextLeft {
    display: flex;
    width: 74px;
    height: 44px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    font-family: 'Overpass', sans-serif;
    font-size: 22px;
    font-weight: 300;
    color: #FFF;    
    background-color: #0094FF; 
    border-radius: 22px 0 0px 22px ;    
    transition: box-shadow 0.5s;
    padding-left: 4px;
  }

  .titleTextLeft:hover {
    color: #FFF;
    cursor: pointer;
    box-shadow: -1px 0px 2px 0px rgba(0, 0, 0, 0.25) inset;
  }

  .titleTextRight {
    display: flex;
    width: 94px;
    height: 44px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    font-family: 'Overpass', sans-serif;
    font-size: 22px;
    font-weight: 300;
    color: #FFF;      
    background-color: #0094FF;     
    border-radius: 0 22px 22px 0 ;   
    transition: box-shadow 0.5s;
  }

  .titleTextRight:hover {
    color: #FFF;
    cursor: pointer;
    box-shadow: 1px 0px 2px 0px rgba(0, 0, 0, 0.25) inset;
  }

`;

export default HeaderContainer;
