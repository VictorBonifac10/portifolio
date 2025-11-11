import styled from "styled-components";

export const ContainerTitle = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1px;
    margin: 0;

    h2{
        color: #00fbff96;
        font-family: "Jersey 10", sans-serif;

    &::first-letter {
        font-size: 50px;  
    }

    hr{
        width: 150px;
        border: 2px solid #00fbff96;
        border-radius: 50px;
        margin: 0px 0px 2px 0px;
        padding: 0;
    }
    
    }

    p{
        color: #ffffff96;
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 20px;
        padding: 0;
    }
`