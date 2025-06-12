import './index.css';
import Project from './Project';
import peachmixDemo from '../../assets/PeachMix_Demo.mp4';
import marelliDemo from '../../assets/marelli_demo.mp4';
import FishTank from '../FishTank/index';

const ProjectPanel = () => {

    return (

        <div id="projects" className="body-panel mw">

            <div className="panel-header">

                <div className="panel-header-left">

                    <div className="panel-title large">Showcase</div>
                    <div className="panel-desc">View my collection of projects - from creative tools that incorporate music, to fullstack CRUD applications and interactive data visualizations.</div>
                
                </div>

                <div className="panel-button">View all{}</div>

            </div>

            <div className="projects">

                <Project 
                title="PeachMix" desc="Music Platform" video={peachmixDemo} github="https://github.com/JasonCordova/peachmix" url="https://peachmix.netlify.app/"/>
                <Project 
                title="Marelli" desc="eCommerce Store" video={marelliDemo} github="https://github.com/JasonCordova/Marelli" url="https://jcmarelli.netlify.app/"/>
                <Project
                title="Sort Visualizer" desc="Web App"></Project>
                <FishTank></FishTank>

            </div>

        </div>

    );

}

export default ProjectPanel;