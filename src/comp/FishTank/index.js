import Fish from '../Fish';
import Statue from '../../assets/statue.webp';
import Coral from '../../assets/coral.webp';
import BubbleSprite from '../../assets/bubble.webp';
import './index.css';

import { useRef, useState, useEffect } from 'react';

const Bubble = ({ top, left, onExit }) => {
  const bubbleRef = useRef(null);
  const [topPosition, setTopPosition] = useState(top);
  const size = useRef(Math.random() * (4 - 1.5) + 1.5);
  const speed = useRef(0.1 + Math.random() * 0.1); // Slightly randomized speed
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

    <div ref={bubbleRef} className="bubble-holder" style={{ width: `${size.current}%`, position: 'absolute', top: `${topPosition}%`, left: `${left}%`}}>
      <img draggable="false" src={BubbleSprite} className="bubble" alt="Bubble"/>
    </div>

  );

};

const FishTank = () => {

    const fishTankRef = useRef(null);
    const bubbleCounter = useRef(0);
    const [bubbles, setBubbles] = useState([]);

    const handleBubbleExit = (id) => {
        setBubbles(prev => prev.filter(bubble => bubble.id !== id));
    };

    const createBubble = (x, y) => {
        setBubbles(prev => [
            ...prev,
            { id: `${bubbleCounter.current++}`, x, y}
        ]);
    };

    return (

            <div ref={fishTankRef} className="fishtank square">

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
                <img draggable="false" className='coral-1' alt="Coral Emoji" src={Coral}/>
                <img draggable="false" className='coral-3' alt="Coral Emoji" src={Coral}/>
                <img draggable="false" className='coral-2' alt="Coral Emoji" src={Coral}/>
                <img draggable="false" className="statue" alt="Sunked Statue of Liberty" src={Statue}/>

            </div>

    )

}

export default FishTank;