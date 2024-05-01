import styled from 'styled-components';

const ProjectCardContainer = styled.div`

margin: 72px 14px 14px 14px;
border: 1px solid ${props => props.theme.colors.outlineVariant};
border-radius: 12px;
@media only screen and (max-width: 1440px) {
    margin: 28px 12px 28px 12px;
  }

  @media only screen and (max-width: 400px) {
        margin: 18px 2px 18px 2px;
    }

.imageContainer {
    width: 364px;
    height: 198px;
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 18px 18px 4px 18px;
    flex-wrap: wrap;
    flex-direction: column;
    border-radius: 12px 12px 0px 0px;
    background-color: ${props => props.theme.colors.surfaceContainerLowest};
    p {
        font-size: 24px;
        font-family: 'Overpass', sans-serif;        
        text-align: start;
        color: ${props => props.theme.colors.onSurface};
    }
    h2 {
        margin-bottom: 12px;
        font-size: 14px;
        color: ${props => props.theme.colors.onSurfaceVariant};
    }
    h1 {
        font-size: 24px;
        font-family: 'Overpass', sans-serif;
        font-weight: 500;
        color: ${props => props.theme.colors.onSurface};
        @media only screen and (max-width: 400px) {
        width: 310px;
        }
    
        @media only screen and (max-width: 400px) {
            width: 310px;
            height: 230px;
        }
    }

    .skillImage {
            height: 110px;
    }
    

    @media only screen and (max-width: 400px) {
        width: 310px;
        height: 230px;
    }
    
}

.textCard {
        background-color: ${props => props.theme.colors.surfaceContainerLowest};
        border-radius: 0px 0px 12px 12px ;
        width: 364px;
        height: 122px;
        padding: 0px 18px 18px 18px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
            p {
                font-size: 14px;
                font-family: 'Overpass', sans-serif;
                color: ${props => props.theme.colors.onSurface};;
                @media only screen and (max-width: 400px) {
                

                width: 360px;
                }
            }
            a {
                text-decoration: none;
                color: ${props => props.theme.colors.primary}

            }
    }
`;

export default ProjectCardContainer;