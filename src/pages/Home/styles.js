import { styled } from 'styled-components'
import { hexToRgba } from "../../utils/colorsFunction";

export const ContainerBody = styled.div`

`;

export const ContainerTop = styled.div`
    width: 100%;
    height: 100vh;
    
    img{
      width: 350px;
      position: relative;
      z-index: 2;
      margin-bottom: 25px;

        @media (max-width: 1085px) {
            max-width: 200px;
            margin-bottom: 20px;
        }
    }

    .containerBanner{

      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 120px 40px 0px 40px;
        
      @media (max-width: 1085px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 25px;
      }
    }
`;

export const Banner = styled.div`

    video{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      object-fit: cover;
      z-index: 0;
    }
`;

export const ContentLeft = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 2;

    @media (max-width: 1085px) {
        align-items: center;
    }

    span{
      font-weight: bold;
      color: #00fbff96;
      font-size: 50px;

    }
`;

export const FirstDescription = styled.p`
    max-width: 90%;

    color: #fff;
    font-weight: bold;
    font-size: 40px;

    position: relative;
    z-index: 2;

    margin-bottom: 20px;
    line-height: 50px;

    @media (max-width: 1085px) {
        font-size: 28px;
        line-height: 34px;
        max-width: 0%;
        text-align: center;
    }
`;

export const SecondDescription = styled.p`
    max-width: 70%;

    color: #fff;
    font-size: 20px;

    position: relative;
    z-index: 2;

    margin-bottom: 20px;

    @media (max-width: 1085px) {
        font-size: 15px;
        max-width: 70%;
    }

`;

export const ContentRight = styled.div`
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    gap: 15px;

    i{
        color: #fff;
        font-size: 25px;
        transition: 0.5s;
        cursor: pointer;

        &:hover{
        transform: scale(1.5);
        color: #00fbff96;
      }
    }

    @media (max-width: 1085px) {
        flex-direction: row;
        justify-content: center;
        margin-bottom: 30px;

    }
`;

export const ContainerMain = styled.main`

    section{
        display: flex;
        justify-content: center;
        padding: 10px;

        margin-bottom: 30px;
        margin-left: 0;
        margin-right: 0;
        border-right: 0;
        border-left: 0;

        background-color: #00fbff4e;       
    }

    #animated-text{
        display: flex;
        align-items: center;
        overflow-x: scroll;
        white-space: nowrap;
        scroll-behavior: auto;
        gap: 50px;
        max-width: 2000px;
    }

    #animated-text::-webkit-scrollbar {
        display: none;
    }

    .text-custom{
        padding: 0;
        margin: 0;
        color: #00fbff96;
        font-size: 98px;
        font-family: "Jersey 10", sans-serif;
    }

`;

export const ContainerAbout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    gap: 120px;
    padding: 0px 170px;
    margin:  40px 0px;

  @media (max-width: 1300px) {
    flex-direction: column;
    gap: 90px;
    margin-top: 80px;
  }

  .aboutText{
      @media (max-width: 1300px) {
        text-align: center;
        padding: 30px;
      }
  }

  .aboutImage {
    position: relative;
    width: 450px;
    height: 450px;
}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    display: block;
  }

  /* animate circle */

  .rotating-container {
    position: absolute;
    top: -85px;   
    right: -75px;
    z-index: 2;
    width: 200px;
    height: 200px;
    animation: rotate-text 10s linear infinite;
  }

  .inner-circle {
    fill: #00fbff96;
  }

  #text-on-path {
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 5px;
    fill: #00fbff96;
  }

  @keyframes rotate-text {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 600px) {
    .aboutImage {
      width: auto;
      height: 400px;
    }
    
    .rotating-container{
      right: 280px;
    }
}

`;

export const Text = styled.div`
    color: #fff;
    max-width: 500px;
`;

export const ContainerServices = styled.div`
  padding: 0px 170px;
  margin:  40px 0px;
  width: 100%;

  @media (max-width: 850px) {
    margin-top: 80px;
    padding: 50px 0px;
    text-align: center;
  }
`;

export const ContainerPortfolio = styled.div`
  position: relative; 
  width: 100%;
  overflow: hidden;
  margin:  40px 0px;
  padding: 70px;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .custom-button{
    width: 15%;
  }
  
  @media (max-width: 850px) {
      padding: 50px 20px;
      margin-top: 50px;
  }
`;

export const Mask = styled.div`
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
  z-index: 1;
`;

export const ContainerContact = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 220px;
  margin:  40px 0px;
  padding: 0px 170px;

  .content-contact-card{
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  @media(max-width: 1200px){
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`;

export const ContactCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.29);
  border-radius: 8px;
  width: 100%;
  padding: 10px 150px 10px 10px;
  color: #fff;
  transition: 1s;
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
    border: 1px solid #fff;
}

div{
  display: flex;
  align-items: center;
  gap: 10px;

  i{
    font-size: 30px;
  }

  h3{
    margin: 0;
    font-size: 20px;
  }

  @media(max-width: 1200px){
    justify-content: center;
    text-align: center;
  }
}

p{
  color: #808080ff;
  margin: 0;
}

  @media(max-width: 1200px){
    padding: 10px 50px 10px 50px;
  }

`;

export const TechnologiesContainer = styled.div`

  background-color: #00fbff4e;
  width: 100%;
  margin:  150px 0px;

  .titleContainer{
    padding: 20px 170px 0px 170px;
  }

  .techContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 30px 0px 50px 0px;
    overflow-x: auto;
    scroll-behavior: auto;

    &::-webkit-scrollbar {
      display: none;
      }
}
`;

export const TechBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  text-align: center;
  gap: 10px;

  width: 110px;
  height: 150px;

  background-color: rgba(255, 255, 255, 0.697);
  border-radius: 5px;

  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;

  i {
    font-size: 42px;
    flex-shrink: 0;
  }

  p {
    font-size: 13px;
  }

  &:hover {
    background-color: ${({ color }) => hexToRgba(color, 0.3)};
    border: 2px solid ${({ color }) => color};
    color: ${({ color }) => color};
    border-radius: 0;
    transform: scale(1.09);
  }
`;


export const AttributeContainer = styled.div`

display: flex;
flex-wrap: wrap;
margin-top: 50px;
padding: 10px 10px 10px 0px;
gap: 20px;
`;

export const AttributeCard = styled.div`
  border-radius: 1rem;
  padding: 2rem;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.29);
  position: relative;
  overflow: hidden;
  transition: 1s;
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
      border: 1px solid #fff;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 15px;
  max-width: 230px;
  gap: 15px;

  i {
    color: #00fbff96;
    border: 1px solid #00fbff96;
    border-radius: 50px;
    padding: 5px 9px;
    font-size: 17px;
  }

  p{
    margin: 0;
  }

`;