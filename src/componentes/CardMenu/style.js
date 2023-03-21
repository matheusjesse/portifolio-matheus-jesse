import styled from 'styled-components';

const CardMenuContainer = styled.div`
    
    height: 128px;
    width: 132px;
    
    :hover {
        cursor: pointer; 

    }

    .hoverContent{
        display: none;
        box-shadow: 8px 8px 22px -8px #131313;
        width: 132px;
        height: 39px;
        border: 8px solid #FEFEFE;
        border-radius: 18px;
        margin-top: 8px;
        color: #131313;
        font-family: 'Overpass', sans-serif;
        font-weight: 900;
        font-size: 12px;
    }

    :hover .hoverContent {
        display: flex;
        box-shadow: 8px 8px 22px -8px #131313;
        width: 132px;
        height: 39px;
        border: 8px solid #FEFEFE;
        border-radius: 18px;
        margin-top: 8px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px 8px 0px 8px;
    }

    .hoverContent p {
        font-family: 'Overpass', sans-serif;
        font-weight: 600;
        font-size: 12px;
        color: #131313;
    }

    .hoverContent img {
        width: 14px;
        height: 14px;
    }
`
const ImageContainer = styled.div`
    width: 132px;
    height: 132px;
    border: 8px solid #FEFEFE;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 8px 8px 22px -8px #131313;
img {
        width: 64px;
        height: 64px;
        fill: #131313;
    }
`;

export default CardMenuContainer;
export { ImageContainer };
