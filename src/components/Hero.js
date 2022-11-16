import './Hero.css';
import { motion, Variants } from 'framer-motion';

const totalWord = {

    hidden: { translateY: 0 },
    show: {

        translateY: 0,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.01,
            staggerDirection: 1
        }

    }

}

const totalLetter = {

    hidden: { opacity: 0, translateY: 100 },
    show: { opacity: 1, translateY: 0 }

}

const Hero = (props) => {

    return (

        <motion.div className="hero" initial={{opacity: 1, y: 0}} exit={{opacity: 0, y: 100}}>

            <motion.div variants={totalWord} initial="hidden" animate="show" className="hero-title">

                {props.title.split("").map((char, index) => {

                    return (<motion.span variants={totalLetter} className="ind-char" key={index}>{char}</motion.span>);

                })}

            </motion.div>

            <motion.div variants={totalLetter} initial="hidden" animate="show" className="hero-desc">{props.desc}</motion.div>

        </motion.div>


    );

}

export default Hero;