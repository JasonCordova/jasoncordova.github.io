import './index.css';
import headerImage from '../../assets/headshot.webp';

const Header = () => {

    return (

        <div className="header">

            <div className="header-contact-info">

                <img className="header-img" src={headerImage}></img>
                <div className="header-name">Jason</div>

            </div>

        </div>

    );

}

export default Header;