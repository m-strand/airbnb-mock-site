import React from 'react';

function Listingcard ({image, location, distance, rating, dates, price}) {
    return (
        <div className="listingCard">
                <img alt="listing" className="listingImg" src={image}/>
            <div className="first-line">
                <span className="listingInfo location">{location}</span>
                <span className="listingInfo rating">{rating}&#9733;</span>
            </div>
                <p className="listingInfo light">{dates}</p>
                <p className="listingInfo">${price}</p>
        </div>
    )
}

export default Listingcard;