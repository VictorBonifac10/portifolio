
import styled from 'styled-components'

export const PortfolioContainer = styled.div` //Portfolio
    margin: 0px 40px;
    padding: 20px 40px 40px 40px;

    @media(max-width: 900px){ //Responsive
    margin: 7px;
    padding: 7px;
    }
`;

export const ContainerProjectCard = styled.div`
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

`

export const ProjectCard = styled.div` //Card
    border-radius: 1rem;
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
    
    .content { //Card
    position: relative;
    z-index: 2;
    padding: 10px 20px;
    }

    &:hover{ //Effect
    transform: scale(1.02);
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 5px;
    }

    img{
        width: 100%;
    }
`;

export const Description = styled.div` //Project description container
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2{ //Project description
    color: ${({ theme }) => theme.primaryColor};
    margin-bottom: 30px;
    font-size: 30px;
    font-family: "Jersey 10", sans-serif;
    }
`;

export const Text = styled.p` //Text
    max-width: 900px;
    margin-bottom: 20px;
`;

export const StacksField = styled.div` //Stack container
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 50px;

    @media(max-width: 900px){ //Responsive
    justify-content: center;
    align-items: center;
    }
`;

export const Stack = styled.div` //Stacks
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 6px;
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.text};;
    border-radius: 5px;

    i{ //Icons
    font-size: 15px;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.text};;
    }
  
    p{ //Stack name
    font-size: 12px;
    margin: 0;
    padding: 0;
    }
`;

export const ButtonContainer = styled.div` //Button container
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media(max-width: 1000px){ //Responsive
    flex-wrap: wrap;
    }
`;

export const ActionButton = styled.button` //Button
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    text-align: center;
    background-color: transparent;
    color: ${({ theme }) => theme.primaryColor};
    border: 1px solid ${({ theme }) => theme.primaryColor};
    border-radius: 6px;
    padding: 10px;
    transition: 0.5s all;

    i{ //Icon Button
    padding: 0;
    margin: 0;
    }

    &:hover{ //Effect
    background-color: ${({ theme }) => theme.primaryColor};
    color: #fff;
    }
`
