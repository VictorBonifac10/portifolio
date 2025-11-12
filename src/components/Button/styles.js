import styled from "styled-components";

export const ContainerButton = styled.a`
    background-color: ${({ theme, variant }) =>
    variant === "secondary" ? "transparent" : theme.bgButtonStandard};

    border: ${({ theme, variant }) =>
    variant === "secondary"
      ? `1px solid ${theme.blueHighlight}`
      : "none"};

    color: ${({ theme, variant }) =>
    variant === "secondary" ? theme.blueHighlight : theme.colorButtonStandard};

    text-decoration: none;
    font-style: none;
    border-radius: 5px;
    padding: 14px;
    width: 100%;
    font-size: 15px;

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

  &:hover {
    background-color: ${({ theme, variant }) =>
    variant === "secondary"
      ? theme.blueHighlight
      : theme.bgButtonStandard};

    color: ${({ theme, variant }) =>
    variant === "secondary"
      ? theme.bgButtonStandard
      : theme.colorButtonStandard};
  }

  @media (max-width: 850px) {
    width: 150px;
  }

`;