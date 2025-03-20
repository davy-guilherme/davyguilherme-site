import Experience from '../components/Experience';
import Project from '../components/Project';
import Contact from '../components/Contact.jsx';
import {getExperiences, getProjects, contacts} from '../db/data.js';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import DG from '../assets/davy-guilherme-sm.png';
import './home.scss'

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const HomePage = () => {

    const { t } = useTranslation();
    const anoAtual = new Date().getFullYear();

    const projects = getProjects(t);
    const experiences = getExperiences(t);

    // useEffect(() => {
    //     // Verifica o idioma do navegador antes de chamar a API
    //     const browserLanguage = navigator.language.startsWith("pt") ? "pt" : "en";
    //     console.log("Idioma do navegador detectado:", browserLanguage);
    //     i18n.changeLanguage(browserLanguage); // Define o idioma inicial
    
    //     // Tenta detectar a localização do usuário via IP
    //     fetch("https://ipapi.co/json/")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             const countryCode = data.country_code;
    //             const detectedLanguage = countryCode === "BR" ? "pt" : "en";
    
    //             console.log("Idioma detectado pela API:", detectedLanguage);
    
    //             if (detectedLanguage !== i18n.language) {
    //                 i18n.changeLanguage(detectedLanguage);
    //             }
    //         })
    //         .catch(() => {
    //             console.warn("Falha ao detectar localização, mantendo idioma do navegador.");
    //         });
    // }, [i18n]);

    //// -------


    // useEffect(() => {
    //     // Define inglês como padrão inicial
    //     let defaultLanguage = "en";
    
    //     // Detecta o idioma do navegador (caso esteja disponível)
    //     if (navigator.language) {
    //         const browserLanguage = navigator.language.slice(0, 2); // Pega só "pt" ou "en", por exemplo
    //         if (browserLanguage === "pt") {
    //             defaultLanguage = "pt";
    //         }
    //     }
    
    //     console.log("Idioma do navegador detectado:", defaultLanguage);
    
    //     // Aplica o idioma padrão antes de chamar a API
    //     i18n.changeLanguage(defaultLanguage);
    
    //     // Tenta detectar a localização do usuário via API
    //     fetch("https://ipapi.co/json/")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             const countryCode = data.country_code;
    //             const detectedLanguage = countryCode === "BR" ? "pt" : "en";
    
    //             console.log("Idioma detectado pela API:", detectedLanguage);
    //             i18n.changeLanguage(detectedLanguage);
    //         })
    //         .catch(() => {
    //             console.warn("Falha ao detectar localização, usando inglês como fallback.");
    //         });
    // }, [i18n]);

    useEffect(() => {
        // Detecta o idioma do navegador
        const browserLanguage = navigator.language || navigator.userLanguage; // userLanguage para compatibilidade
        const langCode = browserLanguage ? browserLanguage.slice(0, 2) : "en"; // Garante um fallback
        console.log("Idioma do navegador detectado:", langCode);
    
        // Assume inglês como padrão, mas mantém pt/en se detectado corretamente
        const defaultLanguage = ["pt", "en"].includes(langCode) ? langCode : "en";
        i18n.changeLanguage(defaultLanguage);
    
        // Tenta detectar o país via IP
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                const countryCode = data.country_code;
                const detectedLanguage = countryCode === "BR" ? "pt" : "en"; // Sempre inglês como fallback
    
                console.log("Idioma detectado pela API:", detectedLanguage);
                i18n.changeLanguage(detectedLanguage);
            })
            .catch(() => {
                console.warn("Falha ao detectar localização, mantendo idioma do navegador.");
            });
    }, [i18n]);
    
    
    const animationVariants = {
        initial: {
            opacity: 0,
            y: -24,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
        }
    }

    const imageVariants = {
        initial: {
            y: -24,
            opacity: 0.8,
            scale: 0.6,
        },
        animate: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 2 },
        }
    }

    console.log(projects[1]); // Deve imprimir "Verdinho Vegano"
    // console.log(projects[5]); // Deve imprimir "SBC Guia Online"
    
    return (
        <div className="home">
            <div className="top">
                <InView triggerOnce>
                {({ inView, ref}) => (
                    <motion.div className='inner'
                        variants={animationVariants}
                        initial="initial"
                        animate={inView ? 'animate' : 'initial'}
                        ref={ref}
                    >
                        <header>
                            <InView triggerOnce>
                                {({ inView: imageInView, ref: imageRef }) => (
                                    <motion.img
                                        src={DG}
                                        alt="#"
                                        variants={imageVariants}
                                        initial="initial"
                                        animate={imageInView ? 'animate' : 'initial'}
                                        ref={imageRef}
                                    />
                                )}
                            </InView>
                            {/* <img src={ DG } alt="Davy Guilherme" /> */}
                            <div className="info">
                                <h1>Davy Guilherme</h1>
                                <b>{t("description")}</b>
                            </div>
                        </header>
                        <div className="about">
                            <p>{t("about")}</p>
                        </div>
                    </motion.div>
                )}
                </InView>

            </div>

            <div className="projects">
                <h2>{t("projects.title")}</h2>
                <div className="inner">
                    {projects.sort((a, b) => b.id - a.id).map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </div>
            </div>


            <div className="experiences">
                <h2>{t("experiences.title")}</h2>
                <div className="inner">
                    {experiences.sort((a, b) => b.id - a.id).map((experience) => (
                        <Experience key={experience.id} experience={experience} />
                    ))}
                </div>
            </div>

            <div className="contacts">
                <h2>Contato</h2>
                <div className="inner">
                    {contacts.map((contact, index) => (
                        <Contact key={index} contact={contact} />
                    ))}
                </div>
            </div>

            <footer>
                <p>&copy; {anoAtual}</p>
            </footer>

            
            
        </div>
    );
}
 
export default HomePage;