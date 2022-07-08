import React, {useState, useEffect} from 'react';
import Listingcard from "./Listingcard.js";

function Windmills () {
    const [windmillListings, setWindmillListings] = useState([]);
 
    useEffect(() => {
        fetch("http://localhost:3000/windmills", {
            headers: { 
                'Accept': 'application/json'
           }
        })
        .then((response) => response.json())
        .then((data) => {setWindmillListings(data)});
    },[]);
    
    return (
        <div className="listing-component">
            {windmillListings.map((listing) => {
                return (
                    <Listingcard key={listing.id} image={listing.image} location={listing.location} rating={listing.rating} dates={listing.dates} price={listing.price} />
                )
            })};
        </div>
        
    );
}
export default Windmills;