import FishTank from "./comp/FishTank";
import Message from "./comp/Message";
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

      <div className="landing">

        <Message message="Nice to meet you, I'm Jason!"/>
        <FishTank></FishTank>

      </div>

    </ReactLenis>

  )
}

export default App