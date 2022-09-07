import React, {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";

function FilterType () {

    const [filters, setFilters] = useState ([]);
    useEffect(() => {
        fetch('https://airbnb-database.herokuapp.com/types', {
            
            headers: { 
                'Accept': 'application/json',
                'Access-Control-Allow-Origin' : 'https://airbnb-database.herokuapp.com'
                
           }
        })
        .then((response) => response.json())
        .then((data) => setFilters(data));

    },[]);

    return (
        <div className="filter-component">
            
            {filters.map((filter) => {
                return (
                <NavLink to={filter.pathway} className="filterIcon" key={filter.id}>
                    <img alt="listing" className="filterImg" src={filter.image} /> 
                    <p>{filter.name}</p>
                </NavLink>
                );
            })}
            
        </div>
    )   
}
export default FilterType;