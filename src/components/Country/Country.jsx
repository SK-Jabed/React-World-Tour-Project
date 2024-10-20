import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    // const passWithParameters = () => handleVisitedCountry(country);

    return (
        <div className={`country ${visited ? "visited" : "non-visited"}`}>
            <img style={{width: "350px", height: "220px"}} src={flags.png} alt='' />
            <h2 style={{color: visited ? "Purple" : "white"}}>Name: {name?.common}</h2>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button> <br /><br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br /><br />
            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
            {visited ? "I have visited this country" : "I want to visit this country"}
        </div>
    );
};


export default Country;