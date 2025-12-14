import styled from "styled-components";

export const CardGrid = styled.div` //Card container
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 100%;
    margin: 0 auto;
    padding: 40px 16px;

    @media (max-width: 1200px) { //Responsive
    grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 850px) { //Responsive
    grid-template-columns: 1fr;
    }
  `;


export const Card = styled.div` //Card
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

    @-webkit-keyframes Coolgradient { //Card
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
    }

    @-moz-keyframes Coolgradient { //Card
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
    }

    @-o-keyframes Coolgradient { //Card
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
    }

    @keyframes Coolgradient { //Card
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
    }

    &:hover{ //Effect
    transform: scale(1.05);
    border: 1px solid ${({ theme }) => theme.borderHoverEffect};;
    }

    @media (max-width: 850px) { //Responsive
    justify-content: center;
    align-items: center;
    }
`;

export const CardTitle = styled.div` //Title container
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 1rem;
    position: relative;
    padding-top: 1.5rem;

    i { //Icon
    color: ${({ theme }) => theme.primaryColor};
    border: 1px solid ${({ theme }) => theme.primaryColor};
    border-radius: 50px;
    padding: 5px 9px;
    font-size: 17px;
    }

    h4 { //Title
    color: ${({ theme }) => theme.primaryColor};
    margin: 0;
    font-family: "Jersey 10", sans-serif;
    }

    @media (max-width: 850px) { //Responsive
    justify-content: center;
    }
`;
