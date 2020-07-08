import React from 'react';

const CountryDetails = ({ country, weather }) => {

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

            <svg width="150" height="150">
                <image href={country.flag} height="150" width="150" />
            </svg>

            <h3>Weather in {country.capital}</h3>
            <p><b>Temperature: </b> {weather.current.temperature}</p>
            <svg width="50" height="50">
                <image href={weather.current.weather_icons[0]} height="50" width="50" />
            </svg>
            <p><b>wind: </b>{weather.current.wind_speed} kph, direction: {weather.current.wind_dir}</p>
        </div >
    )
}

export default CountryDetails