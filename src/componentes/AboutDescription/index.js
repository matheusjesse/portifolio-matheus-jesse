import AboutDescriptionContainer from './style';

export default function AboutDescription() {
    return(
        <AboutDescriptionContainer>
            <h1 className='aboutTitle'>Matheus Jessé</h1>
            <h2 className='subTitle'>Olá,</h2>
            <p className='description'>
                Sou Desenvolvedor Web e UX designer, apaixonado por transformar ideias em soluções 
                reais que possam impactar positivamente a vida das pessoas.
            </p>
            <p className='subDescription'>
                Me especializei em desenvolvimento web e agora estou estudando UX design.
            </p>
            <p className='subDescription'>
                Além de programação e UX design, gosto de correr, jogar videogame e assistir séries.
            </p>
            <p className='subDescription'>
            — Morando atualmente em Queimados / Rio de Janeiro
            </p>
        </AboutDescriptionContainer>
    )
}