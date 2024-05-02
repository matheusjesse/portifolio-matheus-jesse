import styled from 'styled-components';


export const ProjetoContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;
  background: ${props => props.theme.colors.surfaceContainerLowest};
  
   padding-top: 144px;
  .titleProject {
    width: 100%;
    text-align: center;
    font-family: 'Tilt Neon', sans-serif;
    font-size: 74px;
    font-weight: 300;
    color: #737373;
  }

  .projectMenu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 58px;    
    gap: 32px;
    margin-right: 82px;
    @media only screen and (max-width: 854px) {
      
      margin-right: 0px;
    }
  }

  .menuProjectWeb {
    height: 42px;
    width: 232px;
    font-size: 20px;
    font-family: 'Overpass', sans-serif;
    text-align: center;
    color: ${props => props.theme.colors.onSurface};;  
    background-color: ${props => props.theme.colors.surfaceContainerLowest};;
    border: 1px solid ${props => props.theme.colors.outlineVariant};;
    padding-top: 9px;
    border-radius: 12px;
    transition: box-shadow 0.5s;
    @media only screen and (max-width: 568px) {
      margin-right: 0px;
      font-size: 20px;
    }
    @media only screen and (max-width: 400px) {
      margin-right: 10px;
      font-size: 18px;
      text-align: center;
      width: 202px;
      padding-top: 9px;
    }
    @media only screen and (max-width: 440px) {
      font-size: 14px;
      text-align: center;
      width: 167px;
      padding-top: 13px;
      padding-left: 4px;
    }
  }

  .menuProjectWeb:hover {
    cursor: pointer;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .menuProjextUX {
    font-size: 22px;
    height: 42px;
    width: 148px;
    padding-top: 9px;
    background-color: ${props => props.theme.colors.surfaceContainerLowest};
    border-radius: 12px;
    text-align: center;
    font-family: 'Overpass', sans-serif;
    color: ${props => props.theme.colors.onSurfaceVariant};  
    border: 1px solid ${props => props.theme.colors.outlineVariant};
    transition: box-shadow 0.5s;
    @media only screen and (max-width: 568px) {
      margin-right: 8px;
      margin-left: 48px;
    }
    @media only screen and (max-width: 400px) {
      margin-right: 0px;
      margin-left: 10px;
      font-size: 18px;
      text-align: center;
      width: 127px;
      padding-top: 9px;
      padding-left: 7px;
    }
    @media only screen and (max-width: 440px) {
      font-size: 14px;
      text-align: center;
      width: 127px;
      padding-top: 13px;
    }
  }

  .menuProjextUX:hover {
    cursor: pointer;
    box-shadow: 2px 3px 4px 0px rgba(0, 0, 0, 0.25);
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
    color: ${props => props.theme.colors.onSurfaceVariant};
    border: 1px solid ${props => props.theme.colors.tertiary};
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 500ms linear;
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
