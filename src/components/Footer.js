import React from 'react';


function Footer ({handleArrow, menuUp}) {
    
    return (
        <div className="footer">
            <div>
            <p className="left-container">&copy; 2022 Airbnb, Inc</p>
            <span className="left-container">·</span>
            <p className="left-container hoverItem">Privacy</p>
            <span className="left-container">·</span>
            <p className="left-container hoverItem">Terms</p>
            <p className="left-container hoverItem">Sitemap</p>
            <span className="left-container">·</span>
            <p className="left-container hoverItem">Destinations</p>
        </div>
        <div className="right-container">
            <span className="container-element foot-lang material-icons">language</span>
            <p className="container-element hoverItem">English (US)</p>
            <p className="container-element hoverItem"><span>$</span> USD</p>
            <p className="container-element hoverItem">Support & Resources</p>
            <span onClick={handleArrow} className="material-icons more-info">keyboard_arrow_up</span>
        </div>
        </div>   
        );
}
export default Footer;