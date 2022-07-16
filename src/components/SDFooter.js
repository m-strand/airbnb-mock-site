import React from 'react';

function SDFooter () {
    return (
        <div className="small-device-footer">
            <div className="footerBtn-sd">
                <i className="footerIcon-sd material-icons">search</i>    
                <p>Explore</p>
            </div>
  
            <div className="footerBtn-sd">
                <i className="footerIcon-sd material-icons">favorite_outline</i>
                <p>Wishlists</p>
            </div>
  
            <div className="footerBtn-sd">
            <i className="airbnb footerIcon-sd fa-brands fa-airbnb"></i>
                <p>Trips</p>
            </div>
  
            <div className="footerBtn-sd">
                <i className="footerIcon-sd material-icons">chat_bubble_outline</i>
                <p>Inbox</p>
            </div>
  
            <div className="footerBtn-sd">
                <i className="footerIcon-sd material-icons">person_outline</i>
                <p>Profile</p>
            </div>
        </div>
    )
};
export default SDFooter;