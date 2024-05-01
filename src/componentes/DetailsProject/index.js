import DetailsProjectContainer from './style'

export default function DetailsProject({details, title, classEffect}) {
    return(
        <DetailsProjectContainer >
            <div className={`menuProjectWeb ${!classEffect ? "hiden" : "visible"}` }>
                <h1 className='detailsTitle'>
                    {title}
                </h1>
                {
                    title === "Carteira Digital" ? <div></div> :
                    <img src={details.image} alt={details.imageAlt}/>
                }
                <div className='container'>
                    <div className='detailsSection'>
                        <div className='subTitle'>Descrição</div>
                        <div className='descriptionTitle'>{details.text}</div>
                    </div>
                    <div className='tecnologiesSection'>
                        <div className='subTitle'>Tecnologias</div>
                        {
                            details.technologies.map((element, index) => 
                                <div className='technologiesText' key={index}>{element}</div>
                            )
                        }
                    </div>
                </div>
                <hr style={{width: "100%", visibility: "hidden"}} />
                
            </div>
        </DetailsProjectContainer>
    )
}