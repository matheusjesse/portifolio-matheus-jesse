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
    background: linear-gradient(90deg, rgba(23,22,24,1) 0%, rgba(38,37,37,1) 50%, rgba(24,23,20,1) 100%);
  }

`;
export default GlobalStyle;