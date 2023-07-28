import styled from 'styled-components';


export const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
  background-image: linear-gradient(to right bottom, #f3f4ef, #f0f1ec, #ecede9, #e9eae6, #e6e7e3);
   
  a {
    text-decoration: none;
  }
  
  h1 {
    color: #131313;
    width: 100%;
    height: 80px;
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: 54px;
    margin-top: 188px;
  }

  h2 {
    width: 100%;
    color: #131313;
    height: 40px;
    text-align: center;
    margin-top: -10px;
    margin-left: -20px;
    font-family: 'Overpass', sans-serif;
    font-weight: 300;
    font-size: 18px;
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
      filter: brightness(3) saturate(3);
      transform: scale(0.8, 0.8);
    }
    100% {
      opacity: 1;
      filter: brightness(1) saturate(1);
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

  .delay-Title {
    animation-delay: 0.4s;
  }

  .delay-SubTitle {
    animation-delay: 0.4s;
  }

  @media only screen and (max-width: 400px) {
    h1 {    
    margin-top: 48px;
  }
  }
`;

const CardMenuSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 144px;
  margin-bottom: 144px;
  align-content: space-around;

  @media only screen and (max-width: 400px) {
    margin-top: 10px;
    margin-bottom: 108px;
  }

`;


export default HomeContainer;
export { CardMenuSection };
