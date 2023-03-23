import AchievementsSectionContainer from './style';

export default function AchievementsSection({data}) {
    return(
        <AchievementsSectionContainer>
            <h1 className='achievementsTitle'>Conquistas</h1>
            <h2 className='achievementsSubTitle'>Certificados</h2>
            {
                data.map((item, index) => 
                    <div className='certificateContainer' key={index}>
                    <p className='certificateTitle'>{item.title}</p>
                        
                        {
                            item.certificate.map((element, i) => 
                                <p key={i + 20} className='certificateDescription'>{element}</p>
                            )
                        }
                    </div>
                    
                )
            }
        </AchievementsSectionContainer>
    )
}