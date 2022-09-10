import styled from 'styled-components';


export const ProjetoContainer = styled.div`
  width: 100%;

  height: 76vh;
  h1 {
    text-align: center;
    margin-top: 142px;
  }

  .projetoSection {
    margin: 0 20px 0px 20px;
  }

  .slick-slide > div {
      display: grid;
      place-items: center;
      width: 660px;
      margin-top: 50px;
      margin: auto;
      height: 500px;
      padding: 0px;
  } 

  .slick-prev {
    left: 20% !important;
    z-index: 2;
  }
  .slick-next {
    right: 20% !important;
    z-index: 1;
  }

`;

export default ProjetoContainer;
