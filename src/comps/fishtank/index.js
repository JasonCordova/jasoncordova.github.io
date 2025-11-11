import Fish from '../Fish';
import Statue from '../../assets/statue.webp';
import Coral from '../../assets/coral.webp';
import BubbleSprite from '../../assets/bubble.webp';
import Image from 'next/image';
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
        <Image height={400} style={{height: 'auto'}} alt="Bubble" draggable={false} className="bubble" src={BubbleSprite}/>
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

    const handleClick = (e) => {

      console.log(e.clientX);

    }

    return (

            <div ref={fishTankRef} className="fishtank project-bg-holder" onClick={handleClick}>

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
                <Image width={1} style={{width: "auto"}} alt="Coral Emoji" draggable={false} className='coral-1' src={Coral}/>
                <Image width={1} style={{width: "auto"}} alt="Coral Emoji" draggable={false} className='coral-3' src={Coral}/>
                <Image width={1} style={{width: "auto"}} alt="Coral Emoji" draggable={false} className='coral-2' src={Coral}/>
                <Image width={1} style={{width: "auto"}}className="statue" alt="Sunked Statue of Liberty" draggable={false} src={Statue}/>

            </div>

    )

}

export default FishTank;