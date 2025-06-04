import './index.css';
import FishTank from '../FishTank';

const ProjectPanel = () => {

    return (

        <div className="project-panel">

            <div className="projects">

                <div className="project-cell square">

                    <div className="project-sub">E-Commerce</div>
                    <div className="project-title">Marelli</div>

                </div>

                <div className="project-cell rect">

                    <div className="project-sub">Music Platform</div>
                    <div className="project-title">PeachMix</div>

                </div>

                <div className="project-cell rect">

                    <div className="project-sub">Web App</div>
                    <div className="project-title">Sort Visualizer</div>

                </div>

                    <FishTank/>

            </div>

        </div>

    );

}

export default ProjectPanel;