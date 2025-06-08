import './index.css';
import Project from './Project';
import FishTank from '../FishTank';
import marellIDemo from '../../assets/marelli-demo.webp';
import peachmixDemo from '../../assets/PeachMix_Demo.mp4';
import marelliDemo from '../../assets/marelli_demo.mp4';

const ProjectPanel = () => {

    return (

        <div className="project-panel">

            <div className="panel-title">Projects</div>

            <div className="projects">

                <Project 
                title="PeachMix" desc="Music Platform" video={peachmixDemo}/>
                <Project 
                title="Marelli" desc="eCommerce Store" video={marelliDemo} color="marelli"/>
                <Project
                title="Sort Visualizer" desc="Web App" color="marelli" image={marellIDemo}></Project>

            </div>

        </div>

    );

}

export default ProjectPanel;