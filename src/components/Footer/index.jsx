import { ContainerFooter, Text } from "./styles";

export function Footer() {
    return (
        <ContainerFooter>
            {/* <img src={Logo} alt='Logo da Empresa' /> */}
            <Text>
                Leve sua marca para o próximo nível e conquiste sua presença online de forma única!
            </Text>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/portfolio">Portfólio</a>

                </li>
                <li>
                    <a href="#">Termos e Condições</a>
                </li>
            </ul>
            <div>
                <i className="ri-whatsapp-line"></i>
                <i className="ri-google-line"></i>
                <i className="ri-instagram-line"></i>
            </div>
            <Text>
                © 2025 evolve solutions - All rights reserved.
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