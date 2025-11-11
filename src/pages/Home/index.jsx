import { useEffect } from "react";
import { carouselFunction } from "../../utils/carouselFunction";
import { typeWriterFunction } from "../../utils/typeWriterFunction";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { technologies } from "../../data/technologies";

import { Button, Footer, Header, ScrollIndicator, ServicesCards, SupportButton, Title } from "../../components";

import { ContainerBody, Banner, ContainerTop, ContentLeft, ContentRight, FirstDescription, SecondDescription, ContainerMain, ContainerAbout, Text, ContainerServices, ContainerPortfolio, Mask, ContainerContact, ContactCard, TechnologiesContainer, TechBox, AttributeContainer, AttributeCard } from "./styles";

import videoHomePage from '../../assets/video/HomePage.mp4'
import ImgAboutSection from '../../assets/img/my-photo.jpg'
import Logo from '../../assets/img/logo.svg'
import { Portfolio } from "../Portfolio";

export function Home() {

    useEffect(() => {
        carouselFunction();
        typeWriterFunction();
    }, []);

    const { ref, inView } = useInView({ triggerOnce: true });

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
                            <img src={Logo} alt="Logo do Portfólio" />
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
                <section className="animatedSection">
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
                <ContainerAbout id='about'>
                    <Title subtitle="Conheça mais sobre mim">Sobre</Title>
                    <section className="aboutSection">
                        <div className="aboutText">
                            <Text>
                                Olá! Meu nome é Victor Alves Bonifácio e atuo como Desenvolvedor Web Full-Stack. Ao longo da minha carreira desenvolvi diversos projetos profissionais e acadêmicos em diferentes setores, o que me permitiu dominar ferramentas e metodologias voltadas à criação e ao gerenciamento de software, sempre com foco na entrega de valor.
                                <br /><br />
                                Com formação em Sistemas para Internet, venho me dedicando ao desenvolvimento aplicações, focando em criar interfaces acessíveis, organizadas e alinhadas ao que o projeto realmente precisa.
                            </Text>
                            <AttributeContainer>
                                <AttributeCard>
                                    <span ref={ref}>
                                        {inView && <CountUp end={10} duration={5} />}
                                        +
                                    </span>
                                    <p>Stacks dominadas</p>
                                </AttributeCard>
                                <AttributeCard>
                                    <span ref={ref}>
                                        {inView && <CountUp end={50} duration={5} />}
                                        +
                                    </span>
                                    <p>Projetos Concluídos</p>
                                </AttributeCard>
                            </AttributeContainer>
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
                    </section>
                </ContainerAbout>
                <ContainerServices id="services">
                    <Title subtitle="Porque escolher nossa equipe?">Serviços</Title>
                    <ServicesCards />
                </ContainerServices>
                <TechnologiesContainer id='technologies'>
                    <div className="titleContainer">
                        <Title subtitle="Ferramentas modernas para soluções inovadoras">Tecnologias</Title>
                    </div>
                    <div className="techContainer" id="animated-tech-icons">
                        {technologies.map(data => (
                            <TechBox key={data.name} color={data.color}>
                                <i className={data.icon}></i>
                                <p>{data.name}</p>
                            </TechBox>
                        ))
                        }
                    </div>
                </TechnologiesContainer>
                <ContainerPortfolio id='portfolio'>
                    <Title subtitle="Da ideia inicial ao resultado final">Projetos</Title>
                    <Portfolio />
                </ContainerPortfolio>
                <ContainerContact id="contact">
                    <Title subtitle="Envie-me uma mensagem">Contato</Title>
                    <section className="contactSection">
                        <div className="content">
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
                    </section>
                </ContainerContact>
            </ContainerMain>
            <Footer />
        </ContainerBody>
    )
}