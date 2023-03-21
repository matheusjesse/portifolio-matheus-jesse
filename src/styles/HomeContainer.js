import styled from 'styled-components';


export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
  
  background-image: linear-gradient(to right bottom, #f3f4ef, #f0f1ec, #ecede9, #e9eae6, #e6e7e3);

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
    margin-left: -104px;
    font-family: 'Overpass', sans-serif;
    font-weight: 300;
  }
`;

const CardMenuSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 174px;
  align-content: space-around;

`;
export default HomeContainer;
export { CardMenuSection };
