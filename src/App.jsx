import './App.css';
import {Route, Routes, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectsPage from './components/HomePage/ProjectsPage';
import Tester from './components/Tester';
import HomePage from './components/HomePage/HomePage';
import AboutMePage from './components/AboutMe/AboutMePage';


const App = () => {

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1.5 },
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' },
    }
  };

  const location = useLocation();

  return (
  <AnimatePresence mode="sync">
    <Routes location={location} key={location.key}>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMePage />} />
      
      <Route path="/projects" element={<ProjectsPage/>} />

      <Route path="/achievements" element={<Tester/>} />

      <Route path="/work-experience" element={<Link to={"/"}><motion.h1 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">Work Experience</motion.h1></Link>} />

    </Routes>
  </AnimatePresence>
  );
};

export default App;