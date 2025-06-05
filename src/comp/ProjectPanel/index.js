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
                    <video
                        className="project-video"
                        src="https://player.vimeo.com/progressive_redirect/playback/1071595198/rendition/1080p/file.mp4?loc=external&log_user=0&signature=3966f0f0fe6e27f2b187f241b359f0ce292d5a6b41dcb3046d4036829febce14"
                        autoplay="true"
                        muted="true"
                        loop="true"
                        playsinline="true"
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