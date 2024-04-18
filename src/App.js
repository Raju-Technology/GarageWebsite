import React, { Suspense, useEffect, useState, lazy } from "react";

//libraries
import { Routes, Route, useLocation } from "react-router-dom";
import retina from "retinajs";

//Context
import GlobalContext from "./Context/Context";

//Components
import ScrollToTopButton from "./Components/ScrollToTop"

//pages
const LandingPage = lazy(()=> import("./Pages/Home/LandingPage"));
const Robotics = lazy(()=> import("./Pages/Home/Robotics"))
const Robotics1 = lazy(()=> import("./Pages/Robotics/Robotics1"))
const Robotics2 = lazy(()=>import("./Pages/Robotics/Robotics2"))
const RoboticsAdvanced = lazy(()=> import("./Pages/Home/RoboticsAdvanced"))

const AI = lazy(()=> import("./Pages/Home/AI"))
const AiExploration = lazy(()=> import("./Pages/AI/AiExploration"))
const AIKids = lazy(()=> import("./Pages/Home/AIKids"))
const MachineLearning = lazy(()=> import("./Pages/AI/MachineLearning"))
const ApplicationUsingLLM = lazy(()=> import("./Pages/AI/ApplicationUsingLLM"))
const ComputerVision = lazy(()=> import("./Pages/AI/ComputerVision"))
const AIExplorationKids = lazy(()=> import("./Pages/AI/AIExplorationKids"))


function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customModal, setCustomModal] = useState({
    el: null,
    isOpen: false
  })
  const location = useLocation();
  const [age, setAge] = useState(localStorage.getItem('age') === 'true');
  const [askedAgeQuestion, setAskedAgeQuestion] = useState(localStorage.getItem('askedAgeQuestion') === 'true');

  // RetinaJS
  useEffect(() => {
    window.addEventListener('load', retina(document.querySelectorAll('img')));
  }, [])

  useEffect(() => {
    setTimeout(() => {
      import("./Functions/Utilities").then(module => {
        module.SetHeaderMenuPos()
        module.setDocumentFullHeight()
      })
    }, 1000);
  }, [location])

  useEffect(() => {
    if (isModalOpen === true) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  // Get the current location and set the window to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setFooterHeight(0);
    setCustomModal({
      ...customModal,
      el: null,
      isOpen: false
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
      <GlobalContext.Provider
       value={{
        headerHeight,
        setHeaderHeight,
        footerHeight,
        setFooterHeight,
        isModalOpen,
        setIsModalOpen,
        customModal,
        setCustomModal,
       }}
      >
        <div className="App" style={{ "--header-height": `${headerHeight}px` }}>
          {
            <main style={{ marginTop: headerHeight, marginBottom: footerHeight }}>
              <ScrollToTopButton />
              <Suspense fallback={<></>}>
                <Routes>
                  <Route exact path="/" element={<LandingPage age={age} setAge={setAge} askedAgeQuestion={askedAgeQuestion} setAskedAgeQuestion={setAskedAgeQuestion} />}/>
                  <Route path="/home/robotics" element={<Robotics style={{ "--base-color": "#ffeb04" }} age={age} setAge={setAge} askedAgeQuestion={askedAgeQuestion} setAskedAgeQuestion={setAskedAgeQuestion} />} />
                  <Route path="/robotics/kids" element={<Robotics1 style={{ "--base-color": "#0038e3" }}/>} />
                  <Route path="/robotics/real-world-projects" element={<Robotics2 style={{ "--base-color": "#0038e3" }}/>} />
                  <Route path="/home/robotics/Advanced" element={<RoboticsAdvanced style={{ "--base-color": "#ffeb04" }} age={age} setAge={setAge} askedAgeQuestion={askedAgeQuestion} setAskedAgeQuestion={setAskedAgeQuestion} />} />

                  <Route path="/home/AI/Advanced" element={<AI style={{ "--base-color": "#ffeb04" }} />} />
                  <Route path="/AI/Exploration" element={<AiExploration style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/home/AI/Kids" element={<AIKids style={{ "--base-color": "#ffeb04" }} />} />
                  <Route path="/AI/Kids/MachineLearning" element={<MachineLearning style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/AI/Kids/ApplicationUsingLLM" element={<ApplicationUsingLLM style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/AI/Kids/Computer-vision" element={<ComputerVision style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/AI/Kids/Exploration" element={<AIExplorationKids style={{ "--base-color": "#0038e3" }} />} />
                </Routes>
              </Suspense>      
            </main>
          }
        </div> 
      </GlobalContext.Provider>
  );
}

export default App;
