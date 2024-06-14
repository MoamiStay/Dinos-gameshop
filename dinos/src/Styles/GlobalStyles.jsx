import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    --color-primary: rgb(222, 134, 0);
    --color-secondary: rgb(222, 0, 0);
}


body {
    margin: 0;
    box-sizing: border-box;
    background-color: #0f161b;
    color: #d8d8d8;
}

.horizontal-list {
    display: flex;
}

.preview-carousel {
    width: 70%;
    background-color: #0f161b;
}

.top-width {
    width: 80%; 
    margin: auto;
}

.bot-width {
    width: 60%;
    margin: auto;
}

`;



export default GlobalStyle;