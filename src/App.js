import FishTank from "./comp/FishTank";
import Message from "./comp/Message";
import Header from './comp/Header';
import { ReactLenis } from 'lenis/react' // Note: Correct import path
import { useEffect, useRef } from 'react'

function App() {
  const lenisRef = useRef()

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

      <div className="landing">

        <Message type="image"/>
        <Message type="sender" message="Hey, this is Jason" emoji="wave"/>
        <Message type="sender" message="I'm a Software Engineer located in the New York Metro area"/>

      </div>

    </ReactLenis>

  )
}

export default App