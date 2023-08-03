import styled from 'styled-components';

const ResponsiveSiteContainer = styled.body`   
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
  background: var(--material-theme-sys-light-surface, linear-gradient(0deg, rgba(0, 90, 193, 0.04) 0%, rgba(0, 90, 193, 0.04) 100%), #FAF9FD);
  
    .header-page {
        height: 200px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #112E2E;
        flex-wrap: wrap;
        margin-bottom: 64px;
        align-content: center;
    }

    .header-page  h1, h2{
        width: 100%;
        text-align: center;
        color: white;
    }

    .overall{
        width: 68%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .overrall-box{
        width:200px;
        margin: 14px;
        border-radius: 12px;
        padding: 8px;
    }
`
export default ResponsiveSiteContainer;
