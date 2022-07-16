import React from 'react';

function SDHeader () {
    return (
        <div className="small-device-header">
            <div className="searchbar-sd">
                <button className="search-sd material-icons">search</button>
                <div className="search-text-sd">
                    <p className="where-to">Where to?</p>
                    <div className="AAA">
                        <p className="link-sd">Anywhere</p>
                        <span className="link-sd">·</span>
                        <p className="link-sd">Any Week</p>
                        <span className="link-sd">·</span>
                        <p className="link-sd">Add Guests</p>
                    </div>
                </div>
                <button className="filter-sd material-icons">tune</button>
            </div>
        </div>
    )
};
export default SDHeader;