import React, {useState, useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header.js";
import FilterType from "./components/FilterType.js";
import Artic from "./components/Artic.js";
import Castles from "./components/Castles.js";
import IconicCities from "./components/IconicCities.js";
import Treehouses from "./components/Treehouses.js";
import Windmills from "./components/Windmills.js";
import Footer from "./components/Footer.js";
import FooterDrop from "./components/FooterDrop.js";
import SDHeader from "./components/SDHeader.js";
import SDFooter from "./components/SDFooter.js";

function App () {
    const [menuUp, setmenuUp] = useState("false");
    const [isDesktop, setDesktop] = useState(window.innerWidth < 850);
    function handleArrowClick () {
        setmenuUp(!menuUp);
    }
    function updateWindowSize () {
      setDesktop(window.innerWidth < 850);
    }
    
    useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  });

    return (
        <>
        {isDesktop ? <SDHeader/> : <Header />}
        
        <FilterType />

        <Routes>
            <Route path="/artic" component={<Artic />}/>
                
            <Route path="/castles" component={<Castles/>}/>

            <Route path="/iconiccities" component={<IconicCities/>}/>

            <Route path="/treehouses" component={<Treehouses/>}/>

            <Route path="/windmills" component={<Windmills/>}/>
        </Routes>

       {isDesktop ? 
       <SDFooter/> :
       menuUp ? 
       <Footer handleArrow={handleArrowClick}/> : 
       <FooterDrop handleArrow2={handleArrowClick} /> } 
        
        </>

    );
};
export default App;
