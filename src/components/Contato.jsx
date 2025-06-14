import React, { useState, useEffect, useRef } from 'react';
import './Contato.css';
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
    FaTwitter, 
    FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [subjectFocus, setSubjectFocus] = useState(false);
    const [messageFocus, setMessageFocus] = useState(false);

    const [messageSent, setMessageSent] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isNameValid = (name) => name.trim().length > 2;

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setMessageSent(false); 
        setSubmitError(false);

        if (!isNameValid(name) || !isValidEmail(email) || message.trim().length < 5) {
            setSubmitError(true);
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/mwpbojnj", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json" 
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                }),
            });

            if (response.ok) {
                setMessageSent(true);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                setNameFocus(false);
                setEmailFocus(false);
                setSubjectFocus(false);
                setMessageFocus(false);
            } else {
                setSubmitError(true);
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            setSubmitError(true);
        }
    };


    return (
        <section
            className={`contact section ${isVisible ? 'is-visible' : ''}`}
            id="contact"
            ref={sectionRef}
        >
            <h2 className="section_title">Contato</h2>
            <span className="section_subtitle">
                Entre em contato para discutir oportunidades ou projetos.
            </span>

            <div className="contact_container container grid">
                <div className="contact_group">
                    <h3 className="contact_title_block">Detalhes de Contato</h3>
                    <div className="contact_info_wrapper">
                        <div className="contact_info_item">
                            <FaEnvelope className="contact_icon" />
                            <div>
                                <h4 className="contact_info-title">E-mail</h4>
                                <span className="contact_info-subtitle">italodacostaas@gmail.com</span>
                                <a href="mailto:italodacostaas@gmail.com" className="contact_button" aria-label="Enviar e-mail">
                                    Enviar e-mail <FaPaperPlane className="contact_button-icon" />
                                </a>
                            </div>
                        </div>

                        <div className="contact_info_item">
                            <FaPhone className="contact_icon" />
                            <div>
                                <h4 className="contact_info-title">Telefone</h4>
                                <span className="contact_info-subtitle">(85) 98771-2548</span>
                                <a href="tel:+5585987712548" className="contact_button" aria-label="Ligar agora">
                                    Ligar agora <FaPaperPlane className="contact_button-icon" />
                                </a>
                            </div>
                        </div>

                        <div className="contact_info_item">
                            <FaMapMarkerAlt className="contact_icon" />
                            <div>
                                <h4 className="contact_info-title">Localização</h4>
                                <span className="contact_info-subtitle">Fortaleza, Ceará, Brasil</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact_socials">
                        <h3 className="contact_title_block">Redes Sociais</h3>
                        <div className="contact_social-links">
                            
                            <SocialLink
                                href="https://www.linkedin.com/in/italo-costa-75b8a31a8/"
                                icon={<FaLinkedin />}
                                label="LinkedIn"
                            />
                            <SocialLink
                                href="https://github.com/Italodacostaa" 
                                icon={<FaGithub />}
                                label="GitHub"
                            />
                            <SocialLink
                                href="https://twitter.com/seuperfil" 
                                icon={<FaTwitter />}
                                label="Twitter"
                            />
                      
                        </div>
                    </div>
                </div>

           
                <div className="contact_group">
                    <h3 className="contact_title_block">Fale Comigo</h3>

                
                    <form onSubmit={handleSubmit} className="contact_form">
                        <FormField
                            id="name"
                            name="name"
                            label="Nome:"
                            type="text"
                            placeholder="Seu nome completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onFocus={() => setNameFocus(true)}
                            onBlur={() => setNameFocus(false)}
                            isValid={nameFocus ? null : (name ? isNameValid(name) : null)}
                            isFocused={nameFocus}
                        />
                        <FormField
                            id="email"
                            name="email"
                            label="E-mail:"
                            type="email"
                            placeholder="Seu melhor e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            isValid={emailFocus ? null : (email ? isValidEmail(email) : null)}
                            isFocused={emailFocus}
                        />
                        <FormField
                            id="subject"
                            name="subject"
                            label="Assunto:"
                            type="text"
                            placeholder="Assunto da mensagem"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            onFocus={() => setSubjectFocus(true)}
                            onBlur={() => setSubjectFocus(false)}
                            isFocused={subjectFocus}
                        />

                        <div className={`contact_content ${messageFocus ? 'focusIn' : ''} ${message && message.trim().length > 5 ? 'valid' : message ? 'invalid' : ''}`}>
                            <label htmlFor="message" className="contact_label">Mensagem:</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="8"
                                className="contact_input"
                                placeholder="Escreva sua mensagem aqui..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onFocus={() => setMessageFocus(true)}
                                onBlur={() => setMessageFocus(false)}
                                required
                            />
                        </div>

                        {messageSent && (
                            <p className="alert_style success-message">Mensagem enviada com sucesso!</p>
                        )}
                        {submitError && (
                            <p className="alert_style error-message">Erro ao enviar mensagem. Por favor, tente novamente.</p>
                        )}

                        <button type="submit" className="button button--flex" aria-label="Enviar mensagem">
                            Enviar Mensagem <FaPaperPlane className="button_icon" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="contact_social-icon"
        aria-label={label}
        title={label}
    >
        {icon}
    </a>
);

const FormField = ({ id, name, label, type = "text", placeholder, value, onChange, onFocus, onBlur, isValid, isFocused }) => {
    const validationClass = isValid === true ? 'valid' : (isValid === false ? 'invalid' : '');
    const focusClass = isFocused ? 'focusIn' : '';

    return (
        <div className={`contact_content ${focusClass} ${validationClass}`}>
            <label htmlFor={id} className="contact_label">{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                className="contact_input"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                required={id !== 'subject'}
            />
        </div>
    );
};

export default Contact;