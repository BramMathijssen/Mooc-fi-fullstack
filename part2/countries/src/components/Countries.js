import React from 'react';
import CountryDetails from './CountryDetails';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>{props.text}</button>
        </div>
    )
}

const SingleCountry = ({ country }) => {
    return (
        <div>
            <CountryDetails key={country.alpha2Code} country={country} />
        </div>
    )
}

const Countries = ({ countries, filterInput, showSpecific, country }) => {

    var filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(filterInput.toLowerCase()))

    const displayCountries = () => {

        console.log("display countries called");
        filteredCountries.map(country =>
            <CountryDetails key={country.alpha2Code} country={country} />
        )
    }

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
                    <CountryDetails key={country.alpha2Code} country={country} />
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