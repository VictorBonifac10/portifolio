import { ContainerFooter, Text } from "./styles";

import Logo from '../../assets/img/logo.svg'

export function Footer() {
    return (
        <ContainerFooter>
            <img src={Logo} alt="Logo do Portfólio" />
            <Text>
                Construindo aplicações modernas, performáticas e funcionais.
            </Text>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#about">Sobre</a>
                </li>
                <li>
                    <a href="#services">Serviços</a>
                </li>
                <li>
                    <a href="#technologies">Tecnologias</a>
                </li>
                <li>
                    <a href="#portfolio">Portfólio</a>
                </li>
                <li>
                    <a href="#contato">Contato</a>
                </li>
            </ul>
            <div>
                <i className="ri-whatsapp-line"></i>
                <i className="ri-google-line"></i>
                <i className="ri-instagram-line"></i>
            </div>
            <Text>
                © 2025 Victor Bonifácio Portfólio. Todos os direitos reservados.
            </Text>
            <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use href="#gentle-wave" x="48" y="0" fill="#00fbff96" />
                    <use href="#gentle-wave" x="48" y="3" fill="#00fbff54" />
                    <use href="#gentle-wave" x="48" y="5" fill="#00fbffc9" />
                    <use href="#gentle-wave" x="48" y="7" fill="#00fbff4e" />
                </g>
            </svg>
        </ContainerFooter>

    )
}