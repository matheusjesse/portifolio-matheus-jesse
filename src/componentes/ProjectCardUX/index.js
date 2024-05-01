import ProjectCardUxContainer from "./style"
import { Link } from "react-router-dom";
import LinkIcon from '../../assets/linkIcon.svg';

export default function ProjectCardUX({data}) {

    return(
        <ProjectCardUxContainer className="animate glow delay-1">
            <Link to={data.link}>
                <div className="imageContainer" style={{"backgroundColor": `${data.color}`}}>
                    <h1>{data.title}</h1>
                </div>
                <div className="textCard">
                    <h2>{data.subTitle}</h2>
                    <p>{data.Description}</p>
                </div>
                    <img src={LinkIcon} alt="linkIcon"/>
            </Link>
        </ProjectCardUxContainer>
    )
}