import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    --color-primary: rgb(222, 134, 0);
    --color-secondary: rgb(222, 0, 0);
}


body {
    margin: 0;
    box-sizing: border-box;
}

.horizontal-list {
    display: flex;
}

`;



export default GlobalStyle;