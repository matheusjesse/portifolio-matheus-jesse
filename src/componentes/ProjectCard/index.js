import { useState } from "react"
import ProjectCardContainer from "./style"

export default function ProjectCard({data, index}) {
    const [detailsClick, setDetailsClick] = useState(false);

    const generateUrl = () => {
        const technologies = data.details.technologies;
        const encodedTechnologies = technologies.join(',');
        const url = `https://skillicons.dev/icons?i=${encodedTechnologies}&theme=light&perline=6`;
      
        return url;
    }

    return(
        <ProjectCardContainer className={`animate glow delay-${index + 1}`} onClick={() => setDetailsClick(!detailsClick)}>
            <div className="imageContainer">
                <h1>{data.title}</h1>
                <h2>{data.subTitle}</h2>
                <div className="skillImage">
                    <a target="_blank" rel="noreferrer" href="https://skillicons.dev" >
                        <img src={generateUrl()} alt="icone de habilidades"/>
                    </a>
                </div>
            </div>
            <div className="textCard">                
                <p>{data.Description}</p>
                <a
                href={data.details.url}
                target="_blank"
                rel="noopener noreferrer"
                >Link do Projeto</a>
            </div>   

            
        </ProjectCardContainer>
    )
}