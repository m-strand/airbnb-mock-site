import React from 'react';

function Listingcard ({image, location, rating, dates, price}) {
    return (
        <div className="listingCard">
                <img alt="listing" className="listingImg" src={image}/>
            <div className="listingInfo">
                <div className="first-line">
                    <span className="info location">{location}</span>
                    <span className="rating">{rating}&#9733;</span>
                </div>
                <p className="info light">{dates}</p>
                <p className="info price">${price}</p>
                </div>
        </div>
    )
}

export default Listingcard;