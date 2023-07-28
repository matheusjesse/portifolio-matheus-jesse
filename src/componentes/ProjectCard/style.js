import styled from 'styled-components';

const ProjectCardContainer = styled.div`

margin: 72px 14px 72px 14px;


@media only screen and (max-width: 1440px) {
    margin: 28px 12px 28px 12px;
  }

  @media only screen and (max-width: 400px) {
        margin: 18px 2px 18px 2px;
    }

.imageContainer {
    width: 360px;
    height: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    p {
        font-size: 24px;
        font-family: 'Overpass', sans-serif;
        margin-top: 23px;
        text-align: center;
        color: #131313;
    }
    @media only screen and (max-width: 400px) {
        width: 310px;
        height: 230px;
    }
}
.textCard {
    width: 360px;
    height: 148px;
    h1 {
        font-size: 28px;
        font-family: 'Overpass', sans-serif;
        font-weight: 500;
        color: #131313;
        @media only screen and (max-width: 400px) {
        width: 310px;
    }
    }
    p {
        font-size: 16px;
        font-family: 'Overpass', sans-serif;
        color: #393939;
        @media only screen and (max-width: 400px) {
        width: 310px;
    }
    }

    

    @media only screen and (max-width: 400px) {
        width: 310px;
        height: 230px;
    }
}
`;

export default ProjectCardContainer;