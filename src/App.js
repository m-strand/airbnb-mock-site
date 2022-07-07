import React, {useState} from 'react';
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

function App () {
    const [menuUp, setmenuUp] = useState("false");
    function handleArrowClick () {
        setmenuUp(!menuUp);
    }

    return (
        <>
        <Header />
        
        <FilterType />

        <Routes>
            <Route path="/artic" element={<Artic />}/>
                
            <Route path="/castles" element={<Castles/>}/>

            <Route path="/iconiccities" element={<IconicCities/>}/>

            <Route path="/treehouses" element={<Treehouses/>}/>

            <Route path="/windmills" element={<Windmills/>}/>
        </Routes>

       {menuUp? <Footer handleArrow={handleArrowClick}/> : <FooterDrop handleArrow2={handleArrowClick} /> }
        
        </>

    );
};
export default App;
