// src/components/Sobre.jsx
import React from 'react';
import './Sobre.css'; // O nome do arquivo CSS é 'About.css', não 'sobre.css'
import { FaFileDownload } from 'react-icons/fa';
import { Fade, Slide } from 'react-awesome-reveal';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about_container container grid"> {/* Adicionei a classe 'container' aqui para reutilizar estilos globais de container */}
        <Slide left delay={300}>
          <img
              src={`${import.meta.env.BASE_URL}images/avatar.jpeg`} // Caminho para sua imagem
              alt="Italo Costa Avatar"
              className="about_img"
            />
        </Slide>

        <div className="about_data">
          <Fade bottom delay={500}>
            <h2 className="section_title">Sobre Mim</h2>
          </Fade>
          <Fade bottom delay={700}>
            <span className="section_subtitle">Minha Introdução</span>
          </Fade>
          <Fade bottom delay={900}>
            <p className="about_description">
              Olá! Sou Ítalo Costa, um desenvolvedor Fullstack apaixonado por transformar ideias em soluções digitais. Com experiência em desenvolvimento front-end e back-end, busco criar produtos que não apenas funcionam, mas que resolvem problemas reais e oferecem uma ótima experiência de usuário. Gosto de aprender continuamente e compartilhar conhecimento.
            </p>
          </Fade>
          <Fade bottom delay={1100}>
            <div className="about_button">
              <a download="" href="/CurrículoIC.pdf" className="button button--flex" target="_blank" rel="noopener noreferrer">
                Meu Currículo <FaFileDownload className="button_icon" />
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;