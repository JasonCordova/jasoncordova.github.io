import njitLogo from '../../assets/njit.webp';

const EducationExperience = () => {

    return (

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

    );

}

export default EducationExperience;