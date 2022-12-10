import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @font-face {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    @font-face {
        font-family: 'RubikDirt';
        src: url("/fonts/RubikDirt-Regular.ttf");
        }

    @font-face {
        font-family: 'OpenSans';
        src: url("/fonts/OpenSans-VariableFont_wdth,wght.ttf");
        }

    @font-face {
        font-family: 'OpenSans-SemiBold';
        src: url("/fonts/OpenSans-SemiBold.ttf")
    }
    
    @font-face {
        font-family: 'OpenSans-Bold';
        src: url("/fonts/OpenSans-Bold.ttf")
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: OpenSans, sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    body {
        background-color: #e6e4e5;
        font-family: OpenSans;
    }
`;

export default GlobalStyles;
