import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Countries from './components/Countries'
import TextField from './components/TextField'

// WeaterStack API Key: b9300cbf227486f798f3870016b9bcd0
function App() {
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState('')
  const [filterInput, setFilterInput] = useState('')
  const [country, setCountry] = useState('')
  const [capital, setCapital] = useState('Amsterdam')


  const API_KEY = process.env.REACT_APP_API_KEY

  //API call for the countries
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise countries fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'notes')

  //API call for the weather forecasts
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://api.weatherstack.com/current?access_key=' + API_KEY + '&query=' + capital)
      .then(response => {
        console.log('promise weather fulfilled')
        setWeather(response.data)
      })
  }, [API_KEY, capital])

  console.log('render weather: ', weather.length, 'weather')

  // gives temperature undefined error, changed to handleCountryChange
  // const countryCapital = () => {
  //   var filteredCountries = countries.filter(country =>
  //     country.name.toLowerCase().includes(filterInput.toLowerCase()))

  //     if(filteredCountries.length === 1){
  //       const cityCapital = filteredCountries.map(country => country.capital)

  //       return cityCapital[0]
  //     }  
  // }

  const handleFilterChange = (event) => {
    setFilterInput(event.target.value)
    setCountry(event.target.value)
    // setCapital(countryCapital());
  }

  const handleCountryChange = (capital) => setCapital(capital)

  const showSpecific = (event) => {
    event.preventDefault()
    setCountry(event.target.value)
    setFilterInput(event.target.value)
  }

  console.log(weather);
  // console.log("method country capital", countryCapital());
  console.log("state capital", capital);
  console.log('http://api.weatherstack.com/current?access_key=' + API_KEY + '&query=' + capital);

  return (
    <div>

      <TextField text={"Find Countries: "} value={country} onChange={handleFilterChange} />
      {/* Find countries <input value={filterInput} onChange={handleFilterChange} /> */}
      <div>

        <Countries countries={countries} weather={weather} filterInput={filterInput} showSpecific={showSpecific} handleCountryChange={handleCountryChange} />
        {console.log(countries)}
      </div>
    </div>
  );
}

export default App;
