import Header from '../components/Header.js';
import { motion } from 'framer-motion';

const Projects = () => {

    return (

        <>
            <Header/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}            
            >Hello</motion.div>
        </>

    );

}

export default Projects;