import { styled } from 'styled-components'
import { hexToRgba } from "../../utils/colorsFunction";

export const Body = styled.div``;

export const TopContainer = styled.div` //Introduction Container
    width: 100%;
    height: 100vh;
`;

export const Banner = styled.div` //Video container
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 120px 40px 0px 40px;

    video { //Video
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 0;
    };

    #mask{
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
    }

    img { //Logo
    width: 350px;
    position: relative;
    z-index: 2;
    margin-bottom: 25px;

    @media (max-width: 850px) { //Responsive Logo
    max-width: 200px;
    margin-bottom: 20px;
    }
  };

    @media (max-width: 850px) { //Responsive  container
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 25px;
    };
`;

export const LeftContent = styled.div` //Left written content
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 2;

    #typeWriter{
    color: ${({ theme }) => theme.primaryColor};
    font-size: 50px;
    font-family: "Jersey 10", sans-serif;
    line-height: 30px;
    }

    #firstDescription{
    max-width: 90%;
    color: #fff;
    font-weight: bold;
    font-size: 40px;
    position: relative;
    z-index: 2;
    margin-bottom: 20px;
    line-height: 50px;
    }

    #secondDescription{
    max-width: 70%;
    color: #fff;
    font-size: 20px;
    position: relative;
    z-index: 2;
    margin-bottom: 20px;
    }

    #customButton{ //Introduction button "Veja Mais"
    width: 20%;

    @media (max-width: 850px) { //Responsive introduction button "Veja Mais"
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    };
  }
`;

export const RightContent = styled.div` //RightContent from containerBanner
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 15px;

    i{ //Icons (RightContent) from containerBanner
    color: #fff;
    font-size: 25px;
    transition: 0.5s;
    cursor: pointer;

    &:hover{ //Hover Icons (RightContent) from containerBanner
    color: ${({ theme }) => theme.primaryColor};
    };
  };

    @media (max-width: 850px) {  //Responsive rightContent from containerBanner
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;
    };
`;

export const Main = styled.main` //Main

    #animatedSection { //Animeted Section
    display: flex;
    justify-content: center;
    padding: 10px;
    margin-left: 0;
    margin-right: 0;
    border-right: 0;
    border-left: 0;
    background-color: ${({ theme }) => theme.primaryColorTranslucent};  
    };

    #animatedText { //Animeted Section
    display: flex;
    align-items: center;
    overflow-x: scroll;
    white-space: nowrap;
    scroll-behavior: auto;
    gap: 50px;
    max-width: 2000px;
    };

    #animatedText::-webkit-scrollbar { //Animeted Section
    display: none;
    };

    .textCustom { //Animeted Section
    padding: 0;
    margin: 0;
    font-size: 98px;
    font-family: "Jersey 10", sans-serif;
    color: ${({ theme }) => theme.primaryColor};
    };
`;

export const AboutContainer = styled.div` //About Container
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 120px;
    padding: 0px 170px;
    //background-color: green;

    @media (max-width: 850px) { //Responsive aboutSection
    flex-direction: column;
    margin-bottom: 70px;
    padding: 0px 20px;
    gap: 90px;
    };

    @media (max-width: 420px) { //Responsive aboutSection
    margin-bottom: 150px;
    };

    #sectionAboutText { //Container that holds the written content and others cards of aboutSection

    .textContainer {
    color: #fff;
    max-width: 500px;
    color: ${({ theme }) => theme.text};
    };

    @media (max-width: 850px){
    text-align: center;
    padding: 10px;
    margin-top: 90px;
    width: 100%;
    font-size: 15px;
    };

    @media(max-width: 400px){ //Responsive aboutText
    margin-top: 120px;
    }
  };

    #sectionAboutImage { //Container About Image
    position: relative;
    width: 450px;
    height: 450px;

    img { //Image
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    display: block;
    };

    .rotating-container { //Animated Circle
    position: absolute;
    top: -85px;   
    right: -75px;
    z-index: 2;
    width: 200px;
    height: 200px;
    animation: rotate-text 10s linear infinite;
    };

    .inner-circle { //Animated Circle
    fill: ${({ theme }) => theme.primaryColor};
    };

    #text-on-path { //Animated Circle
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 5px;
    fill: ${({ theme }) => theme.primaryColor};
    font-family: "Jersey 10", sans-serif;
    };

    @keyframes rotate-text { //Animated Circle
    to{ transform: rotate(360deg);};
    };

    @media (max-width: 600px) { //Animated Circle

    #sectionAboutImage {
    width: auto;
    height: 400px;
    };
    
    .rotating-container{ //Animated Circle
    right: 250px;
    };
    };
  };
`;

export const AttributeContainer = styled.div`
    display: flex;
    margin-top: 40px;
    padding: 10px 10px 10px 0px;
    gap: 10px;

    @media (max-width: 400px) {
    flex-direction: column;
    };
`;

