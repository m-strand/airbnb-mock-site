import React, {useState, useEffect} from 'react';
import Listingcard from "./Listingcard.js";

function Treehouses () {
    const [treehouseListings, setTreehouseListings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/")
        .then((response) => response.json())
        .then((data) => {setTreehouseListings(data.treehouses)});
    },[]);
    
    return (
        <div className="listing-component">
            {treehouseListings.map((listing) => {
                return (
                    <Listingcard key={listing.id} image={listing.image} location={listing.location} rating={listing.rating} dates={listing.dates} price={listing.price} />
                )
            })};
        </div>
        
    );
}
export default Treehouses;