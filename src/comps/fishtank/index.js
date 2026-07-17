import Fish from '../fish';
import Statue from '../../assets/statue.webp';
import Coral from '../../assets/coral.webp';
import BubbleSprite from '../../assets/bubble.webp';
import Ham from '../../assets/ham.webp';
import Image from 'next/image';
import './index.css';

import { useRef, useState, useEffect } from 'react';

const Bubble = ({ top, left, onExit, onClick }) => {

  const [topPosition, setTopPosition] = useState(top);
  const [popped, setPopped] = useState(false);

  const bubbleSizeStart = 4;
  const bubbleSizeEnd = 10;
  const size = useRef(Math.random() * (bubbleSizeEnd - bubbleSizeStart) + bubbleSizeStart);
  const speed = useRef(0.1 + Math.random() * 0.1); // Slightly randomized speed
  const shouldExit = useRef(false);

  useEffect(() => {

    let animationFrameId;
    let isMounted = true;

    const animate = () => {

      if (!isMounted || shouldExit.current) return;

      setTopPosition(prevTop => {

        const next = prevTop - speed.current;

        // Exit once it's fully scrolled past the top, no DOM read needed
        if (next < -size.current) {

          shouldExit.current = true;
          onExit();

          return next;

        }

        return next;
        
      });

      if (!shouldExit.current) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, [onExit]);

  const handlePop = () => {

    setPopped(true);
    onClick();

  }

  return (

    <div onMouseEnter={handlePop} onClick={handlePop} className="bubble-holder" style={{ pointerEvents: `${popped ? "none" : "all"}`, transform: `translate(-50%, -50%) scale(${popped ? 0 : 1})`, height: `${size.current}%`, position: 'absolute', top: `${topPosition}%`, left: `${left}%`}}>
        <Image height={400} style={{height: 'auto'}} alt="Bubble" draggable={false} className="bubble" src={BubbleSprite}/>
    </div>

  );

};

const FishTank = ({ fishTankRef }) => {

    const bubbleCounter = useRef(0);
    const hamRef = useRef(null);
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {

      const updateHamPosition = (e) => {

        const x = e.detail.x;
        const y = e.detail.y;

        if (hamRef.current) {
          hamRef.current.style.left = `${x}%`;
          hamRef.current.style.top = `${y}%`;
        }
        
      }

      window.addEventListener("hamPosition", updateHamPosition);

      return () => {
        window.removeEventListener("hamPosition", updateHamPosition);
      }

    }, []);

    const handleBubblePop = (id) => {

      // Pass new custom event o play new bubble pop audio:
      const bubblePopEvent = new CustomEvent("bubblePop");
      window.dispatchEvent(bubblePopEvent);

      // Call on handleBubbleExit to remove bubble after the transition delay:
      setTimeout(() => {
        handleBubbleExit(id);
      }, 200);

    }

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

      // console.log(e.clientX);

    }

    return (

            <div ref={fishTankRef} className="fishtank project-bg-holder" onClick={handleClick}>

                <Image ref={hamRef} alt="Ham" draggable={false} className='ham' src={Ham}/>

                <Fish ref={fishTankRef} type={"tropical"} onBlowBubble={createBubble}></Fish>
                <Fish ref={fishTankRef} type={"tropical"} onBlowBubble={createBubble}></Fish>
                <Fish ref={fishTankRef} type={""} onBlowBubble={createBubble}></Fish>
                <Fish ref={fishTankRef} type={""} onBlowBubble={createBubble}></Fish>

                {bubbles.map(bubble => (
                    <Bubble
                        key={bubble.id}
                        top={bubble.y}
                        left={bubble.x}
                        onClick={() => handleBubblePop(bubble.id)}
                        onExit={() => handleBubbleExit(bubble.id)}
                    />
                ))}

                <div className="gradient"></div>
                <Image width={1} style={{width: "auto"}} alt="Coral Emoji" draggable={false} className='coral-1' src={Coral}/>
                <Image width={1} style={{width: "auto"}} alt="Coral Emoji" draggable={false} className='coral-3' src={Coral}/>
                <Image width={1} style={{width: "auto"}} alt="Coral Emoji" draggable={false} className='coral-2' src={Coral}/>
                <Image width={1} style={{width: "auto"}} className="statue" alt="Sunked Statue of Liberty" draggable={false} src={Statue}/>

            </div>

    )

}

export default FishTank;