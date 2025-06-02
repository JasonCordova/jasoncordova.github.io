import njitLogo from '../../assets/njit.webp';

const EducationExperience = () => {

    return (

        <div className="exp-cell">

            <img src={njitLogo} className="exp-img" alt="New Jersey Institute of Technology Logo"></img>

            <div className="exp-info">

                <div className="exp-date">May 2025</div>
                <div className="exp-company">New Jersey Institute of Technology</div>
                <div className="exp-title">BSc in Computer Science</div>

                <ul className="exp-desc">

                    <li>Awarded Dean's List Award for each semester of enrollment.</li>
                    <li>Trained new hires on AWS and guided them through onboarding.</li>
                    <li>Maintained data pipeline containing end-to-end user test cases, ensuring quality and reusability using Maven, JIRA, and Xray.</li>

                </ul>

            </div>

        </div>

    );

}

export default EducationExperience;