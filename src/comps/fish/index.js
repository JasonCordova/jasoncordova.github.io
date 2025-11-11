import FishSprite from '../../assets/fish.webp';
import TropicalFishSprite from '../../assets/tropical_fish.webp';
import './index.css';
import { useEffect, useRef, forwardRef } from 'react';
import Image from 'next/image';

const minSize = 12;
const maxSize = 20;
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

    const handleMouseLeave = () => {
        FocusState.current = false;
        if (!IntervalRef.current) { // Only restart if no interval exists
            updatePosition();
        }
    }

    const handleMouseMove = (e) => {

        console.log(e);
        FocusState.current = true; stopMoving(); 
        var tankBounding = ref.current.getBoundingClientRect();

        // Get the touches position for touch events
        if (e.type == "touchmove" && e.touches && e.touches.length > 0) {
            var x = ((e.touches[0].clientX - tankBounding.left) / tankBounding.width) * 100;
            var y = ((e.touches[0].clientY - tankBounding.top) / tankBounding.height) * 100;
        } else if (e.type == "mousedown"){
            var x = ((e.clientX - tankBounding.left) / tankBounding.width) * 100;
            var y = ((e.clientY - tankBounding.top) / tankBounding.height) * 100;
        }
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

        const tankRef = ref.current;

        let randomSize = Math.round(Math.random() * (maxSize - minSize) + minSize);
        // let randomSize = minSize;
        FishElement.current.style.height = `${randomSize}%`;

        const startX = Math.random() * 76 + 12;
        const startY = Math.random() * 74 + 13;
        FishElement.current.style.left = `${startX}%`;
        FishElement.current.style.top = `${startY}%`;

        updatePosition();
        const initialTimer = setTimeout(() => {updatePosition();}, 10);
        BubbleIntervalRef.current = setInterval(blowBubbles, Math.round(Math.random() * (maxBubbleDelay - minBubbleDelay) + minBubbleDelay) * 100);

        tankRef.addEventListener("mousedown", handleMouseMove);
        tankRef.addEventListener("mousemove", handleMouseMove);
        tankRef.addEventListener("mouseleave", handleMouseLeave);
        tankRef.addEventListener("touchend", handleMouseLeave);
        tankRef.addEventListener("touchmove", handleMouseMove);

        return () => {
            clearTimeout(initialTimer);
            if (IntervalRef.current) clearInterval(IntervalRef.current);
            if (BubbleIntervalRef.current) clearInterval(BubbleIntervalRef.current);
            tankRef.removeEventListener("mousedown", handleMouseMove);
            tankRef.removeEventListener("mousemove", handleMouseMove);
            tankRef.removeEventListener("mouseleave", handleMouseLeave);
            tankRef.removeEventListener("touchend", handleMouseLeave);
            tankRef.removeEventListener("touchmove", handleMouseMove);
            
        }

    }, []); 

    return (

        <div className="fish" ref={FishElement} onClick={() => {blowBubbles();}}>
            <div className="fish-rotator" ref={FishRotator}>
                <div ref={FishMouth} className="fish-mouth"></div>
                <Image width={1} style={{width: 'auto'}} alt="Fish" draggable={false} className="fish-img" src={props.type === "tropical" ? TropicalFishSprite : FishSprite}/>
            </div>
        </div>

    )

});

Fish.displayName = "Fish";
export default Fish;