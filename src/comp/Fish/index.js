import FishSprite from '../../assets/fish.webp';
import TropicalFishSprite from '../../assets/tropical_fish.webp';
import './index.css';
import { useEffect, useRef } from 'react';

const minSize = 8;
const maxSize = 15;
const maxDegree = 30;

const maxTransitionSpeed = 8;
const minTransitionSpeed = 3;

const minDelay = 30;
const maxDelay = 80;

const Fish = (props) => {

    const FishImage = useRef(null);
    const FishRotator = useRef(null);
    const FishElement = useRef(null);
    const IntervalRef = useRef(null);

    const position = useRef({

        prevX: null,
        prevY: null,
        facingRight: true

    });

    const spitBubbles = () => {



    }

    const updatePosition = () => {
    
        var randomDelay = Math.round(Math.random() * (maxDelay - minDelay) + minDelay) * 100;
        console.log("New Delay: " + randomDelay);
        var randomTransition = Math.round(Math.random() * (maxTransitionSpeed - minTransitionSpeed) + minTransitionSpeed);
        var randomX = Math.round(Math.random() * 76 + 12);
        var randomY = Math.round(Math.random() * 74 + 13);

        if (position.current.prevX !== null) {

            position.current.facingRight = randomX > position.current.prevX;
            
            const xDifference = randomX - position.current.prevX;
            const yDifference = position.current.prevY - randomY;
            var angle = (Math.floor(Math.atan2(yDifference, xDifference) * 180 / Math.PI) * -1) % maxDegree;
            FishRotator.current.style.transform = `
                rotateY(${position.current.facingRight ? 0 : 180}deg)
                rotateZ(${angle}deg)
            `;

        }

        FishElement.current.style.transition = `left ${randomTransition}s ease-in-out, top ${randomTransition}s ease-in-out`;
        FishElement.current.style.left = `${randomX}%`;
        FishElement.current.style.top = `${randomY}%`;

        position.current.prevX = randomX;
        position.current.prevY = randomY;

        if (IntervalRef.current) clearInterval(IntervalRef.current);
        IntervalRef.current = setInterval(updatePosition, randomDelay);

    }

    useEffect(() => {

        let randomSize = Math.round(Math.random() * (maxSize - minSize) + minSize);
        FishElement.current.style.width = `${randomSize}%`;

        updatePosition();
        const initialTimer = setTimeout(() => {updatePosition();}, 0);

        return () => {
            clearTimeout(initialTimer);
            if (IntervalRef.current) clearInterval(IntervalRef.current);
        }

    }, []); 

    return (

        <div className="fish" ref={FishElement}>
            <div className="fish-rotator" ref={FishRotator}>
                <img className="fish-img" alt="Fish" ref={FishImage} src={props.type === "tropical" ? TropicalFishSprite : FishSprite}/>
            </div>
        </div>

    )

}

export default Fish;