import styled from 'styled-components';

const AboutDescriptionContainer = styled.div`
    width: 448px;
    padding: 8px;
    margin-right: 82px;
    @media only screen and (max-width: 1000px) {
        margin-right: 0px;
    }
    .aboutTitle {
        font-family: 'Libre Franklin', sans-serif;
        font-size: 60px;
        color: #5987E1;
    }

    .subTitle {
        font-family: 'Overpass', sans-serif;
        font-size: 26px;
        color: #131313;
        margin-top: 68px;
    }

    .description {
        font-family: 'Overpass', sans-serif;
        font-size: 20px;
        color: #131313;
        margin-top: 23px;
    }

    .subDescription {
        font-family: 'Overpass', sans-serif;
        font-size: 16px;
        color: #737373;
        margin-top: 23px;
    }
`
export default AboutDescriptionContainer;
