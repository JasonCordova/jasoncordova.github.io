const Project = (props) => {

    return (

        <div className={`project-cell`}>

            {props.video ? 
            <video
                className="project-bg"
                src={props.video}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
                webkit-playsinline="true"
                preload="none"
                >
            </video>
            : <img className={`project-bg ${props.color}`} src={props.image}></img>}

            <div className="project-info">

                <div className="project-title">{props.title}</div>
                <div className="project-sub">{props.desc}</div>

            </div>


        </div>

    );

}

export default Project;