import Resume from './assets/JasonCordova_Resume.pdf';
import Message from "./comp/Message";
import Header from './comp/Header';
import ExperiencePanel from "./comp/ExperiencePanel";
import ProjectPanel from "./comp/ProjectPanel";
import { ReactLenis } from 'lenis/react' // Note: Correct import path
import { useEffect, useRef, useState } from 'react'
import confetti from "canvas-confetti";

const githubSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M769 1756v56l1 17v100l.96 13c.16 5.07-1.43 17.1-2.99 22-8.28 26.07-30.12 33.29-54.97 33-13.8-.17-29.05-6.73-42-11.58l-73-30.11c-110.59-50.78-204.1-116.27-292-200.35L282.96 1731a1031.981 1031.981 0 0 1-55.57-63c-110.03-135.43-181.05-293.54-211.97-465-4.78-26.51-8-53.23-10.59-80l-1.92-23-.91-10-1.04-17v-14L0 1047v-47l.96-12v-14l1-11c1.28-29.45 4.56-58.79 8.77-88 14.12-97.96 41.77-190.05 82.96-280 39.14-85.46 92.1-167.93 153.59-239l35.63-39L333 267.91C469.19 141.67 651.04 50.43 834 17.42c37.8-6.81 75.73-11.88 114-14.51l26-1.95h14l12-.96h48l12 .96h14l11 1c29.46 1.28 58.78 4.56 88 8.77 61.04 8.8 127.9 24.29 186 44.96 109.99 39.14 207.12 91.09 299 163.52 28.16 22.2 55.11 46.06 81 70.83l31 31.96c21.59 21.65 49.11 55.39 67.88 80 55.5 72.75 101.91 152.98 135.92 238 37.06 92.65 59.75 185.71 69.37 285l3.83 58 1 17v46l-.96 12v13l-1.04 12v9l-2.83 31c-3.49 34.89-8.16 69.61-15.17 104-44.69 219.26-155.93 411.85-322 561.83-89.42 80.76-194.3 144.13-306 188.77l-18 6.82-34 11.57c-4.18.9-5.78.99-10 1.01h-12c-13.02-.16-27.14-6.61-35.1-17-3.6-4.7-5.61-8.44-7.56-14-2.5-7.18-3.33-12.42-3.34-20v-76l1-15v-206l-.91-12c-2.03-28.98-7.22-57.71-17.51-85-7.35-19.47-17.2-37.58-30-54l-19.58-22 25-3.42 51-8.19c54.36-10.19 108.1-25.5 158-49.65 52.95-25.63 101.36-63.27 137.58-109.74 50.93-65.35 76.26-143.85 87.55-225l4.96-49 .91-10 1-21v-49l-.91-12c-1.8-26.19-5.46-52.63-12.51-78-10.9-39.18-26.71-77.03-49.25-111l-27.75-38c-2.91-3.55-12.22-13.35-12.97-17-.6-2.94 1.73-8.04 2.72-11l6.78-23c4.94-19.78 7.59-39.72 8.98-60l.91-12v-22l-1.04-12v-9c-2.7-27.03-7.77-53.92-15.38-80l-9.92-30c-1.14-3.25-3.28-10.08-6.05-12.02-3.21-2.24-20.08-3.03-24.61-2.98l-9 .83c-21.67 2.1-38.08 5.17-59 11.45-40.24 12.07-78.4 30.15-115 50.58l-51 30.83c-4.29 2.76-17.99 12.91-22 13.34-2.49.27-7.38-1.46-10-2.15l-19-4.75-61-12.88c-36-6.25-72.55-10.7-109-12.29l-11-1h-15l-12-.96h-37l-12 .96h-15l-10 .95-28 1.92c-32.85 3.18-65.57 6.92-98 13.37l-52 11.67c-4.48 1.12-19.54 5.81-23 4.99-2.6-.61-7.59-4.25-10-5.86l-17-11-51-30.14c-43.58-24.17-98.7-48.15-148-56.43l-31-3.25c-4.01-.28-19.8 1.05-22.78 3.4-2.81 2.23-4.15 7.1-5.41 10.42l-9.09 27c-12.64 41.96-18.23 83.25-17.72 127l.91 10c1.47 21.46 4.23 42.06 9.46 63l6.49 22c.97 2.8 3.49 8.2 2.91 11-.59 2.84-3.73 5.85-5.62 8l-11.73 14c-12.64 16.2-24.49 33.06-34.56 51-28.51 50.79-44.42 103.13-50.03 161L374 954v44l1 21 .91 10 6.67 62c12.01 77.41 36.27 147.89 83.79 211 12.93 17.17 29.7 35.43 45.63 49.83 28.06 25.38 60.17 46.12 94 62.92 48.16 23.92 104.23 39.75 157 49.64l52 8.34 24 3.27-18.99 21c-11.91 15.18-22.51 33.92-29.33 52-5.28 14.01-9.64 28.33-12.68 43-.83 4.05-2.63 18.27-4.59 20.59-1.67 1.95-6.91 3.96-9.41 4.96l-22 8.12c-17.26 5.75-50.06 13.12-68 13.33l-15 .96-17-.96c-7.2-.09-14.91-1.52-22-2.75-43.13-7.5-81.51-29.83-110.83-62.25-22.61-25-31.11-45.01-50.59-70-7.19-9.22-14.34-16.76-22.58-25-31.48-31.48-68.49-54.19-114-55.96-4.56-.18-5.9.4-10 .79-10.26.98-19.29.84-29 5.5-5.86 2.81-11.47 7.57-10.8 14.67.8 8.6 8.97 17.23 14.8 23 20.52 20.31 34.56 20.57 57 43 27.84 27.83 55.17 71.6 72.75 107l11.11 26c7.38 17.85 17.73 36.4 30.43 51 35.85 41.22 81.92 60.4 134.71 69.08l36 3.92 22 1h9l15-1c15.61-.02 31.52-1.7 47-3.72l47-7.28Z"/></svg>;
const linkedinSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><path d="M43 .15h146c29.51-.1 50.95 21.34 51 50.85v138c-.05 29.51-21.49 50.95-51 51H51c-29.51-.05-50.95-21.49-51-51V51C.04 24.06 16.75 5.29 43 .15Zm19 32.18c-22.72 5.64-16.38 38.83 7 34.33 11.64-2.24 16.68-16.92 10.52-26.57-4.11-6.43-10.24-8.51-17.52-7.76ZM80 80H50v110h30V80Zm50 0h-30v110h30v-55c.16-13.28 10-28.7 25-24.36 12 3.46 14.98 15.41 15 26.36v53h30v-54c0-11.69.85-23.99-3.88-35-8.9-20.73-35.44-26.79-54.12-15.52-5 3.02-8.52 6.92-12 11.52V80Z"/></svg>;
const cvSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46"><path d="M36.001 46h-26a10.012 10.012 0 0 1-10-10V10a10.013 10.013 0 0 1 10-10h26a10.011 10.011 0 0 1 10 10v26a10.01 10.01 0 0 1-10 10ZM15.776 14c-5.168 0-8.777 3.745-8.777 9.107v.562c0 5.447 3.517 9.107 8.75 9.107a7.486 7.486 0 0 0 7.908-7.374H19.83c-.13 2.58-1.7 4.184-4.106 4.184-2.958 0-4.795-2.267-4.795-5.917v-.562c0-3.665 1.837-5.942 4.795-5.942a3.961 3.961 0 0 1 2.842 1.064 4.777 4.777 0 0 1 1.29 2.939h3.826C23.373 16.813 20.271 14 15.777 14Zm6.964.332 6.25 18.111h4.156l6.276-18.112h-3.879l-4.386 13.953-4.414-13.953Z"/></svg>;


