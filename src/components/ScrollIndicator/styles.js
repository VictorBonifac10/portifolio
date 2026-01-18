import styled from "styled-components";

export const ScrollContainer = styled.div`

    .scroll-indicator { //Mouse Indicator
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    top: 30.5rem;
    }

    .mouse { //Mouse Indicator
    width: 25px;
    height: 42px;
    border: 2px solid #fff;
    border-radius: 15px;
    position: relative;

    @media (max-width: 700px) { //Responsive
    width: 23px;
    height: 40px;
    };
    }

    .wheel { //Point
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll 1.5s infinite;
    }

    @keyframes scroll { //Effect point
    0% { opacity: 0; transform: translate(-50%, 0); }
    40% { opacity: 1; }
    100% { opacity: 0; transform: translate(-50%, 20px); }
    }
`