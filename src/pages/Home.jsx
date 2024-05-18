import Experience from '../components/Experience';
import Project from '../components/Project';
import './home.scss'

const HomePage = () => {
    return (
        <div className="home">
            <div className="top">
                <header>
                    <img src="#" alt="#" />
                    <div className="info">
                        <h1>Davy Guilherme</h1>
                        <p>Desenvolvedor Web Full Stack e Maker</p>
                    </div>
                </header>
                <div className="about">
                    <p>Tenho experiência com desenvolvimento e manutenção de websites utilizando principalmente PHP. Recentemente, comecei a aprofundar meus conhecimentos em React, desenvolvendo projetos para praticar e aplicar essa tecnologia. Além disso, estou me dedicando ao estudo de eletrônica para adquirir habilidades em projetos que envolvem microcontroladores e IoT.</p>
                </div>
            </div>

            <div className="projects">
                <h2>Projetos</h2>
                <div className="inner">
                    <Project />
                    <Project />
                    <Project />
                </div>
                
            </div>


            <div className="experiences">
                <h2>Experiências</h2>
                <div className="inner">
                    <Experience />
                    <Experience />
                    <Experience />
                </div>
            </div>

            
            
        </div>
    );
}
 
export default HomePage;