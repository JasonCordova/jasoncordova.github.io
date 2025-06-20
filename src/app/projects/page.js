import projectData from '../../../public/data.json';
import Project from '@/comps/project/project';
import './index.css';

export const metadata = {
  title: "Projects - Jason Cordova",
  description: "Jason Cordova is a Software Engineer based in New Jersey specializing in Backend Development & QA.",
};

export default function ProjectsPage() {
  const projects = Object.entries(projectData).map(([key, value]) => ({
    key,
    ...value
  }));

  return (
    <>

      <div className="body-panel header-gap">

        <div className="content mw">

        <div className="panel-header">
          <div className="fc">
            <div className="panel-title large fade-in">Projects</div>
            <div className="panel-desc fade-in">View my collection of projects - from creative tools that incorporate music, to fullstack CRUD applications and interactive data visualizations.</div>
          </div>
        </div>

        <div className="projects">

          {projects.map(project => (

            <Project key={project.name} title={project.name} desc={project.subtitle} image={project.image ? project.image : ""} video={project.video ? project.video : ""} poster={project.video_poster ? project.video_poster: ""} github={project.github} url={project.url}/>

          ))}

        </div>

        </div>
        
      </div>

    </>
  );
}