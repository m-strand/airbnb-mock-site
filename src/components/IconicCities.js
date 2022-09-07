import React, {useState, useEffect} from 'react';
import Listingcard from "./Listingcard.js";

function IconicCities () {
    const [citiesListings, setCitiesListings] = useState([]);

    useEffect(() => {
        fetch("https://airbnb-database.herokuapp.com/iconiccities", {
            headers: {
                'Accept': 'application/json'
           }
        })
        .then((response) => response.json())
        .then((data) => {setCitiesListings(data)});
    },[]);
    
    return (
        <div className="listing-component">
            {citiesListings.map((listing) => {
                return (
                    <Listingcard key={listing.id} image={listing.image} location={listing.location} rating={listing.rating} dates={listing.dates} price={listing.price} />
                );
            })};
        </div>
        
    );
}
export default IconicCities;