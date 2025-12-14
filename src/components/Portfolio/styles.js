
import styled from 'styled-components'

export const PortfolioContainer = styled.div` //Portfolio
    margin: 0px 40px;
    padding: 20px 40px 40px 40px;

    @media(max-width: 900px){ //Responsive
    margin: 7px;
    padding: 7px;
    }

    .main-swiper{ //Styles from Swiper
    padding: 20px;
    }

    .main-swiper img { //Styles from Swiper
    width: 60%;
    height: 350px;
    object-fit: cover;
    padding: 40px;
    transform: perspective(800px) rotateY(-25deg);
    position: relative;
    z-index: 2;

    @media(max-width: 900px){ //Styles from Swiper
    width: 100%;
    height: 115px;
    padding: 0;
    }
    }

    .swiper-button-next { //Styles from Swiper
    color: ${({ theme }) => theme.primaryColor};
    width: 15px;
    right: 30px;
    }

    .swiper-button-prev { //Styles from Swiper
    color: ${({ theme }) => theme.primaryColor};
    width: 15px;
    left: 35px;
    }

    .thumbs-swiper { //Styles from Swiper
    display: flex;
    width: 100%;
    margin-top: 6px;
    }

    .thumbs-swiper .swiper-wrapper { //Styles from Swiper
    justify-content: center !important;
    }

    .thumbs-swiper img { //Styles from Swiper
    width: 100%;
    height: 80px;
    object-fit: cover;
    opacity: 0.4;
    cursor: pointer;
    }

    .thumbs-swiper .swiper-slide-thumb-active img { //Styles from Swiper
    opacity: 1;
    }
`;

export const ProjectCard = styled.div` //Card
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    overflow: hidden;
    gap: 20px;
    border: 1px solid ${({ theme }) => theme.border};;
    border-radius: 15px;
    padding: 40px 60px;
    color: #fff;
    transition: 1s;

    @media(max-width: 900px){ //Responsive
    flex-direction: column;
    text-align: center;
    }

    video { //Background video
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    }
    
    .content { //Card
    position: relative;
    z-index: 2;
    }

    &:hover{ //Effect
    transform: scale(1.02);
    border: 1px solid ${({ theme }) => theme.border};;
    border-radius: 5px;
    }
`;

export const Mask = styled.div` //Mask from background
    background: linear-gradient(
    109deg,
    rgba(10, 12, 16, 0.9) 15%,
    rgba(10, 12, 16, 0.21) 50%,
    rgba(10, 12, 16, 0.9) 85%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
`;

export const Description = styled.div` //Project description container
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2{ //Project description
    color: ${({ theme }) => theme.primaryColor};
    margin-bottom: 30px;
    font-size: 40px;
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
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;

    i{ //Icons
    font-size: 15px;
    margin: 0;
    padding: 0;
    color: #fff;
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
