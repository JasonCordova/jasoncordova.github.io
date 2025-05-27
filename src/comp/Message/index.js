import wave from '../../assets/wave.webp';
import headshot from '../../assets/headshot.webp';
import './index.css';

const Message = (props) => {

    return (

        <div className={`message clipped ${props.type === "receiver" ? "" : "sender"}`}>

            {props.type === "image" ? 

                <>
                
                    <img className="message-image" src={headshot} alt="Photo of Jason"></img>

                </>

            :

                <>

                    <div className="message-content">
                        <span>{props.message}</span>
                        {props.emoji != null ? <img className="emoji" src={wave} alt="Hand waving"></img> : ""}
                    </div>
                    <svg className="message-edge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.6 18.971"><path d="M0 12.259a24.319 24.319 0 0 0 8.426 4.781A53.363 53.363 0 0 0 20.6 18.971s-7.7-5.226-8.957-10.48a54.431 54.431 0 0 1-.937-8.49s-3.274 2.708-5.951 5.11S0 9.611 0 9.611v2.649Z"/></svg>

                </>

            }

        </div>

    );

}

export default Message;