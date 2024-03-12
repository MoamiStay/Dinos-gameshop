import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    --color-primary: rgb(222, 134, 0);
    --color-secondary: rgb(222, 0, 0);
}

.headerRed {
    color: red;
    font-size: 10rem;
}

.copytext {
    color: ${(props) => props.theme.color.primary};
}

`;

export default GlobalStyle;