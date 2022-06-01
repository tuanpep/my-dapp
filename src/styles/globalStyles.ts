import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@font-face {
    font-family: 'Space Grotesk';
    src: url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&display=swap');
}

@font-face {
    font-family: 'Inter';
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
}
`;

export default GlobalStyles;