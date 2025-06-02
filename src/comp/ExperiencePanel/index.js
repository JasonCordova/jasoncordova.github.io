import './index.css';
import { useState } from 'react';
import WorkExperience from './WorkExperience';
import EducationExperience from './EducationExperience';

const ExperiencePanel = () => {

    const [tab, setTab] = useState("work");

    return (
        <>
        <div className="experience">

            <div className="dot-bg"></div>
            <div className="panel-title">Experience</div>

            <div className="tab-list">

                <div className="experience-tab">

                    <div className={`tab-cell${tab === "education" ? " active" : ""}`}></div>
                    <div className={`tab-option${tab === "work" ? " active" : ""}`} onClick={() => {setTab("work");}}>Work</div>
                    <div className={`tab-option${tab === "education" ? " active" : ""}`} onClick={() => {setTab("education");}}>Education</div>

                </div>

            </div>

            <div className="exp-holder">

                {tab === "work" ? <WorkExperience/> : <EducationExperience/>}


            </div>

        </div>
        </>
    );

}

export default ExperiencePanel;