import TodoIconSVG from '../assets/TodoIcon.svg';
import WalletIconSVG from '../assets/walletIcon.svg';
import CupIconSVG from '../assets/cupIcon.svg';
import DiverseIconSVG from '../assets/diverseIcon.svg';

export const webProjects = [
  {
    title: "API de ToDos",
    subTitle: "Uma API de ToDos e Registro de usuários",
    Description: `Uma API onde o usuário consegue criar 
    uma conta e gerenciar sua lista de afazeres, podendo 
    editar, deletar, registrar, além de poder classificar 
    os afazeres pelo dia da semana e período do dia.`,
    image: TodoIconSVG,
    imageAlt: "Uma ilustração de folha e caneta",
    color: "#CDFFE1"
  },
  {
    title: "Carteira Digital",
    subTitle: "Uma aplicação full-stack de transação de dinheiro.",
    Description: `Uma aplicação onde o usuário pode fazer cadastro 
    e visualizar sua carteira, além de fazer transações de dinheiro 
    para outros usuários cadastrados`,
    image: WalletIconSVG,
    imageAlt: "Uma ilustração de uma carteira com dinheiro saindo por cima",
    color: "#FFCCAF"
  },
  {
    title: "Aplicativo de Receitas",
    subTitle: "Uma aplicação front-end de receitas.",
    Description: `Uma aplicação de receitas, contendo 
    receitas tanto de bebidas e comidas, onde o usuário 
    pode escolher sua receita, filtrar e favoritas suas 
    opções favoritas. (desenvolvida em equipe)`,
    image: CupIconSVG,
    imageAlt: "Uma ilustração de um copo com canudo",
    color: "#FDF9A6"
  },
  {
    title: "Veja outros projetos no meu GitHub",
    subTitle: "Acesse meu GitHub e veja meus projetos pinados :)",
    Description: `O GitHub é usado para armazenar códigos de programação, 
    produzidos por desenvolvedores do mundo todo.`,
    image: DiverseIconSVG,
    imageAlt: "Uma ilustração de uma agenda, tablete e uma reguá um do lado do outro",
    color: "#E9D1FC"
  }
]