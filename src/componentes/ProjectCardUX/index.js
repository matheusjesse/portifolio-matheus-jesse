import ProjectCardUxContainer from "./style"
import { Link } from "react-router-dom";

export default function ProjectCardUX({data}) {

    return(
        <ProjectCardUxContainer>
            <Link to={data.link}>
                <div className="imageContainer" style={{"backgroundColor": `${data.color}`}}>
                    <img style={{height: "128px"}} src={data.image} alt={data.imageAlt} />
                    <p>{data.title}</p>
                </div>
                <div className="textCard">
                    <h1>{data.subTitle}</h1>
                    <p>{data.Description}</p>
                </div>
            </Link>
        </ProjectCardUxContainer>
    )
}