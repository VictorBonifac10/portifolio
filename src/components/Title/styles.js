import styled from "styled-components";

export const ContainerTitle = styled.div`
    display: flex;
    //background-color: yellow;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1px;
    margin: 0;

    h2{
        color: ${({ theme }) => theme.primaryColor};
        font-family: "Jersey 10", sans-serif;

    &::first-letter {
        font-size: 50px;  
    }

    hr{
        width: 150px;
        border: 2px solid ${({ theme }) => theme.primaryColor};
        border-radius: 50px;
        margin: 0px 0px 2px 0px;
        padding: 0;
    }
    
    }

    p{
        color: ${({ theme }) => theme.text};
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 20px;
        padding: 0;
    }
`