import Fish from '../Fish';
import Statue from '../../assets/statue.webp';
import Coral from '../../assets/coral.webp';
import BubbleSprite from '../../assets/bubble.webp';
import './index.css';

import { useRef, useState, useEffect } from 'react';

const Bubble = ({ top, left, onExit }) => {
  const bubbleRef = useRef(null);
  const [topPosition, setTopPosition] = useState(top);
  const speed = useRef(0.05 + Math.random() * 0.1); // Slightly randomized speed
  const shouldExit = useRef(false);

  useEffect(() => {
    let animationFrameId;
    let isMounted = true;

    const animate = (timestamp) => {

      if (!isMounted || shouldExit.current) return;


      if (bubbleRef.current) {
        const bubbleRect = bubbleRef.current.getBoundingClientRect();
        const tankRect = bubbleRef.current.parentElement.getBoundingClientRect();
        
        if (bubbleRect.bottom < tankRect.top) {

          shouldExit.current = true;
          onExit();
          return;

        }

      }

      setTopPosition(prevTop => prevTop - speed.current);
      animationFrameId = requestAnimationFrame(animate);

    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {

      isMounted = false;
      cancelAnimationFrame(animationFrameId);

    };

  }, [onExit]);

  return (

    <img src={BubbleSprite} ref={bubbleRef} className="bubble" style={{ position: 'absolute', top: `${topPosition}%`, left: `${left}%`}}/>

  );

};

const FishTank = () => {

    const fishTankRef = useRef(null);
    const [bubbles, setBubbles] = useState([]);

    const handleBubbleExit = (id) => {
        setBubbles(prev => prev.filter(bubble => bubble.id !== id));
    };

    const createBubble = (x, y) => {
        setBubbles(prev => [
            ...prev,
            { id: Date.now(), x, y }
        ]);
    };

    return (

        <div id="fishtank" className="message">

            <div ref={fishTankRef} className="message-content">

                <Fish ref={fishTankRef} type={"tropical"} onBlowBubble={createBubble}></Fish>
                <Fish ref={fishTankRef} type={"tropical"} onBlowBubble={createBubble}></Fish>
                <Fish ref={fishTankRef} type={""} onBlowBubble={createBubble}></Fish>
                <Fish ref={fishTankRef} type={""} onBlowBubble={createBubble}></Fish>

                {bubbles.map(bubble => (
                    <Bubble
                        key={bubble.id}
                        top={bubble.y}
                        left={bubble.x}
                        onExit={() => handleBubbleExit(bubble.id)}
                    />
                ))}

                <div className="gradient"></div>
                <img className='coral-1' alt="Coral Emoji" src={Coral}/>
                <img className='coral-3' alt="Coral Emoji" src={Coral}/>
                <img className='coral-2' alt="Coral Emoji" src={Coral}/>
                <img className="statue" alt="Sunked Statue of Liberty" src={Statue}/>

            </div>
            <svg className="message-edge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.6 18.971"><path d="M0 12.259a24.319 24.319 0 0 0 8.426 4.781A53.363 53.363 0 0 0 20.6 18.971s-7.7-5.226-8.957-10.48a54.431 54.431 0 0 1-.937-8.49s-3.274 2.708-5.951 5.11S0 9.611 0 9.611v2.649Z"/></svg>


        </div>

    )

}

export default FishTank;