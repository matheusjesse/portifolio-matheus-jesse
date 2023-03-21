import CardMenuContainer from './style';
import {ImageContainer} from './style';
import LinkIcon from '../../assets/linkIcon.svg';

export default function CardMenu({image, altText, hoverText}) {
    return(
        <CardMenuContainer>
            <ImageContainer>
                <img src={image} alt={altText}/>
            </ImageContainer>
            <div className='hoverContent'>
                <p>{hoverText}</p>
                <img src={LinkIcon} alt="linkIcon"/>
            </div>
        </CardMenuContainer>
    )
};
