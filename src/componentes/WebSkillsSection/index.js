import WebSkillsSectionContainer from './style';


export default function WebSkillsSection({data}) {
    return(
        <WebSkillsSectionContainer>
            <h1 className='skillSectionTitle'>Desenvolvimento Web</h1>
            {
                data.map((item, index) =>
                    <div key={index + 20} className='skillCard'>
                        <h2 className='skillCardTitle'>
                            {item.title}
                        </h2>
                        <div className='itemContainer'>
                            {
                                item.skills.map((element, index) => 
                                    <p className='skillCardItem' key={index}>{element}</p>
                                )
                            }
                        </div>
                    </div>
                )
            }
            
        </WebSkillsSectionContainer>
    )
};