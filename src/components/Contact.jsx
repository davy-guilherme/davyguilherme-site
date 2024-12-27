import './contact.scss'
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Contact = ( props ) => {
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
            {({ inView, ref}) => (
                <motion.div 
                    // whileHover={{ scale: 1.2 }}
                    // whileTap={{ scale: 1.1 }}
                    variants={animationVariants}
                    initial="initial"
                    animate={inView ? 'animate' : 'initial'}
                    className="contact"
                    // viewport={{
                    //     once: true
                    // }}
                    ref={ref}
                >   
                    {/* <GitHubIcon /> */}
                    <div className='label'>
                        { props.contact.name }
                    </div>
                    <a href={ props.contact.link } target='_blank'>
                        { props.contact.nick }
                        <ArrowOutwardIcon style={{fontSize: 12}} />
                    </a>
                    
                </motion.div>
            )}
        </InView>
        
    );
}
 
export default Contact;