import './index.css';
import { useState } from 'react';
import Image from 'next/image';

const ExperiencePanel = () => {

    const [tab, setTab] = useState("work");

    return (
        <>
        <div id="experience" className="body-panel">

            <div className="panel-title large fade-in">Experience</div>

            <div className="tab-list fade-in">

                <div className="experience-tab">

                    <div className={`tab-cell${tab === "education" ? " active" : ""}`}></div>
                    <div className={`tab-option${tab === "work" ? " active" : ""}`} onClick={() => {setTab("work");}}>Work</div>
                    <div className={`tab-option${tab === "education" ? " active" : ""}`} onClick={() => {setTab("education");}}>Education</div>

                </div>

            </div>

            <div className="exp-holder mw">

                <div className={`fade-in exp-cell${tab === "work" ? "" : " hidden"}`}>

                    <Image width={1} height={1} src="/earthcam.webp" className="exp-img" alt="EarthCam Logo"></Image>
    
                     <div className="exp-info">

                        <div className="exp-company">EarthCam</div>
                        <div className="exp-title">Junior Developer</div>
                        <div className="exp-date">Oct 2025 - Present</div>

                    </div>

                    <ul className="exp-desc">

                        <li>Developed and maintained new RESTful APIs to support new features and improve backend–frontend integration.</li>
                        <li>Built interactive frontend components with Laravel Blade and TypeScript, enhancing UI consistency and UX alignment.</li>
                        <li>Optimized database queries and application logic, boosting backend performance and response speed.</li>

                    </ul>

                </div>

                <div className={`fade-in exp-cell${tab === "work" ? "" : " hidden"}`}>

                    <Image width={1} height={1} src="/broadridge.webp" className="exp-img" alt="Broadridge Logo"></Image>
    
                     <div className="exp-info">

                        <div className="exp-company">Broadridge</div>
                        <div className="exp-title">Software Quality Assurance Intern</div>
                        <div className="exp-date">Jun 2024 - Aug 2024</div>

                    </div>

                    <ul className="exp-desc">

                        <li>Automated test cases using Gherkin, Selenium, and Cucumber, helping reduce test errors by 70%.</li>
                        <li>Led onboarding sessions and trained new hires on AWS services and QA tools.</li>
                        <li>Maintained data pipeline containing end-to-end user test cases, ensuring quality and reusability using Maven, JIRA, and Xray.</li>

                    </ul>

                </div>


                <div className={`fade-in exp-cell${tab === "work" ? "" : " hidden"}`}>

                    <Image width={1} height={1} src="/harmon.webp" className="exp-img" alt="Harmon Logo"></Image>

                    <div className="exp-info">

                        <div className="exp-company">Harmon Face Values</div>
                        <div className="exp-title">Supply Chain Analyst & Engineer</div>
                        <div className="exp-date">Jun 2022 - July 2022</div>

                        <ul className="exp-desc">

                            <li>Analyzed warehouse data using IBM Cognos to assess productivity and identify areas of improvement.</li>
                            <li>Processed 5,000+ daily records to construct KPIs for multiple store branches.</li>
                            <li>Monitored warehouse operations and proposed actionable data-driven insights during weekly meetings.</li>

                        </ul>

                    </div>

                </div>


                <div className={`exp-cell${tab === "education" ? "" : " hidden"}`}>

                    <Image width={1} height={1} src="/njit.webp" className="exp-img" alt="New Jersey Institute of Technology Logo"></Image>

                    <div className="exp-info">

                        <div className="exp-company">New Jersey Institute of Technology</div>
                        <div className="exp-title">B.S. in Computer Science</div>
                        <div className="exp-date">May 2025</div>

                        <ul className="exp-desc">

                            <li>Graduated Magna Cum Laude with a 3.7 GPA</li>
                            <li>Awarded Dean&#39;s List Honors eight times for consistent academic excellence</li>
                            <li>2nd Place Senior Capstone under RDE Systems for developing a Medication Adherence Web App</li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>
        </>
    );

}

export default ExperiencePanel;