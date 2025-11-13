import styled from "styled-components";

export const Button = styled.a`
  background-color: #000;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 8px;
  padding: 12px;
  width: clamp(200px, 80vw, 320px); 
  font-size: 12px;

  position: fixed;
  z-index: 3;
  bottom: 20px;
  right: 20px; 
  
  display: flex;
  align-items: center;
  text-align: start;
  gap: 14px;

  color: #fff;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s ease;
  background-image: ${({ theme }) => `
    linear-gradient(
      to right,
      ${theme.primaryColorTranslucent} 0%,
      ${theme.primaryColorTranslucent} 0%,
      #000 100%
    )
  `};
  background-size: 200% 150%;
  background-position: right bottom;
  transition: background-position 0.4s ease-out, color 0.3s ease;

  h2 {
    font-size: 30px;
    color: ${({ theme }) => theme.primaryColor};
    transition: color 0.3s ease;
    font-family: "Jersey 10", sans-serif;
  }

  i {
    font-size: 30px;
    color: ${({ theme }) => theme.primaryColor};
    transition: color 0.3s ease;
  }

  &:hover {
    background-position: left bottom;
    border: 1px solid #ffffffff;
  }

  @media (max-width: 480px) {
    right: 10px;
    bottom: 10px;
    padding: 10px;
    gap: 10px;

    h2 {
      font-size: 15px;
    }

    i {
      font-size: 24px;
    }
  }
`;
