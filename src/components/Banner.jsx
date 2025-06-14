import React from 'react';
import './Banner.css';
import { Fade, Zoom } from 'react-awesome-reveal'; 

const Banner = () => {
  return (
    <section id='home' className="banner"> 
      <div className="banner-content-wrapper">
        <div className="banner-content">
          <Fade direction="bottom" delay={500}>
            <h2 className="banner-title">
              Olá! Sou Ítalo Costa, <br/>Desenvolvedor Fullstack.
            </h2>
          </Fade>
          <Fade direction="bottom" delay={700}>
            <p className="banner-description">
              Minha paixão é criar soluções de software inovadoras que simplificam processos e geram valor. Do front-end ao back-end, seu projeto em boas mãos.
            </p>
          </Fade>
          <Fade direction="bottom" delay={900}>
            <a href="#contact" className="banner-button">
              Fale Comigo Sobre Seu Projeto
            </a>
          </Fade>
        </div>
        <div className="banner-avatar">
          <Zoom delay={1100}>
            <img
              src={`${import.meta.env.BASE_URL}images/avatar.jpeg`}
              alt="Italo Costa Avatar"
              className="avatar-img"
            />
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Banner;