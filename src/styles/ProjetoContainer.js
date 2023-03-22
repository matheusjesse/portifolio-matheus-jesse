import styled from 'styled-components';


export const ProjetoContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
  background-image: linear-gradient(to right bottom, #f3f4ef, #f0f1ec, #ecede9, #e9eae6, #e6e7e3);
   
  .titleProject {
    width: 100%;
    text-align: center;
    font-family: 'Overpass', sans-serif;
    font-size: 54px;
    font-weight: 300;
    color: #131313;
  }

  .projectMenu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 58px;    
  }

  .menuProjectWeb {
    margin-right: 68px;
    height: 24px;
    font-size: 22px;
    font-family: 'Overpass', sans-serif;
    color: #131313;
    @media only screen and (max-width: 568px) {
      margin-right: 0px;
    }
    @media only screen and (max-width: 400px) {
      margin-right: 10px;
      font-size: 18px;
    }
  }

  .menuProjectWeb:hover {
    cursor: pointer;
  }

  .menuProjextUX {
    margin-left: 68px;
    font-size: 22px;
    height: 24px;
    font-family: 'Overpass', sans-serif;
    color: #131313;
    @media only screen and (max-width: 568px) {
      margin-right: 8px;
      margin-left: 48px;
    }
    @media only screen and (max-width: 400px) {
      margin-right: 0px;
      margin-left: 10px;
      font-size: 18px;

    }
  }

  .menuProjextUX:hover {
    cursor: pointer;
  }

  .projectSection {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin-top: 100px;
    @media only screen and (max-width: 1440px) {
      width: 90%;
      margin-top: 60px;
    }
  }

  .menuSelect {
    border-bottom: 2px solid #0094FF;
  }

  .uxProjectSection {
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default ProjetoContainer;
