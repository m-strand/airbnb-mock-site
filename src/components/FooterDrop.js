import React from 'react';

function FooterDrop ({handleArrow2, menuUp}) {
    return (

    <div className="additional-footer-info"> 
        <button className="exit material-icons" onClick={handleArrow2}>&#xe14c;</button>
        <div className="additional-footer-section">
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Supporting people with disabilities</p>
            <p>Report a neighborhood concern</p>
            <p>AirCover</p>
            <p>Cancellation options</p>
            <p>Safety information</p>
            <p>Our COVID-19 Response</p>
        </div>
  
        <div className="additional-footer-section">
            <h4>Community</h4>
            <p>Airbnb.org: disaster relief housing</p>
            <p>Support Afgan refugees</p>
            <p>Combating discrimination</p>
        </div>
  
        <div className="additional-footer-section">
            <h4>Hosting</h4>
            <p>Try hosting</p>
            <p>Visit our community forum</p>
            <p>AirCover for Hosts</p>
            <p>How to host responsibly</p>
            <p>Explore hosting resources</p>
        </div>
  
        <div className="additional-footer-section">
                <h4>About</h4>
                <p>Newsroom</p>
                <p>Careers</p>
                <p>Learn about new features</p>
                <p>Investors</p>
                <p>Letter from our founders</p>
        </div>
</div>

    )
}

export default FooterDrop;