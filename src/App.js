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




function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customModal, setCustomModal] = useState({
    el: null,
    isOpen: false
  })
  const location = useLocation();

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
                  <Route exact path="/" element={<LandingPage />}/>
                  <Route path="/home/robotics" element={<Robotics style={{ "--base-color": "#ffeb04" }} />} />
                </Routes>
              </Suspense>      
            </main>
          }
        </div> 
      </GlobalContext.Provider>
  );
}

export default App;
