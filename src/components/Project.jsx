import './project.scss'
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Project = (props) => {
    const animationVariants = {
        initial: {
            opacity: 0,
            y: 24,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
        }
    }

    const imageVariants = {
        initial: {
            opacity: 0,
            scale: 0.8,
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.4 },
        }
    }

    return (
        <InView triggerOnce>
            {({ inView, ref}) => (
                <motion.div 
                    // whileHover={{ scale: 1.2 }}
                    // whileTap={{ scale: 1.1 }}
                    variants={animationVariants}
                    initial="initial"
                    animate={inView ? 'animate' : 'initial'}
                    className="project"
                    // viewport={{
                    //     once: true
                    // }}
                    ref={ref}
                >
                    <div className="status">
                        <span>{ props.project.date }</span>
                        <span>{ props.project.status }</span>
                    </div>
                    <div className="info">
                        { props.project.image && (
                            // <img src={ props.project.image } alt="#" />
                            <InView triggerOnce>
                                {({ inView: imageInView, ref: imageRef }) => (
                                    <motion.img
                                        src={props.project.image}
                                        alt="#"
                                        variants={imageVariants}
                                        initial="initial"
                                        animate={imageInView ? 'animate' : 'initial'}
                                        ref={imageRef}
                                    />
                                )}
                            </InView>
                        )}
                        { props.project.link ? (<a href={props.project.link} target="_blank"><h4>{props.project.name}</h4><ArrowOutwardIcon style={{fontSize: 12}} /></a>) : (<h4>{props.project.name}</h4>)}
                        
                        <div className="description">
                            <p>{ props.project.description }</p>

                        </div>
                        <div className="tags">
                            { props.project.tags.split(",").map((tag, index) => (
                                <span key={index} className="tag">
                                    #{tag.trim()}
                                </span>
                            )) }
                        </div>
                    </div>
                </motion.div>
            )}
        </InView>
        
    );
}
 
export default Project;