import FishSprite from '../../assets/fish.webp';
import TropicalFishSprite from '../../assets/tropical_fish.webp';
import './index.css';
import { useEffect, useRef, forwardRef } from 'react';

const minSize = 8;
const maxSize = 15;
const maxDegree = 30;

const maxTransitionSpeed = 8; // Goes off seconds
const minTransitionSpeed = 3; // Goes off seconds

const minDelay = 30; // Goes off 100 ms
const maxDelay = 80; // Goes off 100 ms

const minBubbleDelay = 1; // Goes off 1000 ms
const maxBubbleDelay = 15; // Goes off 1000 ms

const Fish = forwardRef((props, ref) => {

    // ref refers to the passed in fishtTankRef from FishTank component
    const FishImage = useRef(null);
    const FishRotator = useRef(null);
    const FishElement = useRef(null);
    const IntervalRef = useRef(null);
    const BubbleIntervalRef = useRef(null);
    const FishMouth = useRef(null);

    const position = useRef({

        prevX: null,
        prevY: null,
        facingRight: true

    });

    const blowBubbles = () => {

        var newRandomBubbleDelay = Math.round(Math.random() * (maxBubbleDelay - minBubbleDelay) + minBubbleDelay) * 1000;
        console.log(newRandomBubbleDelay);

        var fishMouthRect = FishMouth.current.getBoundingClientRect();
        var fishTank = ref.current;
        var fishTankRect = fishTank.getBoundingClientRect();

        const positionX = ((fishMouthRect.left - fishTankRect.left) / fishTankRect.width) * 100;
        const positionY = ((fishMouthRect.top - fishTankRect.top) / fishTankRect.height) * 100;    

        if (!document.hidden){
            props.onBlowBubble(positionX, positionY);
            props.onBlowBubble(positionX + Math.round(Math.random() * position.current.facingRight ? 1 : -1 *  3 + 0), positionY + 2);
            props.onBlowBubble(positionX + Math.round(Math.random() * position.current.facingRight ? 1 : -1 *  3 + 0), positionY + 4);
        }

        if (BubbleIntervalRef.current) clearInterval(BubbleIntervalRef.current);
        BubbleIntervalRef.current = setInterval(blowBubbles, newRandomBubbleDelay);

    }

    const lookAt = (x, y) => {

        position.current.facingRight = x > position.current.prevX;

        const xDifference = x - position.current.prevX;
        const yDifference = position.current.prevY - y;
        var angle = (Math.floor(Math.atan2(yDifference, xDifference) * 180 / Math.PI) * -1) % maxDegree;
        FishRotator.current.style.transform = `
            rotateY(${position.current.facingRight ? 0 : 180}deg)
            rotateZ(${angle}deg)
        `;

    }

    const updatePosition = () => {
    
        var randomDelay = Math.round(Math.random() * (maxDelay - minDelay) + minDelay) * 100;
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
        BubbleIntervalRef.current = setInterval(blowBubbles, Math.round(Math.random() * (maxBubbleDelay - minBubbleDelay) + minBubbleDelay) * 1000);

        return () => {
            clearTimeout(initialTimer);
            if (IntervalRef.current) clearInterval(IntervalRef.current);
            if (BubbleIntervalRef.current) clearInterval(BubbleIntervalRef.current);
            
        }

    }, []); 

    return (

        <div className="fish" ref={FishElement}>
            <div className="fish-rotator" ref={FishRotator}>
                <div ref={FishMouth} className="fish-mouth"></div>
                <img draggable="false" className="fish-img" alt="Fish" ref={FishImage} src={props.type === "tropical" ? TropicalFishSprite : FishSprite}/>
            </div>
        </div>

    )

});

export default Fish;