import styled from 'styled-components';

const UxSkillSectionContainer = styled.div`
    width: 255px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    margin-bottom: 28px;
    .uxSkillTitle {
        font-family: 'Overpass', sans-serif;
        font-size: 14px;
        font-weight: 800;
        width: 255px;
        text-align: center;
    }

    .uxSkillText {
        font-family: 'Overpass', sans-serif;
        font-size: 12px;
        color: #737373;
        width: 255px;
        text-align: center;
        margin-top: 8px;
    }
`;

export default UxSkillSectionContainer;
