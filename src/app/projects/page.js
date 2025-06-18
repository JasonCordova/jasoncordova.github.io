import projectData from '../../../public/data.json';
import Project from '@/comps/projects/Project';
import './index.css';

export default function ProjectsPage() {
  const projects = Object.entries(projectData).map(([key, value]) => ({
    key,
    ...value
  }));

  return (
    <>

      <div className="body-panel">

        <div className="content mw">

        <div className="panel-header">
          <div className="fc">
            <div className="panel-title large">Projects</div>
            <div className="panel-desc">View my collection of projects - from creative tools that incorporate music, to fullstack CRUD applications and interactive data visualizations.</div>
          </div>
        </div>

        <div className="projects">

          {projects.map(project => (

            <Project title={project.name} desc={project.subtitle} image={project.image ? project.image : ""} video={project.video ? project.video : ""} poster={project.video_poster ? project.video_poster: ""} github={project.github} url={project.url}/>

          ))}

        </div>

        </div>
        
      </div>

    </>
  );
}