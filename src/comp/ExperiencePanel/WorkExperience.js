import broadridgeLogo from '../../assets/broadridge.webp';
import harmonLogo from '../../assets/harmon.webp';

const WorkExperience = () => {

    return (

        <>

            <div className="exp-cell">

                <img src={broadridgeLogo} className="exp-img" alt="Broadridge Logo"></img>

                <div className="exp-info">

                    <div className="exp-date">Jun 2024 - Aug 2024</div>
                    <div className="exp-company">Broadridge</div>
                    <div className="exp-title">Software Quality Assurance Intern</div>

                    <ul className="exp-desc">

                        <li>Use Java, Selenium, Serenity, Cucumber, and Gherkin to triage automated test cases and reduce errors by 70%</li>
                        <li>Trained new hires on AWS and guided them through onboarding.</li>
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

                        <li>Helped move from manual to automated testing using Java, Selenium, Serenity, Cucumber, and Gherkin in an Agile environment.</li>
                        <li>Triaged test cases and reduced overall test errors by 70%.</li>
                        <li>Trained new hires on AWS and guided them through onboarding.</li>
                        <li>Maintained data pipeline containing end-to-end user test cases, ensuring quality and reusability using Maven, JIRA, and Xray.</li>

                    </ul>

                </div>

            </div>

        </>

    );
    
}

export default WorkExperience;