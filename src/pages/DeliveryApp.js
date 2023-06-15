import DeliveryAppContainer from '../styles/DeliveryAppContainer';
import threephoneMockup from '../../src/assets/tresScreenMockup.png';
import PersonaImage from '../assets/personaImage.png';
import JornadaDoUsuario from '../assets/JornadaDoUsuario.png';
import WireFramePapel from '../assets/wireframepapael.png';
import WireFrameDigital from '../assets/wireframedigital.png';
import LofiPrototype from '../assets/lofiprototipe.png';
import MockupChange from '../assets/mockupChange.png';
import HomeScreen from '../assets/homeScreen.png';
import DetailsScreen from '../assets/DetailsScreen.png';
import CartScreen from '../assets/cartScreen.png';
import PaymentScreen from '../assets/paymentScreen.png';
import Footer from '../componentes/Footer';
import Header from '../componentes/Header';

function DeliveryApp() {
  return(   
    <DeliveryAppContainer>
        <Header title="about"/>
        <header className='headerProject'>
            <div>
                <h1>Aplicativo Mobile Estudo de Caso</h1>
                <span className='subTitleHeader'>Delivery de comida</span>
            </div>
            <div>
                <img className='headerImage' src={threephoneMockup} alt='mockup do 3 telas do iphone 14 com telas do aplicativo'/>
            </div>
        </header>
        <div className='overviewSection'>
              <div className='sectionHeader'>
                <div className='line'></div>
                <div className='sectionTitle'>Visão geral do projeto</div>
                <div className='line'></div>
              </div>
              <div className='subSection'>
                <span className='subTitleSection'>Problema</span>
                <p className='sectionText'>Desenvolver o design de um app de delivery
                para um restaurante local e proporcionar uma boa experiência para o usuário que vai usar o app pela primeira vez.
                </p>
              </div>
              <div className='subSection'>
                <span className='subTitleSection'>Solução</span>
                <p className='sectionText'>Delivery é um aplicativo que oferece uma plataforma altamente eficiente e versátil que permite aos usuários realizar pedidos de comida de forma rápida e conveniente. O compromisso é fornecer uma experiência sólida, garantindo uma interface intuitiva e fácil de usar, para que os usuários possam interagir de maneira fluida.</p>
              </div>
              <div className='subSection'>
                <span className='subTitleSection'>Minha função</span>
                <p className='sectionText'>UX design, Ux research.</p>
              </div>
              <div className='subSection'>
                <span className='subTitleSection'>Responsabilidades</span>
                <p className='sectionText'>User research, wireframing,prototyping,  flow mapping, visual design.</p>
              </div>
        </div>

        <div className='undestendingTheUserSection'>
          <div className='sectionHeader'>
            <div className='line'></div>
            <div className='sectionTitle'>Entendendo o Usuário</div>
            <div className='line'></div>
          </div>        
          <div className='userResearchSection'>
            <div>
              <span className='userResearchTitle'>Pesquisa do usuário</span>
              <p className='userReasearchText'>&nbsp;&nbsp;&nbsp;&nbsp;Para obter um entendimento mais abrangente dos problemas que as pessoas enfrentam ao comprar comida, realizei um total de cinco entrevistas com possíveis usuários. Através dessas interações, busquei coletar insights valiosos sobre as dificuldades e obstáculos que eles enfrentam no processo de compra de alimentos.</p>
            </div>
            <div className='researchCardItem'>
              <div className='researchCardNumber'>1</div>
              <span className='researchCardTitle'>Tempo</span>
              <p className='researchCardText'>&nbsp;&nbsp;&nbsp;&nbsp;Nem sempre as pessoas têm tempo para cozinhar e acabam optando por comprar comida online. A atenção a essa falta de tempo gerou a necessidade de fazer uma user navigation simples para que a pessoa possa concluir seu pedido de forma rápida.
              </p>
            </div>
            <div className='researchCardItem'>
              <div className='researchCardNumber'>2</div>
              <span className='researchCardTitle'>Qualidade</span>
              <p className='researchCardText'>&nbsp;&nbsp;&nbsp;&nbsp;Alguns usuários apontaram a qualidade da comida que compram por delivery. Dessa forma pensando no aplicativo reforçou a ideia de destacar a qualidade  utilizando as imagens dos pratos.
              </p>
            </div>
            <div className='researchCardItem'>
              <div className='researchCardNumber'>3</div>
              <span className='researchCardTitle'>Customização</span>
              <p className='researchCardText'>&nbsp;&nbsp;&nbsp;&nbsp;Foi identificada a necessidade de personalizar os pratos, o que resultou no desenvolvimento de opções de personalização para os acompanhamentos das refeições.
              </p>
            </div>            
          </div>
          <div className='personaSection'>
            <div className='leftDataPersona'>
              <div>
                <span className='personaTitle'>Persona</span>
              </div>
              <div className='personaLeftContent'>
                <p className='personaSubtitle'>Declaração de problema</p>
                <p className='personaLeftText'>— Júlia é uma estudante estagiária que precisa pedir comida saudável e de qualidade porque nem sempre tem tempo para cozinhar.</p>
              </div>
            </div>
              <hr className='dividePersona' />
              <div className='rightDataPersona'>
                <div className='personaImagaContainer'>
                  <img className='personaImage' src={PersonaImage} alt='Imagem contendo informaçoes da persona como dados demograficos e preferencias'/>
                </div>
              </div>
          </div>
          <div className='userJourneySection'>
            <span className='userJourneyTitle'>Jornada do usuário</span>
            <div className='userJorneyInfo'>
              <span className='personaNameTitle'>Persona: Júlia,</span>
              <span className='userJourneySubtitle'>Objetivo:  fazer o pedido de uma refeição.</span>
              <p className='userJourneyText'>
              &nbsp;&nbsp;&nbsp;&nbsp;No processo de criação da jornada do usuário consegui entender melhor como o como a persona interagiria com o aplicativo de entrega, o que resultou em diversas oportunidades de aprimoramento de design, incluindo a possibilidade de personalização do prato, além de ajudar na criação do user flow.
              </p>
            </div>
            <div>
              <img className='userJourneyImage' src={JornadaDoUsuario} alt='tabela contendo informaçoes da jornada do usuário' />
            </div>
          </div>
        </div>
        <div className='startingTheDesignSection'>
              <div className='sectionHeader'>
                <div className='line'></div>
                <div className='sectionTitle'>Começando o Design</div>
                <div className='line'></div>
              </div>
              <div className='wireframeSection'>
                <span className='personaTitle'>Wireframes de papel</span>
                <div>
                  <img className='wireframepapelImage' src={WireFramePapel} alt='seis wireframes de papeis de baixa fidelidade'/>
                </div>
                <span className='wireframeText'>&nbsp;&nbsp;&nbsp;&nbsp;A ideia principal foi gerar alguns design de forma rápida e compartilhar os wireframes para receber feedbacks de melhorias sobre as telas e escolher com qual design seguir em frente, as marcações de X na imagem representa a escolha do componente que mais agradou.</span>
              </div>
              <div className='wireframeSection'>
                <span className='personaTitle'>Wireframes digital</span>
                <span className='wireframeText'>&nbsp;&nbsp;&nbsp;&nbsp;O objetivo foi criar um design simples, agradável e objetivo, que não sobrecarregasse o usuário com informação, para que ele possa com facilidade achar o que deseja e seguir para a próxima tela.</span>
                <div className='wireframeDigital'>
                  <img className='wireframeDigitalImg' src={WireFrameDigital} alt='seis wireframes de papeis de baixa fidelidade'/>
                </div>
              </div>
              <div className='lofiPrototype'>
                <span className='personaTitle'>Protótipo de baixa fidelidade</span>
                <span className='wireframeText'>&nbsp;&nbsp;&nbsp;&nbsp;Nessa navegação é possível simular o caminho para realizar o pedido, o usuário começa na página inicial podem selecionar uma comida, passa para tela de detalhes onde seleciona as opções que deseja, segue para o carrinho onde pode visualizar o que selecionou, seguindo para tela de confirmação e depois finalização.</span>
                <div>
                  <img className='prototypeImg' src={LofiPrototype} alt='seis wireframes de papeis de baixa fidelidade'/>
                </div>
              </div>
              <div className='usabilityStudy'>
                <span className='personaTitle'>Descobertas com o estudo de usabilidade</span>
                <span className='usabilityStudyText'>&nbsp;&nbsp;&nbsp;&nbsp;Realizei um estudo de usabilidade com 5 participantes para entender melhor como o usuário interage com o aplicativo e como ele se sentia ao usar o app.</span>
                <div className='findsA'>
                  <span className='findsTitle'>A. Descobertas</span>
                  <div className='findContainer'>
                    <div className='findNumber'>1</div>
                    <span className='findText'>Dificuldade para selecionar produto.</span>
                  </div>
                  <div className='findContainer'>
                    <div className='findNumber'>2</div>
                    <span className='findText'>Frustração com preenchimento dos itens de acompanhamento.</span>
                  </div>
                  <div className='findContainer'>
                    <div className='findNumber'>3</div>
                    <span className='findText'>Sentiu falta do botão de remover item do carrinho.</span>
                  </div>
                </div>
                <div className='findsA'>
                  <span className='findsTitle'>B. Descobertas</span>
                  <div className='findContainer'>
                    <div className='findNumber'>1</div>
                    <span className='findText'>Dificuldade com a forma de selecionar o método de pagamento.</span>
                  </div>
                  <div className='findContainer'>
                    <div className='findNumber'>2</div>
                    <span className='findText'>Confusão na forma de aplicar cupom.</span>
                  </div>
                </div>
              </div>
        </div>
        <div className='designImprovementSection'>
          <div className='sectionHeader'>
            <div className='line'></div>
            <div className='sectionTitle'>Aperfeiçoando o Design</div>
            <div className='line'></div>
          </div>
          <div className='mockupSection'>
            <span className='personaTitle'>Mockups</span>
            <span className='wireframeText'>&nbsp;&nbsp;&nbsp;&nbsp;Alguns participantes apontaram que as opções de forma de pagamento ocupavam muito espaço da tela e que não tinham acesso prévio aos campos que seriam preenchidos. Por isso optei por deixar o menu horizontal, e já exibir os campos com um botão pré selecionado,  mas dando a opção do usuário selecionar a forma de pagamento que desejar.</span>
            <div>
              <img className='prototypeImg' src={MockupChange} alt='Mockup antes e depois da tela de pagamento do app.'/>
            </div>
          </div>
          <div className='finalDesign'>
            <span className='personaTitle'>Design final</span>
            <div>
              <img className='finalDesignImg' src={HomeScreen} alt='Mockup antes e depois da tela de pagamento do app.'/>
            </div>
            <div>
              <img className='finalDesignImg' src={DetailsScreen} alt='Mockup antes e depois da tela de pagamento do app.'/>
            </div>
            <div>
              <img className='finalDesignImg' src={CartScreen} alt='Mockup antes e depois da tela de pagamento do app.'/>
            </div>
            <div>
              <img className='finalDesignImg' src={PaymentScreen} alt='Mockup antes e depois da tela de pagamento do app.'/>
            </div>
          </div>
        </div>
        <div className='learnings'>
          <div className='sectionHeader'>
            <div className='line'></div>
            <div className='sectionTitle'>Aprendizado</div>
            <div className='line'></div>
          </div>
          <div className='learningsText'>
            <div className='learningsTextBody'>&nbsp;&nbsp;&nbsp;&nbsp;No geral fiquei muito contente com o resultado do projeto. Esse é o primeiro projeto que faço e eu aprendi muitas coisas em cada passo no processo de desenvolvimento, o mais importante foi que o projeto tem que ser pensado da melhor forma para quem vai usar de fato o produto e não feito de acordo com o que o designer acha bom ou não. Se tivesse mais tempo teria adicionado algumas funcionalidades extras como Incluir um filtro para que pratos que contém alimentos que os usuários  não gostem ou tenham alguma restrição médica não sejam mostrados.</div>
            <div className='learningsTextFooter'>Se tiver algum feedback ou quiser entrar em contado sinta-se a vontade. </div>
          </div>
        </div>
        <Footer />
    </DeliveryAppContainer>
  );
}

export default DeliveryApp;
