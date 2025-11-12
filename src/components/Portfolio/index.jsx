//React
import { useState } from "react";

//Swiper Library
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

//Datas
import { projects } from '../../data/projects'

//Components
import { Button } from "../index";

//Tags from Styles
import { PortfolioContainer, ProjectCard, Description, Text, StacksField, Stack, ButtonContainer, ActionButton, Mask } from './styles'

//Medias
import videoPortfolio from '../../assets/video/PortfolioPage.mp4'

export function Portfolio() {

    //Swiper Library Config
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [filteredProjects, setFilteredProjects] = useState(
        projects.filter(p => p.field === "Front-End")
    );

    function handleFilter(field) {

        const result = projects.filter(project => project.field === field);

        setFilteredProjects(result);
        console.log(result)
    }

    return (
        <PortfolioContainer>
            <ButtonContainer>
                <ActionButton onClick={() => handleFilter("Front-End")}>
                    <i className="ri-square-line"></i>
                    Front-End
                </ActionButton>

                <ActionButton onClick={() => handleFilter("Back-End")}>
                    <i className="ri-triangle-line"></i>
                    Back-End
                </ActionButton>

                <ActionButton onClick={() => handleFilter("Full-Stack")}>
                    <i className="ri-checkbox-blank-circle-line"></i>
                    Full-Stack
                </ActionButton>
            </ButtonContainer>
            <Swiper
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={60}
                className="main-swiper"
            >
                {
                    filteredProjects.map(data => (
                        <SwiperSlide>
                            <ProjectCard>
                                <video src={videoPortfolio} preload="none" autoPlay muted loop></video>
                                <Mask />
                                <section className="content">
                                    <Description>
                                        <h2>{data.name}</h2>
                                        <Text>
                                            {data.description}
                                        </Text>
                                        <StacksField>
                                            {data.stacks.map((stack, i) => (
                                                <Stack key={i}>
                                                    <i className={data.icons[i]}></i>
                                                    <p>{stack}</p>
                                                </Stack>
                                            ))}
                                        </StacksField>
                                        <ButtonContainer>
                                            <Button href={data.site} target='_blank'>
                                                <i className="ri-link" target='_blank'></i>
                                                Deploy
                                            </Button>
                                            <Button variant="secondary" href={data.repository} target='_blank'>
                                                <i className="ri-github-fill"></i>
                                                Github
                                            </Button>
                                        </ButtonContainer>
                                    </Description>
                                </section>
                                <img src={data.img}></img>
                            </ProjectCard>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                watchSlidesProgress
                className="thumbs-swiper"
            >
                {filteredProjects.map(data => (
                    <SwiperSlide key={data.name}>
                        <img src={data.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </PortfolioContainer>
    )
};