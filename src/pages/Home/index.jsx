import { useEffect } from "react";
import { animatedFunction, animatedTechFunction } from "../../utils/animatedFunction";
import { typeWriterFunction } from "../../utils/typeWriterFunction";

import { technologies } from "../../data/technologies";

import { Button, Footer, Header, ScrollIndicator, ServicesCards, SupportButton, Title } from "../../components";

import { ContainerBody, Banner, ContainerTop, ContentLeft, ContentRight, FirstDescription, SecondDescription, ContainerMain, ContainerAbout, Text, ContainerServices, ContainerPortfolio, Mask, ContainerContact, ContactCard, TechnologiesContainer, TechBox } from "./styles";

import videoHomePage from '../../assets/video/HomePage.mp4'
import videoPortfolioSection from '../../assets/video/PortfolioSection.mp4'
import ImgAboutSection from '../../assets/img/my-photo.jpg'

export function Home() {

    useEffect(() => {

        animatedFunction();

        typeWriterFunction();

        animatedTechFunction();

    }, []);

    return (
        <ContainerBody>
            <Header />
            <SupportButton />
            <ContainerTop>
                <Banner>
                    <video src={videoHomePage} preload="none" autoPlay muted loop></video>
                    <Mask />
                    <div className="containerBanner">
                        <ContentLeft>
                            <span id="typewriter">...</span>
                            <FirstDescription>
                                Desenvolvedor Web Full-Stack
                            </FirstDescription>
                            <SecondDescription>
                                Sou apaixonado por tecnologia, inovação e por desenvolver soluções que gerem impacto real. Verifique abaixo ▼
                            </SecondDescription>
                            <div className="custom-button">
                                <Button href="#services">
                                    Veja mais
                                    <i className="ri-arrow-right-down-long-line"></i>
                                </Button>
                            </div>
                        </ContentLeft>
                        <ContentRight>
                            <i className="ri-whatsapp-line"></i>
                            <i className="ri-google-line"></i>
                            <i className="ri-instagram-line"></i>
                        </ContentRight>
                    </div>
                    <ScrollIndicator />
                </Banner>
            </ContainerTop>
            <ContainerMain>
                <section>
                    <div id="animated-text">
                        <p className="text-custom">Optimization</p>
                        <p className="text-custom">➲</p>
                        <p className="text-custom">Performance</p>
                        <p className="text-custom">➲</p>
                        <p className="text-custom">Automation</p>
                        <p className="text-custom">➲</p>
                        <p className="text-custom">Scalability</p>
                        <p className="text-custom">➲</p>
                    </div>
                </section>
                <ContainerAbout>
                    <div className="aboutText">
                        <Title subtitle="Conheça mais sobre mim">Sobre</Title>
                        <Text>
                            A Evolve Solutions, fundada em 2025, nasceu com um propósito claro: transformar ideias em experiências digitais únicas. Especializada na criação de sites, landing pages e soluções para fortalecer a presença digital de empresas, nossa missão é unir design, tecnologia e estratégia para conectar marcas ao seu público de forma impactante.
                            <br /><br />
                            Mais do que construir páginas, criamos soluções que refletem a essência de cada negócio, proporcionando resultados reais e experiências memoráveis. Na Evolve Solutions, cada projeto é pensado para evoluir junto com você, garantindo autenticidade, inovação e relevância em cada clique.
                        </Text>
                    </div>
                    <div className="aboutImage">
                        <img src={ImgAboutSection} alt='Desenvolvedor-de-sites' />
                        <div class="rotating-container">
                            <svg viewBox="0 0 300 300" width="200" height="200">
                                <path id="circle-path" d="M 150, 150
                                    m -100, 0 
                                    a 100,100 0 1,1 200,0
                                    a 100,100 0 1,1 -200,0" fill="none" />
                                <circle cx="150" cy="150" r="80" class="inner-circle" />
                                <text id="text-on-path">
                                    <textPath href="#circle-path" startOffset="0%">
                                        • HANDS-ON TECH • CODE • HANDS-ON TECH • CODE
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </ContainerAbout>
                <ContainerServices id="services">
                    <Title subtitle="Porque escolher nossa equipe?">Serviços</Title>
                    <ServicesCards />
                </ContainerServices>
                <TechnologiesContainer>
                    <div className="titleContainer">
                        <Title subtitle="Ferramentas modernas para soluções inovadoras">Tecnologias</Title>
                    </div>
                    <div className="techContainer" id="animated-tech">
                        {technologies.map(data => (
                            <TechBox key={data.name} color={data.color}>
                                <i className={data.icon}></i>
                                <p>{data.name}</p>
                            </TechBox>
                        ))
                        }
                    </div>
                </TechnologiesContainer>
                <ContainerPortfolio>
                    <video src={videoPortfolioSection} preload="none" autoPlay muted loop></video>
                    <Mask />
                    <div className="content">
                        <Title subtitle="Da ideia inicial ao resultado final">Projetos</Title>
                        <Text>
                            Clique em "Veja mais" e tenha acesso a todos os nossos serviços, desde sites institucionais e landing pages até estratégias para fortalecer sua presença online. Cada projeto é desenvolvido com atenção aos detalhes, design moderno e funcionalidade, garantindo que sua marca se destaque e conquiste resultados reais.
                            <br /><br />
                            Explore nosso portfólio e descubra como podemos impulsionar sua presença digital de forma autêntica e eficiente.
                        </Text>
                    </div>
                    <br />
                    <div className="custom-button">
                        <Button href="/portfolio">Veja mais <i className="ri-arrow-right-down-long-line"></i></Button>
                    </div>
                </ContainerPortfolio>
                <ContainerContact id="contact">
                    <div className="content">
                        <Title subtitle="Envie-me uma mensagem">Contato</Title>
                        <Text>
                            Seja para tirar dúvidas, solicitar um orçamento ou iniciar um projeto, nossa equipe está sempre pronta para ouvir suas ideias e oferecer o ideal para o seu negócio.
                            <br /><br />
                            Portanto, envie-nos uma mensagem e agarre agora mesmo a oportunidade de criar experiências digitais únicas e que conectam sua marca ao público certo.
                            <br /><br />
                            Vamos juntos rumo à evolução da sua presença online!
                        </Text>
                    </div>
                    <div className="content-contact-card">
                        <ContactCard>
                            <div>
                                <i className="ri-whatsapp-line"></i>
                                <h3>WhatsApp</h3>
                            </div>
                            <p>+55(16)9908-3476</p>
                        </ContactCard>
                        <ContactCard>
                            <div>
                                <i className="ri-google-line"></i>
                                <h3>Email</h3>
                            </div>
                            <p>evolvesolutions@gmail.com</p>
                        </ContactCard>
                        <ContactCard>
                            <div>
                                <i className="ri-instagram-line"></i>
                                <h3>Instagram</h3>
                            </div>
                            <p>@evolvesolutions</p>
                        </ContactCard>
                    </div>
                </ContainerContact>
            </ContainerMain>
            <Footer />
        </ContainerBody>
    )
}