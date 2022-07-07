import React, {useState, useEffect} from 'react';
import Listingcard from "./Listingcard.js";

function Artic () {
    const [articListings, setArticListings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/")
        .then((response) => response.json())
        .then((data) => {setArticListings(data.artic)});
    },[]);
    
    return (
        <div className="listing-component">
            
            {articListings.map((listing) => {
                return (
            <Listingcard key={listing.id} image={listing.image} location={listing.location} rating={listing.rating} dates={listing.dates} price={listing.price} />
                );
            })}
           
        </div>

    );
}
export default Artic;