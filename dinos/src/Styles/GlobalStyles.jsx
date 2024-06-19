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

.homepage-layout {
    display: flex;
    flex-direction: row;
}

.homepage-layout main {
    flex: 3;
    display: flex;
    flex-direction: column;
    max-width: 70%;
}

.homepage-layout aside {
    flex: 1;
    background-color: #0f161b;
}
`;





export default GlobalStyle;