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
    padding: 7rem 4rem;

    @media (max-width: 700px) { //Responsive  container
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    };

    video { //Video
    position: absolute;
    object-fit: cover;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
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
    };

    img { //Logo
    position: relative;
    z-index: 2;
    width: 20rem;
    margin-bottom: 2rem;
    };
`;

export const LeftContent = styled.div` //Left written content
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 2;
    max-width: 50%;

    @media(max-width: 700px){
    width: 100%;
    };

    #typeWriter{
    color: ${({ theme }) => theme.primaryColor};
    font-family: "Jersey 10", sans-serif;
    font-size: 3.5rem;
    line-height: 2rem;
    }

    #firstDescription{
    color: #fff;
    font-weight: bold;
    font-size: 2.5rem;
    }

    #secondDescription{
    color: #fff;
    font-size: 1.3rem;
    }

    #customButton{ //Introduction button "Veja Mais"
    width: 30%;
    }
`;

export const RightContent = styled.div` //RightContent from containerBanner
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    z-index: 2;

    @media (max-width: 700px) {  //Responsive rightContent from containerBanner
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    };

    i{ //Icons (RightContent) from containerBanner
    color: #fff;
    font-size: 1.6rem;
    transition: 0.5s;
    cursor: pointer;

    &:hover{ //Hover Icons (RightContent) from containerBanner
    color: ${({ theme }) => theme.primaryColor};
    };
    };
`;

export const Main = styled.main` //Main

    #animatedSection { //Animeted Section
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.primaryColorTranslucent}; 
    padding: 1.2rem; 
    margin: 0;
    border: 0;
    };

    #animatedText { //Animeted Section
    display: flex;
    align-items: center;
    overflow-x: scroll;
    white-space: nowrap;
    scroll-behavior: auto;
    gap: 2rem;
    max-width: 100%;
    };

    #animatedText::-webkit-scrollbar { //Animeted Section
    display: none;
    };

    .textCustom { //Animeted Section
    padding: 0;
    margin: 0;
    font-size: 6rem;
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
    gap: 5rem;

    @media (max-width: 700px) { //Responsive aboutSection
    flex-direction: column;
    text-align: center;
    };

    #sectionAboutText { //Container that holds the written content and others cards of aboutSection
    max-width: 40%;

    @media (max-width: 700px) { //Responsive aboutSection
    width: 100%;
    };

    .textContainer {
    color: #fff;
    color: ${({ theme }) => theme.text};
    };
  };

    #sectionAboutImage { //Container About Image
    position: relative;
    width: 30%;

    @media (max-width: 700px) { //Responsive aboutSection
    width: 100%;
    };

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
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
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
    margin: 3.5rem 0rem;
    gap: 10px;

    @media (max-width: 400px) {
    flex-direction: column;
    margin: 0;
    };
`;

export const AttributeCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 100%;
    gap: 1rem;
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
    font-size: 2rem;
    };

    p{ //P from AtributteCard
    margin: 0;
    color: #fff;
    font-size: 1.2rem;
    };
`;

export const ServicesContainer = styled.div`
    width: 100%;
    padding: 0rem 8rem;
    color: ${({ theme }) => theme.text};

    @media (max-width: 700px) { 
    text-align: center;
    padding: 0.5rem;
    };
`;

export const TechnologiesContainer = styled.div`
  background-color: ${({ theme }) => theme.primaryColorTranslucent};  
  width: 100%;

  .techContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    padding: 3rem 6rem;
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
    gap: 1rem;
    width: 7rem;
    height: 10rem;
    background-color: rgba(255, 255, 255, 0.697);
    border-radius: 5px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
    color: #4b4b4bff;

    i{ //I from TechBox
    font-size: 3rem;
    flex-shrink: 0;
    };

    p{ //P from TechBox
    font-size: 0.7rem;
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
    height: 100vh;
    gap: 5rem;
    color: ${({ theme }) => theme.text};

    @media(max-width: 700px){
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
    gap: 2rem;
    }

    #leftContent{
    max-width: 40%;

    @media(max-width: 700px){
    max-width: 100%;
    };

    .arrowContainer {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 4rem;
    margin-right: 7rem;

    @media(max-width: 700px){
    margin-bottom: 2rem;
    margin-right: 0rem;
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
    0%, 20% { transform: translateX(0) rotate(45deg); opacity: 0.5; };
    50% { transform: translateX(10px) rotate(45deg); opacity: 1; };
    100% { transform: translateX(0) rotate(45deg); opacity: 0.5; };
    };
    };

    #rightContent{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media(max-width: 700px){
    max-width: 100%;
    };

    };
`;

export const ContactCard = styled.div`
    border: 1px solid ${({ theme }) => theme.borderStandard};
    border-radius: 8px;
    width: 100%;
    padding: 1rem 8rem 1rem 0.5rem;
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
    gap: 0.5rem;

    i{
    font-size: 2rem;
    };

    h3{
    margin: 0;
    font-size: 1rem;
    };

    @media(max-width: 700px){
    justify-content: center;
    text-align: center;
    };
    };

    p{
    color: #808080ff;
    margin: 0;
    };

    @media(max-width: 700px){
    padding: 1rem;
    };

`;

