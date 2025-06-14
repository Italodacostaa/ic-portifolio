import React, { useState } from 'react';
import './Tecnologias.css';
import { Slide, Fade } from 'react-awesome-reveal';

const Technologies = () => {

  const [openSkillSet, setOpenSkillSet] = useState('Linguagens');

  const toggleSkillSet = (setTitle) => {
    setOpenSkillSet(setTitle);
  };

  return (
    <section className="skills section" id="skills">
      <Fade bottom delay={200}>
        <h1 className="section_title">Habilidades</h1>
      </Fade>
      <Fade bottom delay={400}>
        <span className="section_subtitle">Minhas Habilidades Técnicas <br/>Linguagens, Bibliotecas, Frameworks e Ferramentas</span>
      </Fade>

      <div className="skills_container container">
        <Fade bottom delay={600}>
          <div className={`skill skills_content ${openSkillSet === 'Linguagens' ? 'skills_open' : ''}`}>

            <div className="skills_list horizontal-scroll">
              <div className="skills_data">
                <div className="skills_titles">
                  <span className="single_skill_icon"><img src={`${import.meta.env.BASE_URL}images/html.png`} alt="HTML Logo" /></span>
                  <h3 className="skills_name">HTML</h3>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <span className="single_skill_icon"><img src={`${import.meta.env.BASE_URL}images/css.png`} alt="CSS Logo" /></span>
                  <h3 className="skills_name">CSS</h3>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <span className="single_skill_icon"><img src={`${import.meta.env.BASE_URL}images/js.png`} alt="JavaScript Logo" /></span>
                  <h3 className="skills_name">JavaScript</h3>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <span className="single_skill_icon"><img src={`${import.meta.env.BASE_URL}images/sass.png`} alt="SASS/SCSS Logo" /></span>
                  <h3 className="skills_name">SASS</h3>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <span className="single_skill_icon"><img src={`${import.meta.env.BASE_URL}images/react.png`} alt="React Logo" /></span>
                  <h3 className="skills_name">React</h3>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <span className="single_skill_icon external-logo">
                    <img src={`${import.meta.env.BASE_URL}images/tailwind.png`} alt="Tailwind CSS logo" />
                  </span>
                  <h3 className="skills_name">Tailwind CSS</h3>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <span className="single_skill_icon"><img src={`${import.meta.env.BASE_URL}images/bootstrap.png`} alt="Bootstrap Logo" /></span>
                  <h3 className="skills_name">Bootstrap</h3>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <span className="single_skill_icon"><img src={`${import.meta.env.BASE_URL}images/node.png`} alt="Node.js Logo" /></span>
                  <h3 className="skills_name">Node.js</h3>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <span className="single_skill_icon"><img src={`${import.meta.env.BASE_URL}images/git.png`} alt="Git Logo" /></span>
                  <h3 className="skills_name">Git</h3>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <span className="single_skill_icon"><img src={`${import.meta.env.BASE_URL}images/github.png`} alt="GitHub Logo" /></span>
                  <h3 className="skills_name">GitHub</h3>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <span className="single_skill_icon"><img src={`${import.meta.env.BASE_URL}images/vscode.png`} alt="VS Code Logo" /></span>
                  <h3 className="skills_name">VS Code</h3>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <span className="single_skill_icon"><img src={`${import.meta.env.BASE_URL}images/npm.png`} alt="NPM Logo" /></span>
                  <h3 className="skills_name">NPM</h3>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Technologies;