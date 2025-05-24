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

        <Message message="yoooo"/>
        <Message message="thanks 4 stopping by, feel free to look around"/>
        <FishTank></FishTank>

      </div>

    </ReactLenis>

  )
}

export default App