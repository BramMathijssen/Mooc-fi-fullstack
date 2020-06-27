import React from 'react';

const CountryDetails = ({ country }) => {

    const languages = country.languages.map((language =>
        <li key={language.iso639_1}>{language.name}</li>))

    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>

            <h3>languages</h3>
            <ul>
                {languages}
            </ul>

            <svg width="200" height="200">
                <image href={country.flag} height="200" width="200" />
            </svg>
        </div >
    )
}

export default CountryDetails