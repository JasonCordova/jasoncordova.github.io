import './index.css';
import FishTank from '../FishTank';
import marellIDemo from '../../assets/marelli-demo.webp';

const ProjectPanel = () => {

    return (

        <div className="project-panel">

            <div className="panel-subtitle">Showcase</div>
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
                        src="https://player.vimeo.com/progressive_redirect/playback/1071595198/rendition/1080p/file.mp4?loc=external&log_user=0&signature=3966f0f0fe6e27f2b187f241b359f0ce292d5a6b41dcb3046d4036829febce14"
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