import Fish from '../Fish';
import Statue from '../../assets/statue.webp';
import Coral from '../../assets/coral.webp';
import Herb from '../../assets/herb.webp';
import './index.css';

const FishTank = () => {

    return (

        <div className="message">

            <div className="message-content fishtank">

                <Fish type={"tropical"}></Fish>
                <Fish type={"tropical"}></Fish>
                <Fish></Fish>
                <Fish></Fish>

                <div className="gradient"></div>
                <img className='coral-1' src={Coral}/>
                <img className='coral-3' src={Coral}/>
                <img className='coral-2' src={Coral}/>
                <img className="statue" src={Statue}/>

            </div>
            <svg className="message-edge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.6 18.971"><path d="M0 12.259a24.319 24.319 0 0 0 8.426 4.781A53.363 53.363 0 0 0 20.6 18.971s-7.7-5.226-8.957-10.48a54.431 54.431 0 0 1-.937-8.49s-3.274 2.708-5.951 5.11S0 9.611 0 9.611v2.649Z"/></svg>


        </div>

    )

}

export default FishTank;