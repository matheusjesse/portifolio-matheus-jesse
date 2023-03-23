import styled from 'styled-components';

const CardMenuContainer = styled.div`
    
    height: 148px;
    width: 152px;
    margin: 20px 4px 39px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    :hover {
        cursor: pointer; 
    }

    

    .hoverContent{
        display: none;
        margin-top: 200px;
        visibility: hidden;
        width: 132px;
        height: 39px;
        border-radius: 18px;
        margin-top: 8px;
        color: #131313;
        font-family: 'Overpass', sans-serif;
        font-weight: 900;
        font-size: 12px;
        border: 8px solid #737373;
    }

    :hover .hoverContent {
        display: flex;
        visibility: visible;
        width: 132px;
        height: 39px;
        margin-top: 200px;
        border-radius: 18px;
        margin-top: 8px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 8px 0px 8px;
        border: 8px solid transparent;
        opacity: 1;
        p {
            margin-right: 4px;
        }
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
    transition: border 0.6s ;
    transition-timing-function: ease-in-out;

    :hover {
        border: 8px solid #131313;
    }

`;





export default CardMenuContainer;
export { ImageContainer };
