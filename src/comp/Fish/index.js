import FishSprite from '../../assets/fish.webp';
import TropicalFishSprite from '../../assets/tropical_fish.webp';
import './index.css';
import { useEffect, useRef, forwardRef } from 'react';

const minSize = 8;
const maxSize = 15;
const maxDegree = 40;

const maxTransitionSpeed = 8; // Goes off seconds
const minTransitionSpeed = 3; // Goes off seconds

const minDelay = 30; // Goes off 100 ms
const maxDelay = 80; // Goes off 100 ms

const minBubbleDelay = 30; // Goes off 100 ms
const maxBubbleDelay = 150; // Goes off 100 ms

const Fish = forwardRef((props, ref) => {

    // ref refers to the passed in fishtTankRef from FishTank component
    const FishImage = useRef(null);
    const FishRotator = useRef(null);
    const FishElement = useRef(null);
    const IntervalRef = useRef(null);
    const BubbleIntervalRef = useRef(null);
    const FocusState = useRef(false);
    const FishMouth = useRef(null);

    const position = useRef({

        prevX: null,
        prevY: null,
        facingRight: true

    });

    const handleMouseEnter = (e) => {

        FocusState.current = true; stopMoving(); 
        var tankBounding = ref.current.getBoundingClientRect();
        var x = ((e.clientX - tankBounding.left) / tankBounding.width) * 100;
        var y = ((e.clientY - tankBounding.top) / tankBounding.height) * 100;
        lookAt(x, y);

    }
    const handleMouseLeave = () => {
        FocusState.current = false;
        if (!IntervalRef.current) { // Only restart if no interval exists
            updatePosition();
        }
    }

    const handleMouseMove = (e) => {

        var tankBounding = ref.current.getBoundingClientRect();

        var x = ((e.clientX - tankBounding.left) / tankBounding.width) * 100;
        var y = ((e.clientY - tankBounding.top) / tankBounding.height) * 100;
        lookAt(x, y);

    }

    const stopMoving = () => {

        if (IntervalRef.current){
            clearInterval(IntervalRef.current);
            IntervalRef.current = null;
        }

        var fishBounding = FishElement.current.getBoundingClientRect();
        var tankBounding = ref.current.getBoundingClientRect();

        var currentX = (((fishBounding.left + fishBounding.width/2) - tankBounding.left) / tankBounding.width) * 100;
        var currentY = (((fishBounding.top + fishBounding.height/2) - tankBounding.top) / tankBounding.height) * 100;

        position.current.prevX = currentX;
        position.current.prevY = currentY;

        FishElement.current.style.top = `${currentY}%`;
        FishElement.current.style.left = `${currentX}%`;

    }

    const blowBubbles = () => {

        var newRandomBubbleDelay = Math.round(Math.random() * (maxBubbleDelay - minBubbleDelay) + minBubbleDelay) * 100;
        var fishMouthRect = FishMouth.current.getBoundingClientRect();
        var fishTank = ref.current;
        var fishTankRect = fishTank.getBoundingClientRect();

        const positionX = ((fishMouthRect.left - fishTankRect.left) / fishTankRect.width) * 100;
        const positionY = ((fishMouthRect.top - fishTankRect.top) / fishTankRect.height) * 100;    

        if (!document.hidden){
            props.onBlowBubble(positionX, positionY);
            props.onBlowBubble(positionX + (Math.random() * position.current.facingRight ? 1 : -1 *  1 + 0), positionY + 2);
            props.onBlowBubble(positionX + (Math.random() * position.current.facingRight ? 1 : -1 *  1 + 0), positionY + 4);
        }

        if (BubbleIntervalRef.current) clearInterval(BubbleIntervalRef.current);
        BubbleIntervalRef.current = setInterval(blowBubbles, newRandomBubbleDelay);

    }

    const lookAt = (x, y) => {

        position.current.facingRight = x > position.current.prevX;

        const xDifference = x - position.current.prevX;
        const yDifference = position.current.prevY - y;
        var angle = (Math.floor(Math.atan2(yDifference, xDifference) * 180 / Math.PI) * -1);

        if (angle > 90) angle -= 180;
        else if (angle < -90) angle += 180;
        
        angle = Math.min(Math.max(angle, -maxDegree), maxDegree);
        if (!position.current.facingRight) angle *= -1;

        FishRotator.current.style.transform = `
            rotateY(${position.current.facingRight ? 0 : 180}deg)
            rotateZ(${angle}deg)
        `;

    }

    const updatePosition = () => {

        if (IntervalRef.current) {
            clearInterval(IntervalRef.current);
            IntervalRef.current = null;
        }
    
        var randomDelay = Math.round(Math.random() * (maxDelay - minDelay) + minDelay) * 100;
        var randomTransition = Math.round(Math.random() * (maxTransitionSpeed - minTransitionSpeed) + minTransitionSpeed);
        var randomX = Math.round(Math.random() * 76 + 12);
        var randomY = Math.round(Math.random() * 74 + 13);

        if (position.current.prevX !== null) {

            position.current.facingRight = randomX > position.current.prevX;
            
            const xDifference = randomX - position.current.prevX;
            const yDifference = position.current.prevY - randomY;
            var angle = (Math.floor(Math.atan2(yDifference, xDifference) * 180 / Math.PI) * -1);

            if (angle > 90) angle -= 180;
            else if (angle < -90) angle += 180;
            
            angle = Math.min(Math.max(angle, -maxDegree), maxDegree);
            if (!position.current.facingRight) angle *= -1;

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

        if (!FocusState.current) {
            IntervalRef.current = setInterval(updatePosition, randomDelay);
        }

    }

    useEffect(() => {

        let randomSize = Math.round(Math.random() * (maxSize - minSize) + minSize);
        FishElement.current.style.width = `${randomSize}%`;

        updatePosition();
        const initialTimer = setTimeout(() => {updatePosition();}, 10);
        BubbleIntervalRef.current = setInterval(blowBubbles, Math.round(Math.random() * (maxBubbleDelay - minBubbleDelay) + minBubbleDelay) * 100);

        ref.current.addEventListener("mouseenter", handleMouseEnter);
        ref.current.addEventListener("mousemove", handleMouseMove);
        ref.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            clearTimeout(initialTimer);
            if (IntervalRef.current) clearInterval(IntervalRef.current);
            if (BubbleIntervalRef.current) clearInterval(BubbleIntervalRef.current);
            ref.current.removeEventListener("mouseenter", handleMouseEnter);
            ref.current.removeEventListener("mousemove", handleMouseMove);
            ref.current.removeEventListener("mouseleave", handleMouseLeave);
            
        }

    }, []); 

    return (

        <div className="fish" ref={FishElement} onClick={() => {blowBubbles();}}>
            <div className="fish-rotator" ref={FishRotator}>
                <div ref={FishMouth} className="fish-mouth"></div>
                <img draggable="false" className="fish-img" alt="Fish" ref={FishImage} src={props.type === "tropical" ? TropicalFishSprite : FishSprite}/>
            </div>
        </div>

    )

});

export default Fish;