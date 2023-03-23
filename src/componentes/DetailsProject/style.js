import styled from 'styled-components';

const DetailsProjectContainer = styled.div`
    
    
    display: flex;
    .hiden {
        display: none;
    }

    .visible {
        display: flex;
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: red;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        background: rgba(251, 251, 251, 0.63);
        border: 38px solid rgba(115, 115, 115, 0.1);
        backdrop-filter: blur(20px);  
        @media only screen and (max-width: 713px) {
            border: 18px solid rgba(115, 115, 115, 0.1);
        }      

        @media only screen and (min-width: 320px) {
            border: 8px solid rgba(115, 115, 115, 0.1);
        }
    }

    

    .visible .detailsTitle {
        width: 100%;
        text-align: center;
        margin-top: 24px;
        margin-bottom: 22px;
        color: #131313;
        font-size: 28px;
        @media only screen and (max-width: 713px) {
            margin-top: 0px;
            margin-bottom: 0px;
        }
        @media only screen and (max-width: 420px) {
            font-size: 22px;
            margin-bottom: 22px;
        }
    }

    .visible img {
        width: 244px;
        height: 500px;
        border-radius: 12px;
        margin-right: 8px;
        margin-bottom: 44px;
        @media only screen and (max-width: 713px) {
            width: 244px;
            height: 500px;
            margin-right: 0px;
            margin-bottom: 0px;
        }
        @media only screen and (max-width: 641px) {
            display: none;
        }
    }

    .visible .subTitle {
        font-family: 'Overpass', sans-serif;
        font-size: 24px;
        color: #131313;
        @media only screen and (max-width: 713px) {
            font-size: 22px;
        }
        @media only screen and (max-width: 420px) {
            font-size: 18px;
        }
    }

    .visible .descriptionTitle {
        font-size: 22px;
        font-family: 'Overpass', sans-serif;
        color: #737373;
        padding-left: 8px;
        @media only screen and (max-width: 713px) {
            font-size: 18px;
        }
        @media only screen and (max-width: 420px) {
            font-size: 16px;
        }
    }

    .visible .detailsSection {
        width: 382px;
        height: 182px;
        margin-bottom: 22px;
        @media only screen and (max-width: 713px) {
            width: 382px;
            height: 88px;
        }
        @media only screen and (max-width: 420px) {
            width: 282px;
            height: 128px;
        }
    }

    .visible .tecnologiesSection {
        width: 382px;
        height: 182px;
        @media only screen and (max-width: 713px) {
            width: 382px;
            height: 88px;
        }
        @media only screen and (max-width: 420px) {
            width: 282px;
            height: 128px;
            margin-top: 18px;
        }
    }
    

    .visible .technologiesText {
        font-size: 22;
        font-family: 'Overpass', sans-serif;
        color: #737373;
        padding-left: 8px;
        @media only screen and (max-width: 713px) {
            font-size: 16px;
        }
        @media only screen and (max-width: 420px) {
            font-size: 14px;
        }
    }

    .visible a {
        margin-top: 32px;
        text-decoration: none;
        color: #0094FF;
        @media only screen and (max-width: 713px) {
            margin-top: 82px;
        }
    }

    .visible a:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        width: 382px;
        margin-top: 18px;
        
        @media only screen and (max-width: 641px) {
            height: 300px;
        }
    }
    
    
`
export default DetailsProjectContainer;
