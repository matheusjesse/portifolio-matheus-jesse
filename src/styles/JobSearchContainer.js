import styled from 'styled-components';

const JobSearchContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: flex-start;

    .headerProject {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 500px;
      background-color: #006971;
      margin-top: 100px;
      @media only screen and (max-width: 870px) {
        padding-left: 22px;
        height: 432px;
    }
   }

   .subTitleHeader {
    font-size: 32px;
    font-weight: 300px;
    color: white;
    @media only screen and (max-width: 1200px) {
      font-size: 24px;
    }
    @media only screen and (max-width: 1050px) {
      font-size: 18px;
    }
   }

   h1 {
    font-size: 54px;
    width: 560px;
    color: white;
    margin-bottom: 18px;
    @media only screen and (max-width: 1200px) {
      font-size: 44px;
    }
    
    @media only screen and (max-width: 1050px) {
      font-size: 34px;
      width: 360px;
    }
    
   }

   .headerImage {
      width: 566px;
      height: 656px;
      margin-top: 100px;
      @media only screen and (max-width: 1200px) {
        width: 466px;
        height: 556px;
        margin-top: 20px;
    }
    @media only screen and (max-width: 1100px) {
      width: 416px;
        height: 506px;
        margin-top: 0px;
    }

    @media only screen and (max-width: 870px) {
      width: 316px;
        height: 406px;
    }
    @media only screen and (max-width: 720px) {
      display: none;
    }
      
   }

   .section-body {
        width: 68%;
        max-width: 960px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 160px;
   }

   .overrall-box{
        width:200px;
        margin: 14px;
        border-radius: 12px;
        padding: 8px;
    }

    .subTitle {
        width: 100%;
        text-align: center;
        font-size: 2.2em;
        font-weight: 600;
        margin-bottom: 64px;
    }

    .subSection {
        width: 100%;
    }

    .subSectionTitle {
        display: block;
        width: 68%;
        max-width: 800px;

        font-size: 1.6em;
        font-weight: 600;
    }

    .subSectionText {
        margin-top: 24px;
    }

    .imgContainer {
        width: 100%;
        max-width: 800px;
        margin-top: 24px;
        margin-bottom: 24px;
    }

    .personaImg {
        width: 100%;
        max-width: 800px;
    }

    .userResearchPoints {
        width: 200px;
        
        margin: 24px;
    }

    .pointsTitle {
        font-size: 1.4em;
        font-weight: 600;
    }

    .pointsText {
        margin-top: 14px;
    }

    .pointsSection {
        display: flex;
        width: 100%;
        margin-top: 24px;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .mockupUpdate {
        width: 100%;
        max-width: 440px;
    }

    .subSectionFooter {
        width: 100%;
        text-align: center;
        font-size: 2.2em;
        font-weight: 600;
        display: block;
    }
`

export default JobSearchContainer;
