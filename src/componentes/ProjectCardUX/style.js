import styled from 'styled-components';

const ProjectCardUxContainer = styled.div`
margin: 72px 14px 72px 14px;
border: 1px solid ${props => props.theme.colors.outlineVariant};
border-radius: 12px;

cursor: pointer;
transition: box-shadow 0.4s;
transition-timing-function: ease-in-out;
:hover {
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
    }
a {
    text-decoration: none;
    color: ${props => props.theme.colors.onSurface}
}

@media only screen and (max-width: 1440px) {
    margin: 28px 12px 28px 12px;
  }

  @media only screen and (max-width: 400px) {
        margin: 18px 2px 18px 2px;
    }

.imageContainer {
    width: 360px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    
    h1 {
        margin-top: 14px;
        font-size: 28px;
        font-family: 'Overpass', sans-serif;
        font-weight: 500;
        text-align: center;
        color: ${props => props.theme.colors.onSurface};
        @media only screen and (max-width: 400px) {
        width: 310px;
        
    }
    }
    @media only screen and (max-width: 400px) {
        width: 310px;
        height: 80px;
    }

    
}
.textCard {
    width: 360px;
    height: 148px;
    padding-left: 8px;
    padding-right: 8px;
    p {
        font-size: 16px;
        font-family: 'Overpass', sans-serif;
        margin-top: 23px;
        color: ${props => props.theme.colors.onSurfaceVariant};
        @media only screen and (max-width: 400px) {
        width: 300px;
    }
    }

    h2 {
        font-size: 20px;
        color: ${props => props.theme.colors.onSurface};
    }

    @media only screen and (max-width: 400px) {
        width: 310px;
        height: 140px;
    }
}

img {
    margin: 0  0 12px 10px;
}


`
export default ProjectCardUxContainer;
