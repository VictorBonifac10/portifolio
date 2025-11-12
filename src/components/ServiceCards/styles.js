import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;


export const Card = styled.div`
  border-radius: 1rem;
  padding: 2rem;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderStandard};
  position: relative;
  overflow: hidden;
  transition: 1s;
  width: 100%;
  background: linear-gradient(318deg, #2814da2b, #c012a627, #00aaff34, #1b1b1b3e, #0000002b);
  background-size: 1000% 1000%;
  
-webkit-animation: Coolgradient 41s linear infinite;
-moz-animation: Coolgradient 41s linear infinite;
-o-animation: Coolgradient 41s linear infinite;
animation: Coolgradient 41s linear infinite;

@-webkit-keyframes Coolgradient {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}
@-moz-keyframes Coolgradient {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}
@-o-keyframes Coolgradient {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}
@keyframes Coolgradient { 
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}

&:hover{
    transform: scale(1.05);
    border: 1px solid ${({ theme }) => theme.borderHoverEffect};;
}

  @media (max-width: 850px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1rem;
  position: relative;
  padding-top: 1.5rem;

  i {
    color: ${({ theme }) => theme.blueHighlight};;
    border: 1px solid ${({ theme }) => theme.blueHighlight};
    border-radius: 50px;
    padding: 5px 9px;
    font-size: 17px;
  }

  h4 {
    color: ${({ theme }) => theme.blueHighlight};;
    margin: 0;
    font-family: "Jersey 10", sans-serif;
  }

  @media (max-width: 850px) {
    justify-content: center;
  }
`;
