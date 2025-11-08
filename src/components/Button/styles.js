import styled from "styled-components";

export const ContainerButton = styled.a`
    background-color: ${(props) => (props.variant === "secondary" ? "transparent" : "#fff")};
    border: ${(props) => (props.variant === "secondary" ? "1px solid #25D366" : "none")};
    color: ${(props) => (props.variant === "secondary" ? "#25D366" : "#000")};
    text-decoration: none;
    border-radius: 5px;
    padding: 14px;
    width: 100%;
    font-size: 16px;

    position: relative;
    z-index: 2;

    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover{
        background-color: ${(props) => (props.variant === "secondary" ? "#25D366" : "#ffffffc4")};
        color: ${(props) => (props.variant === "secondary" ? "#fff" : "#000")};
    }

  @media (max-width: 850px) {
    width: 150px;
  }

`;