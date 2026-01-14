import styled from "styled-components";

export const ContainerFooter = styled.footer` //Footer
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    align-items: center;
    text-align: center;
    width: 100%;
    padding-bottom: 40px;
    margin-top: 40px;

    img{ //Logo
    width: 250px;
    }

    ul{ //Sections from Site 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    list-style: none;
    padding: 0;
    max-width: 350px;

    li{ //Sections from Site 
    a{
    text-decoration: none;
    color: ${({ theme }) => theme.text};

    &:hover{ //Effect
    color: ${({ theme }) => theme.primaryColor};;
    border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
    }
    }
    }
  }

    section{ //Icon Section
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    i{ //Icons
    color: ${({ theme }) => theme.text};
    font-size: 20px;
    transition: 0.5s;
    cursor: pointer;

    &:hover{ //Effect
    color: ${({ theme }) => theme.primaryColor};
    }
    }
  }

  .waves { //Animated Waves
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15vh;
    z-index: 0;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 150px;

    use{ //Animated Waves
    fill: ${({ theme }) => theme.primaryColorTranslucent};  
    }
}

    .content { //Animated Waves
    position: relative;
    height: 20vh;
    text-align: center;
    background-color: white;
    }

    .parallax>use { //Animated Waves
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    }

    .parallax>use:nth-child(1) { //Animated Waves
    animation-delay: -2s;
    animation-duration: 7s;
    }

    .parallax>use:nth-child(2) { //Animated Waves
    animation-delay: -3s;
    animation-duration: 10s;
    }

    .parallax>use:nth-child(3) { //Animated Waves
    animation-delay: -4s;
    animation-duration: 13s;
    }

    @keyframes move-forever { //Animated Waves
    0% {
    transform: translate3d(-90px, 0, 0);
    }
    100% {
    transform: translate3d(85px, 0, 0);
    }
    }

    @media (max-width: 768px) { //Responsive
    .waves {
    height: 40px;
    min-height: 40px;
    }

    .content {
    height: 30vh;
    }

    h1 {
    font-size: 24px;
    }
  }
`;

export const Text = styled.div` //Atributtes
    color: ${({ theme }) => theme.text};
    max-width: 500px;
`;