function App() {

  const lenisRef = useRef();
  const [lastConfettiTime, setLastConfettiTime] = useState(0); // Track last trigger time

  const [time] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  });

  const triggerConfetti = () => {
    const now = Date.now();
    const cooldownPeriod = 3000; // 3 seconds between triggers
    
    // If in cooldown, ignore the click
    if (now - lastConfettiTime < cooldownPeriod) {
      return;
    }

    setLastConfettiTime(now);

    // Bottom left confetti
    confetti({
      particleCount: 200,
      angle: 45,
      spread: 120,
      origin: { x: 0, y: 1 },
      colors: ['#EF3122', '#dddddd'],
      startVelocity: 45,
      decay: 0.94,
      gravity: 0.5,
      scalar: 1,
      shapes: ['circle', 'square'],
      ticks: 350,
      drift: 0.6
    });

    // Bottom right confetti
    confetti({
      particleCount: 200,
      angle: 135,
      spread: 120,
      origin: { x: 1, y: 1 },
      colors: ['#EF3122', '#dddddd'],
      startVelocity: 45,
      decay: 0.94,
      gravity: 0.5,
      scalar: 1,
      shapes: ['circle', 'square'],
      ticks: 350,
      drift: -0.6
    });

    // Reset cooldown after period ends

  };

  useEffect(() => {

    function update(time) {
      lenisRef.current?.lenis?.raf(time)
      requestAnimationFrame(update)
    }

    const rafId = requestAnimationFrame(update)
    return () => {cancelAnimationFrame(rafId)}

  }, [])

  return (

    <ReactLenis root ref={lenisRef} autoRaf={false}>

      <Header></Header>

      <div id="home" className="landing">

        <div className="chat">

          <Message type="sender" message="Hey, it's Jason" emoji="wave"/>
          <div className="message-read">
            Read <span>{time}</span>
          </div>

        </div>

        <div className="landing-content">

          <div className="landing-title-box">
            <div className="landing-socials">

              <a className="github" href="https://github.com/JasonCordova" target="_blank" rel="noreferrer">{githubSVG}</a>
              <a className="linkedin" href="https://www.linkedin.com/in/jason-cordova/" target="_blank" rel="noreferrer">{linkedinSVG}</a>
              <a className="resume" href={Resume} target="_blank" rel="noreferrer">{cvSVG}</a>

            </div>
            
          </div>

          <div className="short-desc">Backend Software Developer & QA from New Jersey. <span className="njit" onClick={() => {triggerConfetti();}}>Recent @NJIT graduate.</span></div>

        </div>

      </div>

      <ExperiencePanel></ExperiencePanel>
      <ProjectPanel></ProjectPanel>

    </ReactLenis>

  )
}

export default App