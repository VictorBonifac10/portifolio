import styled from "styled-components";

export const ContainerFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-bottom: 40px;

  img{
    width: 250px;
  }

  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    list-style: none;
    padding: 0;
    max-width: 300px;

  li{
    a{
      text-decoration: none;
      color: ${({ theme }) => theme.text};

      &:hover{
        color: ${({ theme }) => theme.primaryColor};;
        border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
      }
     }
    }
  }

  section{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    i{
      color: ${({ theme }) => theme.text};
      font-size: 20px;
      transition: 0.5s;
      cursor: pointer;

      &:hover{
        color: ${({ theme }) => theme.primaryColor};
      }
    }
  }

  //Animated Waves

  .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15vh;
    z-index: 0;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 150px;

    use{
      fill: ${({ theme }) => theme.primaryColorTranslucent};  
    }
}

  .content {
      position: relative;
      height: 20vh;
      text-align: center;
      background-color: white;
  }

  .parallax>use {
      animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  .parallax>use:nth-child(1) {
      animation-delay: -2s;
      animation-duration: 7s;
  }

  .parallax>use:nth-child(2) {
      animation-delay: -3s;
      animation-duration: 10s;
  }

  .parallax>use:nth-child(3) {
      animation-delay: -4s;
      animation-duration: 13s;
  }

  @keyframes move-forever {
      0% {
          transform: translate3d(-90px, 0, 0);
      }

      100% {
          transform: translate3d(85px, 0, 0);
      }
  }

  @media (max-width: 768px) {
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

export const Text = styled.div`
    color: ${({ theme }) => theme.text};
    max-width: 500px;
`;
