import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (

        <div className="header">

            <Link to="/" className="header-logo">JC*</Link>

            <div className="header-links">

                <div className="header-link-holder">
                <Link to="/about" className="header-anchor">About</Link>
                </div>

                <div className="header-link-holder">
                <Link to="/projects" className="header-anchor">Projects</Link>
                </div>

                <div className="header-link-holder">
                <Link to="/contact" className="header-anchor">Contact</Link>
                </div>

            </div>
        
        </div>

    );

}

export default Header;