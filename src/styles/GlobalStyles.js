import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

    //All
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    //Body

    body{
    background-color: ${({ theme }) => theme.bg};
    background-image: radial-gradient(${({ theme }) => theme.bgPoint} 0.7px, transparent 0.7px);
    background-size: 25px 25px;

    color: ${({ theme }) => theme.text};
    }

    //Scroll

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color:  ${({ theme }) => theme.primaryColor};
        border-radius: 6px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.12); 
    }

    //Button

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        font-style: none;
    }
    
`;

export default GlobalStyles;