export const AttributeCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    padding: 15px;
    width: 100%;
    gap: 15px;
    font-family: "Jersey 10", sans-serif;

    border-radius: 20px;
    padding: 2rem;
    border: 1px solid ${({ theme }) => theme.borderStandard};
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
    };

    @-moz-keyframes Coolgradient {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
    };

    @-o-keyframes Coolgradient {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
    };

    @keyframes Coolgradient { 
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
    };

    &:hover{
    transform: scale(1.05);
    border: 1px solid ${({ theme }) => theme.borderHoverEffect};
    };

    span{ //Span from AtributteCard
    color: ${({ theme }) => theme.primaryColor};
    font-size: 42px;
    };

    p{ //P from AtributteCard
    margin: 0;
    color: #fff;
    font-size: 20px;
    };
`;

export const ServicesContainer = styled.div`
    width: 100%;
    padding: 0px 170px;
    color: ${({ theme }) => theme.text};
    //background-color: green;

    @media (max-width: 850px) { 
    padding: 50px 0px;
    text-align: center;
    };
`;

export const TechnologiesContainer = styled.div`
  background-color: ${({ theme }) => theme.primaryColorTranslucent};  
  width: 100%;

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
    };
};
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
    color: #4b4b4bff;

    i{ //I from TechBox
    font-size: 42px;
    flex-shrink: 0;
    };

    p{ //P from TechBox
    font-size: 13px;
    };

    &:hover {
    background-color: ${({ color }) => hexToRgba(color, 0.3)};
    border: 2px solid ${({ color }) => color};
    color: ${({ color }) => color};
    border-radius: 0;
    transform: scale(1.09);
    };
`;

export const PortfolioContainer = styled.div`  
    //background-color: green;
`;

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 220px;
    padding: 0px 170px;
    color: ${({ theme }) => theme.text};
    //background-color: green;

    .textContainer {
    max-width: 500px;
    };

    @media(max-width: 850px){
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0px 40px;
    gap: 20px;
    }

    #leftContent{
    .arrowContainer {
    display: flex;
    justify-content: center;
    gap: 3px;
    margin-top: 50px;
    margin-right: 110px;

    @media(max-width: 850px){
    margin-bottom: 30px;
    margin-right: 0px;
    };
    };

  .arrow {
    width: 40px;
    height: 40px;
    border-right: 10px solid;
    border-top: 10px solid;
    transform: rotate(45deg);
    animation: move 1s infinite;
  };

  .arrow:nth-child(1) {
      border-color:  ${({ theme }) => theme.primaryColor};
      animation-delay: 0s;
  };

  .arrow:nth-child(2) {
      border-color: ${({ theme }) => theme.primaryColor};
      animation-delay: 0.2s;
  };

  .arrow:nth-child(3) {
      border-color: ${({ theme }) => theme.primaryColor};
      animation-delay: 0.4s;
  };

  .arrow:nth-child(4) {
      border-color:  ${({ theme }) => theme.primaryColor};
      animation-delay: 0.4s;
  };

  @keyframes move {

      0%,
      20% {
          transform: translateX(0) rotate(45deg);
          opacity: 0.5;
      };

      50% {
          transform: translateX(10px) rotate(45deg);
          opacity: 1;
      };

      100% {
          transform: translateX(0) rotate(45deg);
          opacity: 0.5;
      };
    };
  };

  #rightContent{
    display: flex;
    flex-direction: column;
    gap: 35px;

    @media(max-width: 400px){
    }
  };
`;

export const ContactCard = styled.div`
  border: 1px solid ${({ theme }) => theme.borderStandard};
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
  };

  @-moz-keyframes Coolgradient {
      0%{background-position:5% 0%}
      50%{background-position:96% 100%}
      100%{background-position:5% 0%}
  };

  @-o-keyframes Coolgradient {
      0%{background-position:5% 0%}
      50%{background-position:96% 100%}
      100%{background-position:5% 0%}
  };

  @keyframes Coolgradient { 
      0%{background-position:5% 0%}
      50%{background-position:96% 100%}
      100%{background-position:5% 0%}
  };

  &:hover{
      transform: scale(1.05);
      border: 1px solid ${({ theme }) => theme.borderHoverEffect};
  };

  article{
    display: flex;
    align-items: center;
    gap: 10px;

    i{
      font-size: 30px;
    };

    h3{
      margin: 0;
      font-size: 20px;
    };

    @media(max-width: 850px){
      justify-content: center;
      text-align: center;
    };
  };

  p{
    color: #808080ff;
    margin: 0;
  };

  @media(max-width: 850px){
    padding: 10px 50px;
  };

  @media (max-width: 420px) { //Responsive aboutSection
    font-size: 15px;
    padding: 8px 0px;
  };
`;

