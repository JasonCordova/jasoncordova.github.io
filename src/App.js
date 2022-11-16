import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  const location = useLocation();

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes location={location} key={location.pathname}>

          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/about" element={<About/>}/>


      </Routes>
    </AnimatePresence>
  );
}

export default App;
