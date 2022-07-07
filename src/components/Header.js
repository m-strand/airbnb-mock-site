import React, {useState} from 'react';
import HeaderDrop from "./HeaderDrop.js";


function Header () {
    const [menuUp, setMenuUp] = useState("false");
    function handleMenuToggle () {
        setMenuUp(!menuUp);
    }

    return (
        <div className="header-component">
            <img alt="logo" className="logo" src="data:image/png;base64,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" />
            <div className="searchbar headerHover">
                <button className="btn filterbtn">Anywhere</button>
                <button className="btn filterbtn">Any Week</button>
                <button className="btn guests">Add Guests</button>
                <button className="material-icons searchbtn">search</button>

            </div>
            <div className="user-info">
                <p className= "btn hostbtn headerHover2 header-right">Become a Host</p>
                <button className="material-icons langbtn headerHover2 header-right">language</button>
                <button onClick={handleMenuToggle} className="btn usermenu headerHover header-right">
                    <i className="material-icons user-icons">menu</i>
                    <i className="material-icons user-icons">person</i>
                </button> 
                {menuUp ? null : <HeaderDrop/>}
            </div>
        </div>
    );
}

export default Header;