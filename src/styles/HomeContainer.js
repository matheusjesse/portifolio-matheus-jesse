import styled from 'styled-components';


export const HomeContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-image: linear-gradient(to right bottom, #f3f4ef, #f0f1ec, #ecede9, #e9eae6, #e6e7e3);
`;

const CardMenuSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;

`;
export default HomeContainer;
export { CardMenuSection };
