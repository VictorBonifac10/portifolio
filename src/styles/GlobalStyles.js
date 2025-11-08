import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

    //All
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
    }

    //Body

    body{
        background-color: rgba(5, 6, 8, 1);
        background-image: radial-gradient(#1C1C1C 0.7px, transparent 0.7px);
        background-size: 25px 25px;
    }

    //Scroll

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #00fbff96;
        border-radius: 6px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.12); 
    }

    //Button

    button{
        cursor: pointer;
    }
    
`;

export default GlobalStyles;