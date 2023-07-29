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
    border: 1px solid var(--material-theme-sys-light-outline-variant, #C4C6D0);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;    
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
    transition: box-shadow 0.4s;
    transition-timing-function: ease-in-out;

    :hover {
        box-shadow: 0px 2px 12px 1px rgba(0, 0, 0, 0.25), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
        border: 0px solid var(--material-theme-sys-light-outline-variant, #C4C6D0);
    }

`;





export default CardMenuContainer;
export { ImageContainer };
