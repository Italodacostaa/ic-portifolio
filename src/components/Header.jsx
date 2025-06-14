// src/components/Header.jsx
import React, { useState, useEffect, useCallback } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import "./Header.css";

const logos = {
  logogradient: `${import.meta.env.BASE_URL}images/logo.png`, 
};
const socialLinks = {
  twitter: "https://twitter.com/seuperfil", 
  linkedin: "https://www.linkedin.com/in/italo-costa-75b8a31a8/", 
  github: "https://github.com/Italodacostaa", 
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const desktopBreakpoint = 768; // Defina seu breakpoint de desktop

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Aplica o tema inicial ao carregar
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const isMobile = () => window.innerWidth < desktopBreakpoint;

  const toggleMenu = useCallback(() => {
    if (isMobile()) {
      setIsOpen((prev) => !prev);
    }
  }, []);

  // Fecha o menu móvel ao clicar em um link de âncora
  const handleAnchorLinkClick = useCallback(() => {
    if (isMobile()) {
      setIsOpen(false); 
    }
  }, []);

  // Fecha o menu móvel se a tela for redimensionada para desktop
  useEffect(() => {
    const handleResizeOrRouteChange = () => {
      if (isOpen && !isMobile()) {
        setIsOpen(false);
      }
    };

    handleResizeOrRouteChange(); // Executa ao montar para ajustar o estado inicial
    window.addEventListener("resize", handleResizeOrRouteChange);
    return () => window.removeEventListener("resize", handleResizeOrRouteChange);
  }, [isOpen]); 

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Sobre" }, 
    { id: "skills", label: "Tecnologias" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <header className="header">
      <div className="header-content-wrapper">
        <div className="header-top-row">
          <a href="#home" className="logo-link" onClick={handleAnchorLinkClick}>
            <img className="header-logo" src={logos.logogradient} alt="Logo" />
          </a>

          <button
            onClick={toggleMenu}
            className={`menu-toggle ${isOpen ? 'is-open' : ''}`}
            aria-label="Toggle navigation"
          >
            {/* Ícone de hambúrguer SVG */}
            <svg className="menu-icon" width="25" height="20" viewBox="0 0 16 13" fill="none">
              <path d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625M1.4375 6.3125H14.5625"
                strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <nav className={`main-nav ${isOpen ? "is-open" : ""}`} aria-expanded={isOpen}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`} 
                  onClick={handleAnchorLinkClick} 
                  className="nav-item"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="social-links">
            <li>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
            </li>
            <li>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={22} />
              </a>
            </li>
            <li>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter size={22} />
              </a>
            </li>
          </ul>
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;