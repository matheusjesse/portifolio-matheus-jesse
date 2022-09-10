import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #F5F5F5;
    font-family: 'Red Hat Text', sans-serif;
    
  }

  body {
    background: rgb(23,22,24);
    background: linear-gradient(40deg, rgba(23,22,29,1) 2%, rgba(16,27,30,2) 60%, rgba(24,23,29,1) 100%);
  }

`;
export default GlobalStyle;