import TodoIconSVG from '../assets/TodoIcon.svg';
import WalletIconSVG from '../assets/walletIcon.svg';
import CupIconSVG from '../assets/cupIcon.svg';
import MusicIconSVG from '../assets/musicaIcon.svg';
import TodoImage from '../assets/todoapi.png';
import CarteiraDigital from '../assets/carteiraDigitalImage.png';
import RecipeImage from '../assets/recipeApp.png';
import MusicApp from '../assets/aplicacaomusica.png';
import CardDeliveryProject from '../assets/cardDeliveryProject.png';
import HomePageBlog from '../assets/homePageBlog.png';
import MinImageMockup from "../assets/tresMockupScreenJobSearch.png";

export const webProjects = [
  {
    id: 1,
    title: "API de ToDos",
    subTitle: "Uma API de ToDos e Registro de usuários",
    Description: `Uma API onde o usuário consegue criar 
    uma conta e gerenciar sua lista de afazeres, podendo 
    editar, deletar, registrar, além de poder classificar 
    os afazeres pelo dia da semana e período do dia.`,
    image: TodoIconSVG,
    imageAlt: "Uma ilustração de folha e caneta",
    color: "#CDFFE1",
    details: {
      url: "https://github.com/matheusjesse/todo-api",
      image: TodoImage,
      imageAlt: "uma imagem que mostra uma lista com chamadas de API",
      text: `A proposta do projeto foi
      desenvolver uma API para gerenciar um aplicativo de afazeres,
      afim de praticar as tecnologias listadas a baixo.`,
      technologies: [
        "TypeScript",
        "Node.JS",
        "Express.JS",
        "Test de Integração (mocha, chai, sinon)",
        "Sequelize(db: MySQL)",
        "Biblioteca Joi",
        "Biblioteca Jsonwebtoken"
      ]
    }
  },
  {
    id: 2,
    title: "Carteira Digital",
    subTitle: "Uma aplicação full-stack de transação de dinheiro.",
    Description: `Uma aplicação onde o usuário pode fazer cadastro 
    e visualizar sua carteira, além de fazer transações de dinheiro 
    para outros usuários cadastrados`,
    image: WalletIconSVG,
    imageAlt: "Uma ilustração de uma carteira com dinheiro saindo por cima",
    color: "#FFCCAF",
    details: {
      url: "https://github.com/matheusjesse/carteira-digital",
      image: CarteiraDigital,
      imageAlt: "Um formulario onde tem dois campos para o usuário colocar seu usuário e senha e também um botão para fazer login",
      text: `Um projeto web full-stack, onde foi desenvolvido um back-end para que 
      usuário possa se cadastrar e fazer transferência de dinheiro, além do 
      front-end para que o usuário possa interagir com a aplicação.`,
      technologies: [
        "React.JS",
        "Styled-Components",
        "Context",
        "Node.JS",
        "Express.JS",
        "TypeScript",
        "MongoDB",
      ]
    }
  },
  {
    id: 3,
    title: "Aplicativo de Receitas",
    subTitle: "Uma aplicação front-end de receitas.",
    Description: `Uma aplicação de receitas, contendo 
    receitas tanto de bebidas e comidas, onde o usuário 
    pode escolher sua receita, filtrar e favoritas suas 
    opções favoritas. (desenvolvida em equipe)`,
    image: CupIconSVG,
    imageAlt: "Uma ilustração de um copo com canudo",
    color: "#FDF9A6",
    details: {
      url: "https://github.com/matheusjesse/recipes-app",
      image: RecipeImage,
      imageAlt: "Um imagem de celular onde mostra a tela inicial de um aplicativo de receitas com algumas imagens de comida.",
      text: `O desafio foi desenvolver o front-end de uma aplicação web utilizando 
      o end-point de uma API pública. O TheMealDB é um banco de dados aberto, mantido 
      pela comunidade, com receitas e ingredientes.`,
      technologies: [
        "JavaScript",
        "Styled-Components",
        "React.JS",
        "Metodologia ágil Scrum",
        "HTML",
        "CSS",
        "Context",
      ]
    }
  },
  {
    id: 4,
    title: "Aplicação de Música",
    subTitle: "Uma Aplicação front-end de Músicas.",
    Description: `Uma aplicação que o usuário pode digitar seu nome
    para entrar e pesquisar músicas de sua escolha.`,
    image: MusicIconSVG,
    imageAlt: "Uma ilustração de uma agenda, tablete e uma reguá um do lado do outro",
    color: "#E9D1FC",
    details: {
      url: "https://github.com/matheusjesse/projeto-trybetunes",
      image: MusicApp,
      imageAlt: "Uma imagem de celular que mostra um aplicativo de música com uma lista de músicas da banda Queen.",
      text: `O desafio do projeto foi consumir uma API de música e desenvolver 
      o front-end da aplicação, para que o usuário pudesse, pesquisar suas musicas 
      e cantores favoritos, além de poder favoritar as músicas e dar play.`,
      technologies: [
        "JavaScript",
        "React",
        "Styled-Components",
        "Ciclo de vida de componente React",
        "HTML",
        "CSS",
      ]
    }
  }
]

export const webProjectsUX = [
  {
    id: 1,
    title: "Aplicativo de Delivery",
    subTitle: "Estudo de caso para um aplicativo mobile de delivery.",
    Description: `Estudo de caso de um aplicativo de delivery para um restaurante local.`,
    image: CardDeliveryProject,
    imageAlt: "Uma imagem de três celulares e mostrando na tela o aplicativo.",
    color: "#0F6134",
    link:  "/deliveryApp",
  },
  {
    id: 2,
    title: "Blog de Tutoriais",
    subTitle: "Estudo de caso para um blog de tutoriais.",
    Description: `Estudo de caso de um blog de tutoriais responsivo.`,
    image: HomePageBlog,
    imageAlt: "Imagem contem um mockup de alta fidelidade da pagina inicial do blog.",
    color: "#112E2E",
    link:  "/responsiveSite",
  },
  {
    id: 3,
    title: "Serviço de busca de emprego",
    subTitle: "Estudo de caso para um serviço de busca de emprego.",
    Description: `Estudo de caso de um App e site responsivo de procura de emprego.`,
    image: MinImageMockup,
    imageAlt: "Uma imagem de três celulares e mostrando na tela o aplicativo.",
    color: "#006971",
    link:  "/jobSearch",
  }]

  