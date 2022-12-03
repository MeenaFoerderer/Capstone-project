import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Poppins';
    src: url('/fonts/Roboto-Regular.ttf');
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
        padding-top: 50px;
        color: #1d1d1d;
        background-color: #f5f5f5;
    }

    main {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

// font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
export default GlobalStyles;
