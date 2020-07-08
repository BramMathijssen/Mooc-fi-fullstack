import React from 'react';
import CountryDetails from './CountryDetails';

const Countries = ({ countries, weather, filterInput, showSpecific, handleCountryChange}) => {

    var filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(filterInput.toLowerCase()))

    if (filterInput === '') {
        return (
            <div>
                Please enter a country
            </div>
        )
    } else if (filteredCountries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else if (filteredCountries.length === 1) {

        //set the capital city for the weather API
        handleCountryChange(filteredCountries[0].capital)

        return (
            <div>
                {filteredCountries.map(country =>
                    <CountryDetails key={country.alpha2Code} country={country} weather={weather} />
                )}
            </div>
        )
    } else {
        return (
            <div>{filteredCountries.map(country =>
                <p key={country.name}>{country.name}
                <button value={country.name} onClick={showSpecific}>show</button>
                    {/* <Button onClick={() => displayCountries()} text={"show"} /> */}
                </p>
            )}
            </div>
        )
    }
}

export default Countries