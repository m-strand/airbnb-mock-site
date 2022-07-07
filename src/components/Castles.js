import React, {useState, useEffect} from 'react';
import Listingcard from "./Listingcard.js";

function Castle () {
    const [castleListings, setCastleListings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/")
        .then((response) => response.json())
        .then((data) => {setCastleListings(data.castles)});
    },[]);
    
    return (
        <div className="listing-component">
        {castleListings.map((listing) => {
            return (
                <Listingcard key={listing.id} image={listing.image} location={listing.location} rating={listing.rating} dates={listing.dates} price={listing.price} />
            );
        })};
        
        </div>
    );
}
export default Castle;