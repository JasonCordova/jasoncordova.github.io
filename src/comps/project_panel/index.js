import projectData from '../../../public/data.json';
import './index.css';
import Project from '@/comps/project/project';
import Link from 'next/link';

const ProjectPanel = () => {

    const numberofProjects = 3;

    const projects = Object.entries(projectData).map(([key, value]) => ({
        key,
        ...value
      })).slice(0, numberofProjects);

    return (

        <div id="projects" className="body-panel">

            <div className="content mw">

            <div className="panel-header">

                <div className="panel-header-left">

                    <div className="panel-title large fade-in">Showcase</div>
                    <div className="panel-desc fade-in">View my collection of projects - from creative tools that incorporate music, to fullstack CRUD applications and interactive data visualizations.</div>
                
                </div>

                <Link scroll={true} href="/projects" className="panel-button fade-in">View all</Link>

            </div>

            <div className="projects">

                {projects.map(project => (

                    <Project key={project.name} title={project.name} desc={project.subtitle} image={project.image ? project.image : ""} video={project.video ? project.video : ""} poster={project.video_poster ? project.video_poster: ""} github={project.github} url={project.url}/>

                ))}

            </div>

            </div>

        </div>

    );

}

export default ProjectPanel;