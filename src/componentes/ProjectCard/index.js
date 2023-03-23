import { useState } from "react"
import ProjectCardContainer from "./style"
import DetailsProject from '../DetailsProject';

export default function ProjectCard({data}) {
    const [detailsClick, setDetailsClick] = useState(false);
    return(
        <ProjectCardContainer onClick={() => setDetailsClick(!detailsClick)}>
            <div className="imageContainer" style={{"backgroundColor": `${data.color}`}}>
                <img style={{height: "128px"}} src={data.image} alt={data.imageAlt} />
                <p>{data.title}</p>
            </div>
            <div className="textCard">
                <h1>{data.subTitle}</h1>
                <p>{data.Description}</p>
            </div>
            <DetailsProject 
                classEffect={detailsClick}
                details={data.details}
                title={data.title}
            />
        </ProjectCardContainer>
    )
}