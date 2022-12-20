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

    :root {
        --aubergine: #493843;
        --primary-text-color: #292929;
        --secondary-text-color: #474747;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: OpenSans, sans-serif;
        background-color: #e6e4e5;
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
