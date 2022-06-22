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
    background: #002937;
    background: -moz-linear-gradient(top, #002937 0%, #177795 64%, #002937 100%);
    background: -webkit-linear-gradient(top, #002937 0%, #177795 64%, #002937 100%);
    background: linear-gradient(to bottom, #002937 0%, #177795 64%, #002937 100%);
  }

`;
export default GlobalStyle;