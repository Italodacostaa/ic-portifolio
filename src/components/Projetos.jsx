import React from 'react';
import './Projetos.css';
import { Fade } from 'react-awesome-reveal';

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            title: "Hamburgueria Do Ottis",
            description: "Site criado para simular a landing page de uma hamburgueria artesanal, com foco no visual dos produtos, navegação fácil e interações modernas",
            image: `${import.meta.env.BASE_URL}images/Projeto-HamburgueriaDoOttis.png`, 
            video: `${import.meta.env.BASE_URL}videos/Projeto-HamburgueriaDoOttis.mp4`,
            liveLink: "https://italodacostaa.github.io/HamburgueriaDoOttis/",
            githubLink: "https://github.com/Italodacostaa/HamburgueriaDoOttis",
            color: "#0091FF"
        },
        {
            id: 2,
            title: "Galatians Box User",
            description: "Este projeto é uma aplicação front-end desenvolvida com HTML, CSS e JavaScript puro, focada em criar uma interface interativa e responsiva para o usuário.",
            image: `${import.meta.env.BASE_URL}images/Projeto-GalatiansBox.png`,
            video: `${import.meta.env.BASE_URL}videos/Projeto-GalatiansBox.mp4`,
            liveLink: "https://italodacostaa.github.io/GalatiansBoxUser2/dashboard.html",
            githubLink: "https://github.com/Italodacostaa/GalatiansBoxUser2",
            color: "#0091FF"
        },
        {
            id: 3,
            title: "Landing Page",
            description: "Este projeto é uma landing page totalmente responsiva desenvolvida com HTML5 e CSS3, com foco em performance, organização de código e design limpo.",
            image: `${import.meta.env.BASE_URL}images/Projeto-LandingPage07.png`,
            video: `${import.meta.env.BASE_URL}videos/Projeto-LandingPage07.mp4`,
            liveLink: "https://italodacostaa.github.io/landing-page-07/#",
            githubLink: "https://github.com/Italodacostaa/landing-page-07",
            color: "#0091FF"
        }
    ];

    return (
        <section className="projects section" id="projects">
            <Fade bottom delay={200}>
                <h1 className="section_title">Projetos</h1>
            </Fade>
            <Fade bottom delay={400}>
                <span className="section_subtitle">Meus Trabalhos Recentes</span>
            </Fade>
            <div className="projects_container container blocos">
                {projectsData.map(project => (
                    <Fade key={project.id} bottom delay={600}>
                        <div className="project_card card"> 
                            <div 
                                className="project_media caixaImg"
                                onMouseEnter={(e) => e.currentTarget.querySelector('video')?.play()}
                                onMouseLeave={(e) => {
                                    const video = e.currentTarget.querySelector('video');
                                    video?.pause();
                                    video.currentTime = 0;
                                }}
                            >
                                <img 
                                    src={project.image}
                                    alt={project.title} 
                                    className="project_thumbnail" 
                                />
                                <video 
                                    src={project.video} 
                                    loop 
                                    muted 
                                    preload="none" 
                                    autoPlay
                                    className="project_video"
                                />
                            </div>
                            <div className="project_info conteudo">
                                <h2 className="project_title" style={{ '--cor': project.color }}>{project.title}</h2>
                                <p className="project_description">{project.description}</p>
                                <div className="project_links">
                                    {project.liveLink && (
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="project_button"
                                            style={{ '--cor': project.color }}
                                        >
                                            Ver Projeto
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a 
                                            href={project.githubLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="project_button-github"
                                            style={{ '--cor': project.color }}
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </section>
    );
};

export default Projects;