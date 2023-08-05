import JobSearchContainer from "../styles/JobSearchContainer";
import MinImageMockup from "../assets/tresMockupScreenJobSearch.png";
import Header from "../componentes/Header";

export default function JobSearch() {
    return(
        <JobSearchContainer>
        <Header title="about"/>
        <header className='headerProject'>
            <div>
                <h1>Aplicativo Mobile Estudo de Caso</h1>
                <span className='subTitleHeader'>Delivery de comida</span>
            </div>
            <div className="img-container">
                <img className='headerImage' src={MinImageMockup} alt='mockup do 3 telas do iphone 14 com telas do aplicativo'/>
            </div>
        </header>
        </JobSearchContainer>
    )
}