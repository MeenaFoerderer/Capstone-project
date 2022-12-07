import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @font-face {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    @font-face {
        font-family: 'RubikDirt';
        src: url("/fonts/RubikDirt-Regular.ttf");
        }
    
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    body {
        _background-color: #f9f9f9;
        background-color: #e6e4e5;
    }

    main {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export default GlobalStyles;
