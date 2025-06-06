import './index.css';
import { useState } from 'react';
import broadridgeLogo from '../../assets/broadridge.webp';
import harmonLogo from '../../assets/harmon.webp';
import njitLogo from '../../assets/njit.webp';

const ExperiencePanel = () => {

    const [tab, setTab] = useState("work");

    return (
        <>
        <div className="experience">

            <div className="panel-title">Experience</div>

            <div className="tab-list">

                <div className="experience-tab">

                    <div className={`tab-cell${tab === "education" ? " active" : ""}`}></div>
                    <div className={`tab-option${tab === "work" ? " active" : ""}`} onClick={() => {setTab("work");}}>Work</div>
                    <div className={`tab-option${tab === "education" ? " active" : ""}`} onClick={() => {setTab("education");}}>Education</div>

                </div>

            </div>

            <div className="exp-holder">

                {tab === "work" ?

                <>

                    <div className="exp-cell">

                        <img src={broadridgeLogo} className="exp-img" alt="Broadridge Logo"></img>

                        <div className="exp-info">

                            <div className="exp-date">Jun 2024 - Aug 2024</div>
                            <div className="exp-company">Broadridge</div>
                            <div className="exp-title">Software Quality Assurance Intern</div>

                            <ul className="exp-desc">

                                <li>Automated test cases using Jira, Selenium, and Cucumber, helping reduce test errors by 70%.</li>
                                <li>Led onboarding sessions and trained new hires on AWS services and QA tools.</li>
                                <li>Maintained data pipeline containing end-to-end user test cases, ensuring quality and reusability using Maven, JIRA, and Xray.</li>

                            </ul>

                        </div>

                    </div>


                    <div className="exp-cell">

                        <img src={harmonLogo} className="exp-img" alt="Harmon Logo"></img>

                        <div className="exp-info">

                            <div className="exp-date">Jun 2022 - July 2022</div>
                            <div className="exp-company">Harmon Face Values</div>
                            <div className="exp-title">Supply Chain Analyst & Engineer</div>

                            <ul className="exp-desc">

                                <li>Analyzed warehouse data using IBM Cognos to assess productivity and identify areas of improvement.</li>
                                <li>Processed 5,000+ daily records to construct key points indicators for multiple store branches.</li>
                                <li>Monitored warehouse operations and proposed actionable data-driven insights during weekly operations meetings, improving workplace efficiency by 13%.</li>

                            </ul>

                        </div>

                    </div>

                </>
                
                
                :
                
                <div className="exp-cell">

                    <img src={njitLogo} className="exp-img" alt="New Jersey Institute of Technology Logo"></img>

                    <div className="exp-info">

                        <div className="exp-date">May 2025</div>
                        <div className="exp-company">New Jersey Institute of Technology</div>
                        <div className="exp-title">B.S. in Computer Science</div>

                        <ul className="exp-desc">

                            <li>Graduated Magna Cum Laude with a 3.7 GPA in Computer Science</li>
                            <li>Awarded Dean's List Honors eight times for consistent academic excellence</li>
                            <li>2nd Place Senior Capstone under RDE Systems for developing a Medication Adherence Web App</li>

                        </ul>

                    </div>

                </div>

                }


            </div>

        </div>
        </>
    );

}

export default ExperiencePanel;