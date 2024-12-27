import './experience.scss'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer';

const Experience = ( props ) => {
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

    return (
        <InView triggerOnce>
            {({ inView, ref }) => (
                <motion.div className="experience"
                    variants={animationVariants}
                    initial="initial"
                    animate={inView ? 'animate' : 'initial'}
                    // viewport={{
                    //     once: true
                    // }}
                    ref={ref}
                >
                    <div className="date"><span>{ props.experience.date }</span></div>
                    <div className="info">
                        <h4>{ props.experience.cargo } - { props.experience.empresa }</h4>
                        <div className="description">
                            <p>{ props.experience.description }</p>
                        </div>
                        <div className="tags">
                        { props.experience.tags.split(",").map((tag, index) => (
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
 
export default Experience;