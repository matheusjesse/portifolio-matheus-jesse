import styled from 'styled-components';

const ResponsiveSiteContainer = styled.body`   
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
  background: var(--material-theme-sys-light-surface, linear-gradient(0deg, rgba(0, 90, 193, 0.04) 0%, rgba(0, 90, 193, 0.04) 100%), #FAF9FD);
  
    .header-page {
        height: 328px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #112E2E;
        flex-wrap: wrap;
        margin-bottom: 64px;
        align-content: center;
    }

    .subTitle {
        width: 100%;
        text-align: center;
        font-size: 2.2em;
        font-weight: 600;
        margin-bottom: 64px;
    }
    .header-page  h1, h2{
        width: 100%;
        text-align: center;
        color: white;
    }

    .overall{
        width: 68%;
        max-width: 800px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
    }

    .overrall-box{
        width:200px;
        margin: 14px;
        border-radius: 12px;
        padding: 8px;
    }

    .undestandingTheUser {
        width: 68%;
        max-width: 800px;
        margin-top: 64px ;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .userResearchTitle {
        display: block;
        width: 68%;
        max-width: 800px;

        font-size: 1.6em;
        font-weight: 600;
    }

    .userResearchPoints {
        width: 200px;
        
        margin: 24px;
    }

    .userResearchText {
        margin-top: 24px;
    }
    .userResearch {
        width: 100%;
    }

    .pointsSection {
        display: flex;
        width: 100%;
        margin-top: 24px;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .pointsTitle {
        font-size: 1.4em;
        font-weight: 600;
    }

    .pointsText {
        margin-top: 14px;
    }

    .imgContainer {
        width: 100%;
        max-width: 800px;
        margin-top: 24px;
        margin-bottom: 24px;
    }

    .personaLucas {
        width: 100%;
        max-width: 800px;
    }

    .startingDesign {
        width: 68%;
        max-width: 800px;
        margin-top: 64px ;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .mobile-phone {
        width: 240px;
        height: 475px;
        margin: 24px 8px 48px 8px;
    }

    .imgContainerMobile {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .footer-section {
        text-align: center;
        margin-top: 24px;
    }

    .footer-title {
        font-size: 1.6em;
        font-weight: 600;
    }
`
export default ResponsiveSiteContainer;
