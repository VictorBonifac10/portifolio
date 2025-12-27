//React
import { useEffect } from "react";

//Utils
import { carouselFunction } from "../../utils/carouselFunction";
import { typeWriterFunction } from "../../utils/typeWriterFunction";

//CountUp Library
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

//Next-Theme Library
import { useTheme } from "next-themes";

//Aos Library
import Aos from "aos";
import "aos/dist/aos.css";

//Datas
import { technologies } from "../../data/technologies";
import { links } from "../../data/links";

//Components
import { Button, Footer, Header, Portfolio, ScrollIndicator, ServiceCards, SupportButton, Title } from "../../components";

//Tags from Styles
import { Body, Banner, TopContainer, LeftContent, RightContent, Main, AboutContainer, ServicesContainer, PortfolioContainer, ContactContainer, ContactCard, TechnologiesContainer, TechBox, AttributeContainer, AttributeCard } from "./styles";

//Medias
import videoHomePage from '../../assets/video/HomePage.mp4'
import ImgAboutSection from '../../assets/img/perfil.png'
import originalLogo from '../../assets/img/originalLogo.svg'
import variantLogo from '../../assets/img/variantLogo.svg'


export function Home() {

    //Theme Config
    const { theme } = useTheme();

    useEffect(() => {
        //Aos Init
        Aos.init({ once: true });
        //Utils Init
        carouselFunction();
        typeWriterFunction();

    }, []);

    //CountUp Library Config
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <Body>
            <Header />
            <SupportButton />
            <TopContainer>
                <Banner>
                    <video src={videoHomePage} preload="none" autoPlay muted loop></video>
                    <div id="mask"></div>
                    <LeftContent>
                        <img src={theme === "dark" ? originalLogo : variantLogo} alt="Logo do Portfólio" />
                        <span id="typeWriter">...</span>
                        <p id="firstDescription">Desenvolvedor Web Full-Stack</p>
                        <p id="secondDescription">Sou apaixonado por tecnologia, inovação e por desenvolver soluções que gerem impacto real. Verifique abaixo</p>
                        <div id="customButton">
                            <Button href="#services">
                                Veja mais
                            </Button>
                        </div>
                    </LeftContent>
                    {links.map(data => (
                        <RightContent>
                            <a href={data.whatsapp} target="_blank">
                                <i className="ri-whatsapp-line"></i>
                            </a>
                            <a href={data.email} target="_blank"> 
                                <i className="ri-google-line"></i>
                            </a>
                            <a href={data.linkedin} target="_blank">
                                <i className="ri-linkedin-line"></i>
                            </a>
                            <a href={data.github} target="_blank">
                                <i className="ri-github-line"></i>
                            </a>
                        </RightContent>
                    ))}
                </Banner>
                <ScrollIndicator />
            </TopContainer>
            <Main>
                <section id="animatedSection">
                    <div id="animatedText">
                        <p className="textCustom">Optimization</p>
                        <p className="textCustom">➲</p>
                        <p className="textCustom">Performance</p>
                        <p className="textCustom">➲</p>
                        <p className="textCustom">Automation</p>
                        <p className="textCustom">➲</p>
                        <p className="textCustom">Scalability</p>
                        <p className="textCustom">➲</p>
                    </div>
                </section>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <Title subtitle="Conheça-me melhor" >Sobre</Title>
                    <AboutContainer id='about'>
                        <section id="sectionAboutText">
                            <p class="textContainer">
                                Olá! Meu nome é Victor Alves Bonifácio e atuo como Desenvolvedor Web Full-Stack. Ao longo da minha carreira desenvolvi diversos projetos profissionais e acadêmicos em diferentes setores, o que me permitiu dominar ferramentas e metodologias voltadas à criação e ao gerenciamento de software, sempre com foco na entrega de valor.<br /><br />Com formação em Sistemas para Internet, venho me dedicando ao desenvolvimento de aplicações, focando em criar interfaces acessíveis, organizadas e alinhadas ao que o projeto realmente precisa.
                            </p>
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
                        </section>
                        <section id="sectionAboutImage">
                            <img src={ImgAboutSection} alt="Foto de Perfil" />
                            <div className="rotating-container">
                                <svg viewBox="0 0 300 300" width="200" height="200">
                                    <path id="circle-path" d="M 150, 150
                                    m -100, 0 
                                    a 100,100 0 1,1 200,0
                                    a 100,100 0 1,1 -200,0" fill="none" />
                                    <circle cx="150" cy="150" r="80" className="inner-circle" />
                                    <text id="text-on-path">
                                        <textPath href="#circle-path" startOffset="0%">
                                            • HANDS-ON TECH • CODE • HANDS-ON TECH • CODE
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </section>
                    </AboutContainer>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <Title subtitle="Áreas de atuação">Habilidades</Title>
                    <ServicesContainer id="services">
                        <ServiceCards />
                    </ServicesContainer>
                </div>
                <TechnologiesContainer id='technologies'>
                    <Title subtitle="Ferramentas modernas para soluções inovadoras">Tecnologias</Title>
                    <article className="techContainer" id="animatedTechIcons">
                        {technologies.map(data => (
                            <TechBox key={data.name} color={data.color}>
                                <i className={data.icon}></i>
                                <p>{data.name}</p>
                            </TechBox>
                        ))
                        }
                    </article>
                </TechnologiesContainer>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <Title subtitle="Da ideia inicial ao resultado final">Projetos</Title>
                    <PortfolioContainer id='portfolio'>
                        <Portfolio />
                    </PortfolioContainer>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <Title subtitle="Envie-me uma mensagem">Contato</Title>
                    <ContactContainer id="contact">
                        <section id="leftContent">
                            <p id="textContainer">
                                Seja para discutir uma ideia, colaborar em um projeto ou esclarecer dúvidas técnicas, estou sempre aberto a novas conexões e desafios no universo do desenvolvimento.
                                <br /><br />Envie uma mensagem e vamos explorar juntos soluções criativas e eficientes para transformar conceitos em produtos digitais reais e impactantes.
                                <br /><br />Vamos construir o futuro da tecnologia, uma linha de código por vez!
                            </p>
                            <div className="arrowContainer">
                                <div className="arrow"></div>
                                <div className="arrow"></div>
                                <div className="arrow"></div>
                            </div>
                        </section>
                        {links.map(data => (
                            <section id="rightContent">
                                <a href={data.whatsapp} target="_blank">
                                    <ContactCard>
                                        <article>
                                            <i className="ri-whatsapp-line"></i>
                                            <h3>WhatsApp</h3>
                                        </article>
                                        <p>+55 (16)99309-0225</p>
                                    </ContactCard>
                                </a>
                                <a href={data.email} target="_blank">
                                    <ContactCard>
                                        <article>
                                            <i className="ri-google-line"></i>
                                            <h3>Email</h3>
                                        </article>
                                        <p>victor.alvesbonifacio@gmail.com</p>
                                    </ContactCard>
                                </a>
                                <a href={data.linkedin} target="_blank">
                                    <ContactCard>
                                        <article>
                                            <i className="ri-linkedin-line"></i>
                                            <h3>LinkedIn</h3>
                                        </article>
                                        <p>Victor Alves Bonifácio</p>
                                    </ContactCard>
                                </a>
                                <a href={data.github} target="_blank">
                                    <ContactCard>
                                        <article>
                                            <i className="ri-github-line"></i>
                                            <h3>Github</h3>
                                        </article>
                                        <p>@VictorBonifac10</p>
                                    </ContactCard>
                                </a>
                            </section>
                        ))}
                    </ContactContainer>
                </div>
            </Main>
            <Footer />
        </Body >
    )
};