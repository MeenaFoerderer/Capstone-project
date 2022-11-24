import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    * {
        box-sizing: border-box;
    }

    body {
        padding-top: 50px;
    }

    main {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export default GlobalStyles;
