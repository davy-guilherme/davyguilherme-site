import Experience from '../components/Experience';
import Project from '../components/Project';
import Contact from '../components/Contact.jsx';
import {experiences, projects, contacts} from '../db/data.js';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import DG from '../assets/davy-guilherme-sm.png';
import './home.scss'

const HomePage = () => {

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
                                <b>Desenvolvedor Web Full Stack e Maker</b>
                            </div>
                        </header>
                        <div className="about">
                            <p>Possuo ampla experiência no desenvolvimento e manutenção de websites, utilizando principalmente PHP. Recentemente, estou aprofundando meus conhecimentos em JavaScript, especialmente com React, desenvolvendo projetos práticos para aplicar essa tecnologia de forma eficaz. Além disso, estou me dedicando ao estudo de eletrônica para adquirir habilidades em projetos envolvendo microcontroladores e Internet das Coisas (IoT).</p>
                        </div>
                    </motion.div>
                )}
                </InView>

            </div>

            <div className="projects">
                <h2>Projetos</h2>
                <div className="inner">
                    {projects.sort((a, b) => b.id - a.id).map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </div>
            </div>


            <div className="experiences">
                <h2>Experiências</h2>
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
                <p>&copy; 2024</p>
            </footer>

            
            
        </div>
    );
}
 
export default HomePage;