
import styled from 'styled-components'

export const PortfolioContainer = styled.div`

  margin: 0px 40px 40px 40px;
  padding: 20px 40px 40px 40px;

  @media(max-width: 900px){
    margin: 7px;
    padding: 7px;
  }

  .main-swiper{
    padding: 20px;
  }

  .main-swiper img {
    width: 60%;
    height: 350px;
    object-fit: cover;
    padding: 40px;
    transform: perspective(800px) rotateY(-25deg);
    position: relative;
    z-index: 2;

    @media(max-width: 900px){
      width: 100%;
      padding: 10px;
    }
  }

  .swiper-button-next {
      color: #00fbff96;
      width: 15px;
      right: 30px;
  }

  .swiper-button-prev {
      color: #00fbff96;
      width: 15px;
      left: 35px;
  }

  .thumbs-swiper {
    display: flex;
    width: 100%;
    margin-top: 6px;
  }

  .thumbs-swiper .swiper-wrapper {
  justify-content: center !important;
}

  .thumbs-swiper img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    opacity: 0.4;
    cursor: pointer;
  }

  .thumbs-swiper .swiper-slide-thumb-active img {
    opacity: 1;
  }

`;

export const ProjectCard = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    overflow: hidden;
    gap: 20px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 40px;

    padding: 40px 60px;
    color: #fff;
    transition: 1s;

    @media(max-width: 900px){
      flex-direction: column;
      text-align: center;
    }

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
    }

    &:hover{
      transform: scale(1.02);
      border: 1px solid #fff;
      border-radius: 10px;
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
  object-fit: cover;
  z-index: 0;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2{
    color: #00fbff96;
    margin-bottom: 30px;
    font-size: 40px;
    font-family: "Jersey 10", sans-serif;
  }
`;

export const Text = styled.p`
  max-width: 900px;
  margin-bottom: 20px;
`;

export const StacksField = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 50px;

  @media(max-width: 900px){
    justify-content: center;
    align-items: center;
  }
`;

export const Stack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 6px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;

  i{
    font-size: 15px;
    margin: 0;
    padding: 0;
    color: #fff;
  }
  
  p{
    font-size: 12px;
    margin: 0;
    padding: 0;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-align: center;
  background-color: transparent;
  color: #00fbff96;
  border: 1px solid #00fbff96;
  border-radius: 6px;
  padding: 10px;
  transition: 0.5s all;

  i{
    padding: 0;
    margin: 0;
  }

  &:hover{
    background-color: #00fbff96;
    color: #fff;
  }
`
