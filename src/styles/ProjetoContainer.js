import styled from 'styled-components';


export const ProjetoContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;
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
    width: 54%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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

  .animate {
    animation-duration: 0.75s;
    animation-delay: 0.5s;
    animation-name: animate-fade;
    animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
    animation-fill-mode: backwards;
  }
  
  /* Glow In */
  .animate.glow {
    animation-name: animate-glow;
    animation-timing-function: ease;
  }
  
  @keyframes animate-glow {
    0% {
      opacity: 0;
      transform: scale(0.8, 0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
  
  .delay-1 {
    animation-delay: 0.6s;
  }
  .delay-2 {
    animation-delay: 0.7s;
  }
  .delay-3 {
    animation-delay: 0.8s;
  }
  .delay-4 {
    animation-delay: 0.9s;
  }
  .delay-5 {
    animation-delay: 1s;
  }
`;

export default ProjetoContainer;
