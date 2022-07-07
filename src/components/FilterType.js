import React, {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";

function FilterType () {

    const [filters, setFilters] = useState ([]);
    useEffect(() => {
        fetch("http://localhost:3000/")
        .then((response) => response.json())
        .then((data) => setFilters(data.types));

    },[]);

    return (
        <div className="filter-component">
            
            {filters.map((filter) => {
                return (
                <NavLink className="filterIcon" to={filter.pathway} key={filter.id}>
                    <img alt="listing" className="filterImg" src={filter.image} /> 
                    <p>{filter.name}</p>
                </NavLink>
                );
            })}
            
        </div>
    )   
}
export default FilterType;