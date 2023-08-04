import ResponsiveSiteContainer from "../styles/ResponsiveSiteContainer";
import Header from '../componentes/Header';
import PersonaSite from '../assets/personaSiteTutorial.png';
import StartingDesign from '../assets/iniciandoDesign.png';
import mockupChangeBlog from '../assets/mockupChangeBlog.png';
import HomePageBlog from '../assets/homePageBlog.png';
import HomePageBlogMobile from '../assets/homePageBlogMobile.png';
import TutorialpageBlogMobile from '../assets/tutorialPageBlogMobile.png';
import TutorialReadPageMobile from '../assets/tutorialReadPageMobile.png';
import Footer from "../componentes/Footer";

function ResponsiveSite() {
  return(   
    <ResponsiveSiteContainer>
        <Header title="about"/>
        <div className="header-page">
            <h1>Site Responsivo Estudo de Caso</h1>
            <h2>Blog de tutoriais</h2>
        </div>
        <div className="overall">
            <span className="subTitle">Visão geral</span>
            <div className="overrall-box">
                <h3>O produto:</h3>
                <p>
                    CodeMT é um site de programação com tutoriais relacionados
                     a Front-End, os principais interessados são pessoas que 
                     estão interessados a aprender programar ou se manter 
                     atualizado nas novidades.
                </p>
            </div>
            <div className="overrall-box">
                <h3>Duração do projeto:</h3>
                <p>
                    21 de junho à 07 de julho
                </p>
            </div>
            <div className="overrall-box">
                <h3>O Problema:</h3>
                <p>
                    Criar um site intuitivo e conciso que de fácil navegação, criando uma boa experiência para o usuário.
                </p>
            </div>
            <div className="overrall-box">
                <h3>O objetivo:</h3>
                <p>
                    Desenvolver um site que seja objetivo e que possa fornecer ao usuário uma boa experiência navegando entre os tutoriais e consumindo o conteúdo disponível.
                </p>
            </div>
            <div className="overrall-box">
                <h3>Minha função:</h3>
                <p>
                    UX leader, UX research, UX design
                </p>
            </div>
            <div className="overrall-box">
                <h3>Responsabilidades:</h3>
                <p>
                    Conduzir entrevista, criar wireframes de baixa e alta fidelidade, prototipos, estudos de usabilidade, considerações de acessibilidade e design responsivo. 
                </p>
            </div>
        </div>
        <div className="undestandingTheUser">
            <span className="subTitle">Entendendo o Usuário</span>
            <div className="userResearch">
                <span className="userResearchTitle">Pesquisa do usuário</span>
                <p className="userResearchText">Conduzi entrevista com usuários, depois criei mapas de empatia para entender melhor as necessidades do usuário. Descobri que muitos usuários pensam em site de tutoriais como uma oportunidade para expandir seus conhecimentos e explorar novas áreas de aprendizado. No entanto muitos sites de tutoriais são muito descritivos e extenso em texto com poucos exemplos visuais que torna a experiência do usuário frustrante e acaba fazendo com que a pessoa desista de seguir o tutorial.</p>
            </div>
            <section className="pointsSection">
                <div className="userResearchPoints">
                    <span className="pointsTitle">Navegação</span>
                    <p className="pointsText">Alguns sites de tutoriais tem uma navegação muito confusa com muitos detalhes o que frustra o usuário.</p>
                </div>
                <div className="userResearchPoints">
                    <span className="pointsTitle">Imerção</span>
                    <p className="pointsText">A falta de imagens para ilustrar o tutorial pode reduzir a imersão do usuário com o conteúdo, fazendo ele desistir de seguir com o tutorial.</p>
                </div>
                <div className="userResearchPoints">
                    <span className="pointsTitle">Interação</span>
                    <p className="pointsText">Falta de opção para poder deixar um comentário ou feedback pode fazer com que o usuário sinta frustrado ao ver um tutorial e não puder interagir.</p>
                </div>
            </section>
            <div className="userResearch">
                <span className="userResearchTitle">Persona</span>
                <div className="imgContainer">
                    <img className="personaLucas" src={PersonaSite} alt="Imagem contendo foto da persona contendo objetivos frustrações e informações demograficas" />
                </div>
            </div>
        </div>
        <div className="startingDesign">
            <span className="subTitle">Começando o design</span>
            <div className="resumeDesign">                
                <p className="userResearchText">O primeiro passo foi fazer a criação do mapa do site, meu objetivo foi criar uma site cujo fosse simples com poucas paginas, mas que não deixasse nada de lado, para que o usuário tenha uma boa experiência navegando. Em seguida passei para criação do wireframe de papel, Utilizei papel e caneta para fazer alguns wireframes para a tela principal para que eu pudesse compartilhar e receber feedbacks de como seria a melhor forma de organizar a tela. Feito isso passei para o computador para fazer o wireframe digital e prototipagem para que fosse possivel efetuar o estudo de usabilidade para achar pontos de melhoria antes de passar para o prototipo de alta fidelidade.</p>
            </div>
            <div className="imgContainer">
                <img className="personaLucas" src={StartingDesign} alt="Imagens de todas as tela do site do mockup de baixa fidelidade" />
            </div>
            <div className="userResearch">
                <span className="userResearchTitle">Estudo de usabilidade</span>
                <p className="userResearchText">Efetuei um estudo de usabilidade não moderado, com cinco participantes, com duração de trinta minutos em média, após a análise do estudo pude notar dois pontos importantes para ajudar a guiar o design.</p>
            </div>
            <section className="pointsSection">
                <div className="userResearchPoints">
                    <span className="pointsTitle">Navegação</span>
                    <p className="pointsText">Alguns usuários tinham dificuldade de navegar entre os tópicos apos ja terem selecionado um assunto.</p>
                </div>
                <div className="userResearchPoints">
                    <span className="pointsTitle">Interação</span>
                    <p className="pointsText">Usuários não tinham uma forma de interagir ou deixar feedbacks após acessar um conteúdo.</p>
                </div>
            </section>            
        </div>
        <div className="startingDesign">
            <span className="subTitle">Aperfeiçoando o design</span>
            <div className="userResearch">
                <span className="userResearchTitle">Mockup</span>
                <p className="userResearchText">Baseado nos feedback de estudo de usabilidade, eu fiz mudanças para melhorar a interação que o usuário tem com o tutorial, adicionando uma seção para que o usuário possa  enviar alguma informação sobre o tutorial, ou tirar alguma dúvida na seção de comentários.</p>
            </div>
            <div className="imgContainer">
                <img className="personaLucas" src={mockupChangeBlog} alt="Duas imagens para comparação da tela na versão de baixa fidelidade e de alta fidelidade depois do estudo de usabilidade." />
            </div>
            <div className="userResearch">
                <span className="userResearchTitle">Tela Original</span>
            </div>
            <div className="imgContainer">
                <img className="personaLucas" src={HomePageBlog} alt="Imagem da pagina inicial do site na versão desktop" />
            </div>
            <div className="userResearch">
                <span className="userResearchTitle">Tela Mobile</span>
            </div>
            <div className="imgContainerMobile">
                <img className="mobile-phone" src={HomePageBlogMobile} alt="Imagem contendo a pagina inicial do site na versão mobile" />
                <img className="mobile-phone" src={TutorialReadPageMobile} alt="Imagem contendo a pagina com lista de tutoriais do site na versão mobile" />
                <img className="mobile-phone" src={TutorialpageBlogMobile} alt="Imagem contendo a pagina para leitura do site na versão mobile" />
            </div>
            <div className="userResearch">
                <span className="userResearchTitle">Considerações de acessibilidade</span>
            </div>
            <section className="pointsSection">
                <div className="userResearchPoints">
                    <span className="pointsTitle">1</span>
                    <p className="pointsText">Utilizei titulos com diferentes tamanho de texto para fácil visualização da hierarquia entre eles.</p>
                </div>
                <div className="userResearchPoints">
                    <span className="pointsTitle">2</span>
                    <p className="pointsText">O contraste de cores foi pensado para não dificultar a leitura de pessoas que possam ter alguma dificuldade.</p>
                </div>
                <div className="userResearchPoints">
                    <span className="pointsTitle">3</span>
                    <p className="pointsText">Utilização de descrição nas imagens para facilitar a utilização de leitores de tela.</p>
                </div>
            </section>      
        </div>
        <div className="startingDesign">
            <span className="subTitle">Em diante</span>
            
            <section className="pointsSection">
                <div className="userResearchPoints">
                    <span className="pointsTitle">Impacto</span>
                    <p className="pointsText">Nosso público alvo disse que o design é intuitivo e fácil de navegar, que a cessão de feedbacks e comentários pode fornecer uma troca maior de conhecimento e oportunidade de melhoria tornando a experiência mais engajante.</p>
                </div>
                <div className="userResearchPoints">
                    <span className="pointsTitle">O que aprendi</span>
                    <p className="pointsText">A importância de realizar entrevistas para receber feedback em cada passo da criação do projeto. Por que é nesse momento que a gente tem a oportunidade de entender e sanar as necessidades do usuário.</p>
                </div>
                <div className="userResearchPoints">
                    <span className="pointsTitle">Próximos passos</span>
                    <p className="pointsText">Conduzir um novo estudo de usabilidade no site e Identificar novas oportunidades de melhorias para tornar o site mais interativo.</p>
                </div>                
            </section>
            <div className="footer-section">
                <span className="footer-title">Sinta-se à vontade para mandar uma mensagem.</span>
                <p className="">Obrigado por acompanhar meu processo de criação do site de tutoriais.Se você quiser ver mais do meu trabalho olhe meu portfólio ou entre em contato comigo.</p>
            </div>       
        </div>
        <Footer />
    </ResponsiveSiteContainer>    
  );
}

export default ResponsiveSite;
