import ProjectCardContainer from "./style"

export default function ProjectCard({data}) {
    return(
        <ProjectCardContainer>
            <div className="imageContainer" style={{"backgroundColor": `${data.color}`}}>
                <img src={data.image} alt={data.imageAlt} />
                <p>{data.title}</p>
            </div>
            <div className="textCard">
                <h1>{data.subTitle}</h1>
                <p>{data.Description}</p>
            </div>
        </ProjectCardContainer>
    )
}