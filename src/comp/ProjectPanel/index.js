import './index.css';
import FishTank from '../FishTank';
import marellIDemo from '../../assets/marelli-demo.webp';
import peachmixDemo from '../../assets/PeachMix_Demo.mp4';

const ProjectPanel = () => {

    return (

        <div className="project-panel">

            <div className="panel-title">Projects</div>

            <div className="projects">

                <div className="project-cell square marelli">

                    <div className="project-sub">eCommerce</div>
                    <div className="project-title">Marelli</div>

                    <img className="project-bg" src={marellIDemo}></img>


                </div>

                <div className="project-cell rect">
                    <div className="project-sub">Music Platform</div>
                    <div className="project-title">PeachMix</div>
                    <video
                        className="project-bg"
                        src={peachmixDemo}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        webkit-playsinline="true"
                        preload="none"
                        >
                    </video>
                    

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