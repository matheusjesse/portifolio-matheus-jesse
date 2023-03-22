import styled from 'styled-components';

const WebSkillsSectionContainer = styled.div`
    width: 255px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: flex-start;
    .skillSectionTitle {
        font-family: 'Overpass', sans-serif;
        font-size: 14px;
        font-weight: 800;
        width: 255px;
        text-align: center;
    }

    .skillCardTitle {
        font-family: 'Overpass', sans-serif;
        font-size: 12px;
        color: #737373;
        font-weight: 800;
        text-decoration: underline;
        margin-top: 8px;
    }

    .skillCardItem {
        font-family: 'Overpass', sans-serif;
        font-size: 12px;
        color: #737373;
        width: 124px;
    }

    .itemContainer {
    }
`;
export default WebSkillsSectionContainer;
