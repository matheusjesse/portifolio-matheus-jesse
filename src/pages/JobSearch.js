import JobSearchContainer from "../styles/JobSearchContainer";
import MinImageMockup from "../assets/tresMockupScreenJobSearch.png";
import Header from "../componentes/Header";
import PersonaAmanda from '../assets/PersonaAmanda.png';
import WireFrameLF from '../assets/wireframeLF.png';
import MockupUpdate from '../assets/mockupUpdate.png';
import WireFrameHF from '../assets/wireframeHF.png';
import Responsive from '../assets/responsive.png';
import Footer from "../componentes/Footer";

export default function JobSearch() {
    return(
        <JobSearchContainer>
        <Header title="about"/>
        <header className='headerProject'>
            <div>
                <h1>Aplicativo Mobile e Site Estudo de Caso</h1>
                <span className='subTitleHeader'>Job Search</span>
            </div>
            <div className="img-container">
                <img className='headerImage' src={MinImageMockup} alt='mockup do 3 telas do iphone 14 com telas do aplicativo'/>
            </div>
        </header>
        <section className="section-body">
            <span className="subTitle">Visão geral</span>
            <div className="overrall-box">
                <h3>O produto:</h3>
                <p>
                    JobSearch é um serviço que conecta pessoas recém formadas com empresas interessadas em incentivar o desenvolvimento profissional de pessoas em busca de desafios.
                </p>
            </div>
            <div className="overrall-box">
                <h3>Duração do projeto:</h3>
                <p>
                    11 de julho à 24 de julho.
                </p>
            </div>
            <div className="overrall-box">
                <h3>O Problema:</h3>
                <p>
                    Criar um aplicativo mobile e um site responsivo, de fácil navegação criando uma boa experiência para o usuário.
                </p>
            </div>
            <div className="overrall-box">
                <h3>O objetivo:</h3>
                <p>
                    Desenvolver um app e site que entregue ao usuário uma boa navegação e não seja confuso com muitas informações que possam atrapalhar o usuário.
                </p>
            </div>
            <div className="overrall-box">
                <h3>Minha função:</h3>
                <p>
                    UX leader, UX research, UX design.
                </p>
            </div>
            <div className="overrall-box">
                <h3>Responsabilidades:</h3>
                <p>
                    Conduzir entrevista, criar wireframes de baixa e alta fidelidade, prototipos, estudos de usabilidade, considerações de acessibilidade e design responsivo. 
                </p>
            </div>
        </section>
        <section className="section-body">
            <span className="subTitle">Entendendo o Usuário</span>
            <div className="subSection">
                <span className="subSectionTitle">Pesquisa do usuário</span>
                <p className="subSectionText">Conduzi entrevista com usuários, depois criei mapas de empatia para entender melhor as necessidades do usuário. Descobri que muitos usuários pensam em site de busca de emprego como uma oportunidade para se inserirem no mercado de trabalho. No entanto muitos sites de busca de emprego são muito confusos com muitos formulários para preencher o que acaba frustrando a pessoa pela excessividade de informações que  ela tem que preencher em cada site que pretende usar.</p>
            </div>
            <div className="subSection">
                <span className="subSectionTitle">Persona</span>
                <p className="subSectionText">Amanda é uma designer de interiores recém formada que precisa achar um emprego que corresponde a sua área de estudo por que ela quer trabalhar com o que ela gosta.</p>
                <div className="imgContainer">
                    <img className="personaImg" src={PersonaAmanda} alt="Duas imagens para comparação da tela na versão de baixa fidelidade e de alta fidelidade depois do estudo de usabilidade." />
                </div>
            </div>
        </section>
        <section className="section-body">
            <span className="subTitle">Começando o design</span>
            <div className="subSection">
                <span className="subSectionTitle">Digital wireframes e prototype</span>
                <p className="subSectionText">A ideia foi facilitar a vida do usuário, para que ele possa logar usando outros serviços que já tenha conta e não precise preencher formulários necessários.</p>
                <div className="imgContainer">
                    <img className="personaImg" src={WireFrameLF} alt="Duas imagens para comparação da tela na versão de baixa fidelidade e de alta fidelidade depois do estudo de usabilidade." />
                </div>
            </div>
            <div className="subSection">
                <span className="subSectionTitle">Estudo de usabilidade</span>
                <p className="subSectionText">Efetuei um estudo de usabilidade não moderado, com cinco participantes, com duração de trinta minutos em média, após a análise do estudo pude notar dois pontos importantes para ajudar a guiar o design.</p>
                <section className="pointsSection">
                    <div className="userResearchPoints">
                        <span className="pointsTitle">Login</span>
                        <p className="pointsText">Necessidade de ter que criar um cadastro único para cada site de busca de emprego.</p>
                    </div>
                    <div className="userResearchPoints">
                        <span className="pointsTitle">Navegação</span>
                        <p className="pointsText">Alguns usuários apontaram a dificuldade de navegar entre as vagas, que ao clicar na vaga perdia a lista de vagas e ficar atento as vagas que já se cadastraram.</p>
                    </div>
                    <div className="userResearchPoints">
                        <span className="pointsTitle">Frustração</span>
                        <p className="pointsText">Muitos sites de emprego acabavam recomendando vagas que não condizem com a função do candidato.</p>
                    </div>
                </section>
            </div>
        </section>
        <section className="section-body">
            <span className="subTitle">Aperfeiçoando o design</span>
            <div className="subSection">
                <span className="subSectionTitle">Mockups</span>
                <p className="subSectionText">Baseado no estudo de usabilidade fiz melhorias para atender melhor às necessidades do usuários, nesse mockup foi feita a adição de um botão para remover currículo. Para o usuário possa remover currículos desatualizados.</p>
                <div className="imgContainer">
                    <img className="mockupUpdate" src={MockupUpdate} alt="Duas imagens para comparação da tela na versão de baixa fidelidade e de alta fidelidade depois do estudo de usabilidade." />
                </div>
            </div>
            <div className="subSection">
                <span className="subSectionTitle">Prototipo de alta fidelidade</span>
                <p className="subSectionText">Aqui podemos ver o protótipo para navegação que o usuário consegue criar conta, fazer login, navegar pelas vagas e fazer sua candidatura.</p>
                <div className="imgContainer">
                    <img className="personaImg" src={WireFrameHF} alt="Duas imagens para comparação da tela na versão de baixa fidelidade e de alta fidelidade depois do estudo de usabilidade." />
                </div>
            </div>
            <div className="subSection">
                <span className="subSectionTitle">Considerações de acessibilidade</span>
                
                <section className="pointsSection">
                    <div className="userResearchPoints">
                        <span className="pointsTitle">1</span>
                        <p className="pointsText">Utilizei titulos com diferentes tamanho de texto para fácil visualização da hierarquia entre eles.</p>
                    </div>
                    <div className="userResearchPoints">
                        <span className="pointsTitle">2</span>
                        <p className="pointsText">O contraste de cores foi pensado para não dificultar a leitura de pessoas que possam ter alguma dificuldade. Utilizando o sistema de cores do material UI da google.</p>
                    </div>
                    <div className="userResearchPoints">
                        <span className="pointsTitle">3</span>
                        <p className="pointsText">Utilização de labels nos ícones de navegação para que os leitores de tela consigam descrever o botão.</p>
                    </div>
                </section>
            </div>
            <div className="subSection">
                <span className="subSectionTitle">Design responsivo</span>
                <p className="subSectionText">Aqui da para observar tela de login e como ela se adapta aos dispositivos móveis. A ideia foi manter a consistência do design para que não haja muita mudança.</p>
                <div className="imgContainer">
                    <img className="personaImg" src={Responsive} alt="Duas imagens para comparação da tela na versão de baixa fidelidade e de alta fidelidade depois do estudo de usabilidade." />
                </div>
            </div>
        </section>
        <section className="section-body">
            <span className="subTitle">Em diante</span>
            <div className="userResearchPoints">
                <span className="pointsTitle">Impacto</span>
                <p className="pointsText">Nosso público alvo disse que o design é intuitivo e fácil de navegar, e que a não necessidade de preencher formulários extensos de informações que muitas vezes são repetitivas e desnecessárias é um ponto positivo.</p>
            </div>
            <div className="userResearchPoints">
                <span className="pointsTitle">O que eu aprendi</span>
                <p className="pointsText">A importância de realizar entrevistas para receber feedback em cada passo da criação do projeto. Por que é nesse momento que a gente tem a oportunidade de entender e sanar as necessidades do usuário.</p>
            </div>
            <div className="userResearchPoints">
                <span className="pointsTitle">Próximos passos</span>
                <p className="pointsText">Conduzir um novo estudo de usabilidade, Identificar novas oportunidades de melhorias para tornar o site mais interativo, Adicionar filtros para vagas, como opções de vagas remotas.</p>
            </div>
            <div className="subSection">
                <span className="subSectionFooter">Sinta-se à vontade para mandar uma mensagem.</span>
                <p className="subSectionText">Obrigado por acompanhar meu processo de criação do aplicativo mobile e site responsivo do JobSearch. Se você quiser ver mais do meu trabalho olhe meu portfólio ou entre em contato comigo.</p>
                
            </div>
        </section>
        <Footer />
        </JobSearchContainer>
    )
}