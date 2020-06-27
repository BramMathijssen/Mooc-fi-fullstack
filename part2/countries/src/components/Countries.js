import React from 'react';
import CountryDetails from './CountryDetails';

const Countries = ({ countries, filterInput }) => {

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
        return (
            <div>
                {filteredCountries.map(country =>
                    <CountryDetails key={country.alpha2Code} country={country} name={country.name} capital={country.capital} population={country.population} languages={country.languages.name} flag={country.flag} />
                )}
            </div>
        )
    }

    else {
        return (
            <div>{filteredCountries.map(country =>
                <p key={country.name}>{country.name}</p>
            )}
            </div>
        )
    }
    // return (


    //     <div>

    //         {/* {countries.filter(country =>
    //             country.name.toLowerCase().includes(filterInput.toLowerCase()))
    //             .map(country =>
    //                 <p key={country.name}>{country.name}</p>)
    //         } */}
    //     </div>
    // )
}

export default Countries