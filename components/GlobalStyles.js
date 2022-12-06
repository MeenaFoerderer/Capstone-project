import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Poppins, sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    body {
        color: #1d1d1d;
        background-color: #E5E7EB;
    }

    main {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export default GlobalStyles;
