import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log("Add This To Your Visited Country");
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    
    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                countries.map(country => <Country 
                    key={country.cca3} 
                    country={country}
                    handleVisitedCountry={handleVisitedCountry}></Country>)
            }
            </div>           
        </div>
    );
};

export default Countries;