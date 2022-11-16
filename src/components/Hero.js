import './Hero.css';

const Hero = (props) => {

    return (

        <div className="hero">

            <div className="hero-title">

                {props.title.split("").map((char, index) => {

                    return (<span className="ind-char" key={index}>{char}</span>);

                })}

            </div>
            <div className="hero-desc">{props.desc}</div>

        </div>

    );

}

export default Hero;