import styled from "styled-components";

export const ContainerTitle = styled.div` //Container
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1px;
    margin: 2rem 0rem 0rem 0rem;

    h2{ //Title
    color: ${({ theme }) => theme.primaryColor};
    font-family: "Jersey 10", sans-serif;

    &::first-letter { //First Letter
    font-size: 50px;  
    }

    hr{ //Line
    width: 150px;
    border: 2px solid ${({ theme }) => theme.primaryColor};
    border-radius: 50px;
    margin: 0px 0px 2px 0px;
    padding: 0;
    }
    }

    p{ //Subtitle
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 20px;
    padding: 0;
    }
`