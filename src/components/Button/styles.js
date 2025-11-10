import styled from "styled-components";

export const ContainerButton = styled.a`
    background-color: ${(props) => (props.variant === "secondary" ? "transparent" : "#fff")};
    border: ${(props) => (props.variant === "secondary" ? "1px solid #00fbff96" : "none")};
    color: ${(props) => (props.variant === "secondary" ? "#00fbff96" : "#000")};
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
    text-align: center;
    gap: 7px;
    cursor: pointer;
    transition: 0.5s all;

    &:hover{
        background-color: ${(props) => (props.variant === "secondary" ? "#00fbff96" : "#ffffffc4")};
        color: ${(props) => (props.variant === "secondary" ? "#fff" : "#000")};
    }

  @media (max-width: 850px) {
    width: 150px;
  }

`;