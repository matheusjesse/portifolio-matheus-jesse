import styled from 'styled-components';

const DeliveryAppContainer = styled.body`   
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
  background: ${props => props.theme.colors.surfaceContainerLowest};
  
   .headerProject {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 500px;
      background-color: #0F6134;
      margin-top: 100px;
      @media only screen and (max-width: 870px) {
        padding-left: 22px;
        height: 432px;
    }
   }

   .subTitleHeader {
    font-size: 32px;
    font-family: 'Roboto Serif', serif;
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
    font-family: 'Roboto Serif', serif;
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

   .overviewSection {
    width: 68%;
    margin-top: 180px;
    display: flex;
    justify-content: center;
    
    flex-wrap: wrap;
    gap: 50px;

   }

   .sectionHeader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   }

   .sectionTitle {
      font-family: 'Roboto Serif', serif;
      font-weight: 700;
      font-size: 26px;
      @media only screen and (max-width: 620px) {
        font-size: 22px;    
      }
      @media only screen and (max-width: 414px) {
        font-size: 16px;    
      }
   }

   .line {
    width: 10%;
    height: 2px;
    background-color: red;
    margin: 4px;
    background-color: #0F6134;
   }

   .subSection {
    width: 408px;
    height: 210px;
   }

   .subTitleSection {
    font-family: 'Roboto Serif', serif;
    font-size: 22px;
    font-weight: 600;
    @media only screen and (max-width: 620px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 414px) {
        font-size: 15px;
    }
   }

   .sectionText {
    margin-top: 18px;
    font-family: 'Roboto Serif', serif;
    font-weight: 400;
    font-size: 14px;
   }
   .spacing {
    visibility: hidden;
    height: 64px;
   }

   .undestendingTheUserSection {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;    
    gap: 50px;
   }

   .userResearchSection {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media only screen and (max-width: 620px) {
        font-size: 20px;    
    }
    
   }

   .userResearchTitle{
    font-family: 'Roboto Serif', serif;
    font-size: 22px;
    font-weight: 600;
    @media only screen and (max-width: 620px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 414px) {
        font-size: 15px;
    }
   }

   .userReasearchText {
      margin-top: 18px;
      font-family: 'Roboto Serif', serif;
      font-weight: 400;
      font-size: 14px;
      width: 98%;
   }

   .researchCardItem {
    width: 248px;
    height: 290px;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    margin-top: 64px;    
   }

   .researchCardNumber {
    width: 50px;
    height: 50px;
    background-color: #0F6134;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto Serif', serif;
    font-weight: 600;
    font-size: 26px;
    color: white;
    margin-bottom: 8px;
   }

   .researchCardTitle {
    font-family: 'Roboto Serif', serif;
    width: 100%;
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    color: #0F6134;
    margin-bottom: 12px;
    @media only screen and (max-width: 414px) {
        font-size: 16px;
    }
   }

   .researchCardText {
    font-family: 'Roboto Serif', serif;
    font-weight: 400;
    font-size: 14px;
    @media only screen and (max-width: 414px) {
        font-size: 12px;
    }
   }

  .personaSection {
    width: 70%;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 1600px) {
      flex-wrap: wrap;
    }
  }

  .personaTitle {
    font-family: 'Roboto Serif', serif;
    font-size: 22px;
    font-weight: 600;
    width: 100%;    
    margin-top: 18px;
    @media only screen and (max-width: 620px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 414px) {
        font-size: 15px;
    }
  }

  .personaLeftText {
    width: 400px;
    font-family: 'Roboto Serif', serif;
    font-weight: 400;
    font-size: 14px;
    margin-top: 12px;
    @media only screen and (max-width: 590px) {
        width: 300px;
  }
  @media only screen and (max-width: 414px) {
        width: 200px;
  }
  }

  .personaSubtitle {
    margin-top: 18px;
    font-family: 'Roboto Serif', serif;
    font-size: 16px;
    font-weight: 600;
    @media only screen and (max-width: 414px) {
        font-size: 15px;
    }
  }

  .personaImage {
    width: 400px;
    height: 277px;
    @media only screen and (max-width: 620px) {
      width: 360px;
    height: 237px;    
  }

  @media only screen and (max-width: 414px) {
      width: 260px;
    height: 137px;    
  }
  }

  .dividePersona {
    background-color: #0F6134;
    width: 4px;
    @media only screen and (max-width: 1600px) {
      display: none;
    }
  }

  .userJourneySection {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .userJourneyTitle {
    font-family: 'Roboto Serif', serif;
    font-size: 22px;
    font-weight: 600;
    width: 100%;    
    margin-top: 18px;
    @media only screen and (max-width: 620px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 414px) {
        font-size: 15px;
    }
  }

  .userJorneyInfo {
    width: 294px;
    display: flex;
    flex-wrap: wrap;
  }

  .personaNameTitle {
    margin-top: 18px;
    font-family: 'Roboto Serif', serif;
    font-size: 16px;
    font-weight: 600;
  }

  .userJourneySubtitle {
    font-family: 'Roboto Serif', serif;
    font-size: 14px;
    font-weight: 300;
  }
  
  .userJourneyText {
    font-family: 'Roboto Serif', serif;
    font-weight: 400;
    font-size: 14px;
    margin-top: 18px;
  }

  .userJourneyImage {
    width: 500px;
    @media only screen and (max-width: 720px) {
      width: 400px;
    }
    @media only screen and (max-width: 620px) {
      width: 360px;    
  }
  @media only screen and (max-width: 414px) {
    width: 260px;    
  }
    
  }

  .startingTheDesignSection {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 88px;
  }

  .wireframeSection {
    width: 70%;
    margin-top: 54px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 18px;
  }

  .wireframepapelImage {
    @media only screen and (max-width: 620px) {
      width: 340px;
    height: 347px;
    
  }
  }

  .wireframeText {
    width: 272px;
    font-family: 'Roboto Serif', serif;
    font-weight: 400;
    font-size: 14px;
  }

  .wireframeDigital {
    position: relative;
    margin-right: 120px;
    @media only screen and (max-width: 700px) {
      margin-right: 30px;
      margin-left: 24px;
    
  }

  .wireframeDigitalImg {
    @media only screen and (max-width: 670px) {
      width: 180px;
      height: 385px;
    }
    @media only screen and (max-width: 620px) {
      width: 130px;
      height: 280px;
    }
    @media only screen and (max-width: 450px) {
      width: 100px;
      height: 200px;
    }
  }
    
}

  .wireframeDigital::before {
    content: "Exibição em lista dos pratos disponíveis para que o usuário possa selecionar";
    position: absolute;
    width: 138px;
    height: 2px;
    left: -10em;
    top: 15em;
    padding-right: 40px;    
    font-family: 'Roboto Serif', serif;
    font-weight: 400;
    font-size: 14px;
    background-color: #0F6134;
    @media only screen and (max-width: 670px) {
      left: -11em;
      top: 11.2em;
    }
    @media only screen and (max-width: 620px) {
      font-size: 12px;
      width: 118px;
      left: -11em;
      top: 9.5em;
    }
    @media only screen and (max-width: 450px) {
      font-size: 9px;
      width: 78px;
      left: -11em;
      top: 9em;
    }
  }

  .wireframeDigital::after {
    content: "Um menu de carousel horizontal para que o usuário possa navegar direto para achar as opções que deseja.";
    position: absolute;
    width: 168px;
    height: 0px;
    left: 16em;
    top: 11.4em;
    padding-right: 40px;    
    font-family: 'Roboto Serif', serif;
    font-weight: 400;
    font-size: 14px;
    background-color: #0F6134;
    border-top: 2px solid black;
    padding-left: 60px;
    padding-right: 0px;
    border-color: #0F6134;
    text-align: right;
    @media only screen and (max-width: 670px) {
      left: 12em;
      top: 8.6em;
    }
    @media only screen and (max-width: 620px) {
      font-size: 12px;
      width: 118px;
      left: 10.5em;
      top: 7.2em;
    }
    @media only screen and (max-width: 450px) {
      font-size: 9px;
      width: 68px;
      left: 10.5em;
      top: 7.2em;
      padding-left: 30px;
    }
  }

  .lofiPrototype {
    width: 70%;
    margin-top: 54px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 18px;
  }

  .prototypeImg {
    width: 480px;
    @media only screen and (max-width: 720px) {
      width: 380px;
    
  }
  @media only screen and (max-width: 520px) {
      width: 320px;     
  }
  @media only screen and (max-width: 450px) {
      width: 260px;     
  }
  @media only screen and (max-width: 360px) {
      width: 230px;     
  }
  }

  .usabilityStudy {
    width: 68%;
    margin-top: 54px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 18px;
  }

  .usabilityStudyText {
    font-family: 'Roboto Serif', serif;
    font-weight: 400;
    font-size: 14px;
    width: 600px;
    margin-bottom: 54px;
    margin-top: 24px;
  }

  .findsA {
    display: flex;
    width: 320px;
    flex-wrap: wrap;
    justify-content: center;
    
    gap: 4px;
    
  }

  .findsTitle {
    text-align: center;
    font-family: 'Roboto Serif', serif;
    font-weight: 400;
    font-size: 16px;
  }

  .findNumber {
    background-color: #0F6134;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto Serif', serif;
    font-size: 22px;
    font-weight: 600;
    color: white;
    margin-right: 4px;
  }
  .findContainer {
    display: flex;
    align-items: center;
  }

  .findText {
    width: 274px;
    font-family: 'Roboto Serif', serif;
    font-weight: 400;
    font-size: 14px;
  }

  .designImprovementSection {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 88px;
  }

  .mockupSection {
    width: 70%;
    margin-top: 54px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 18px;
  }

  .finalDesign {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 88px;
    gap: 8px;
  }

  .finalDesignImg {
    width: 180px;
    height: 404px;
    margin-top: 18px;
  }

  .learnings {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 88px;
  }

  .learningsTextBody {
    margin-bottom: 18px;
    font-family: 'Roboto Serif', serif;
    font-weight: 400;
    font-size: 14px;
    margin-top: 54px;
    margin-right: 0px;
  }

  .learningsTextFooter {
    font-family: 'Roboto Serif', serif;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
  }
`
export default DeliveryAppContainer;
