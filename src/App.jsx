import './App.css';
import {Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProjectsPage from './components/Projects/ProjectsPage';
import HomePage from './components/HomePage/HomePage';
import AboutMePage from './components/AboutMe/AboutMePage';
import AchievementsPage from './components/Achievements/AchievementsPage';
import ExperiencePage from './components/Experience/ExperiencePage';
import useMediaQuery from './hooks/useMediaQuery';
import TetrisBackground from './components/Misc/TetrisBackground';

const App = () => {

  const isBigEnough = useMediaQuery('(min-height: 500px)');
  const location = useLocation();

  return (

      <div >
      {!isBigEnough && <div className="background" style={{ backgroundColor: "#355070" }}>
      
      <div style={{display:"flex", flexDirection:"row"}} >
      {[1,2,3,4,5].map((i) => {
          return <img src="miscImages/gifycat.gif" style={{width: "325px", height:"100%",
          transform: i%2===0 ? "rotate(180deg)":"rotate(0deg)"}} key={i}/>
      })} </div>

      <span style=
        {{ position: "absolute", color:"#FFFFFF",
        bottom: 0,
        backgroundColor:"black", fontFamily:"papyrus",
        fontSize:"30px",
        paddingTop:"10px"}}>Please Increase Your Browser Size
      </span>

      
      </div>}


      {isBigEnough &&
      <>
      <TetrisBackground/>
      <AnimatePresence mode="sync">
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          
          <Route path="/projects" element={<ProjectsPage/>} />

          <Route path="/achievements" element={<AchievementsPage/>} />

          <Route path="/experience" element={<ExperiencePage/>} />

        </Routes>
      </AnimatePresence>
      </>}
    </div>
  );
};

export default App;