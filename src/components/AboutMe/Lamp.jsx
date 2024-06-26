import { PropTypes } from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../../Styles/AboutMe/Lamp.module.css';

const Lamp = ({mode}, ref) => {

    const cardVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: { duration: 2 },
        },
        enter: {
          y: '10vh',
          transition: { duration: 0.2 },
        }
    }

    const lampVariants = {
        work: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        social: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        style={{zIndex: 0}}
         ref={ref} className = { styles.divStyle }>
            <div className={ styles.ceilLamp }>
                <img src="aboutMeImages/lightSwitch/ceilLamp.png" style={{width:"60%"}}/>
            </div>
            <AnimatePresence>
                {mode==='work' && <motion.div
                variants={lampVariants}
                initial="social"
                animate="work"
                exit="social"
                className={ styles.lampLight }>
                    <img src="aboutMeImages/lightSwitch/light.svg" style={{width:"100%"}}/>
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    )
};

Lamp.propTypes = {
    mode: PropTypes.oneOf(['work', 'social']),
}

export default Lamp;