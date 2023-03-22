import styled from 'styled-components';

export const AboutContainer = styled.div`   
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
  background-image: linear-gradient(to right bottom, #f3f4ef, #f0f1ec, #ecede9, #e9eae6, #e6e7e3);
   
  .imageContainer {
    img {
      width: 388px;
      height: 418px;
      margin-left: 82px;
      @media only screen and (max-width: 1000px) {
        margin-left: 0px;
      }
      @media only screen and (max-width: 390px) {
        width: 308px;
        height: 338px;
      }

    }
  }

  .lineStyle {
    margin-top: 40px;
    margin-bottom: 24px;
    color: #131313;
    
      @media only screen and (min-width: 448px) {
        width: 428px;
      }
      @media only screen and (min-width: 836px) {
        width: 800px;
      }
      @media only screen and (min-width: 1000px) {
        width: 1000px;
      }
      @media only screen and (max-width: 447px) {
        width: 80%;
      }
      
  }

  .moreInfoSection {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
  }
`
export default AboutContainer;