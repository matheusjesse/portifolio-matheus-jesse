import UxSkillSectionContainer from './style';

export default function UxSkillSection({data}) {
    return(
        <UxSkillSectionContainer>
            <h1 className='uxSkillTitle'>Ux Design</h1>
            {
                data.map((item, index) =>
                    <p className='uxSkillText' key={index}>{item}</p>
                )
            }
        </UxSkillSectionContainer>
    )
}