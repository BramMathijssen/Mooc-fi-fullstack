import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Countries from './components/Countries'
import TextField from './components/TextField'


function App() {
  const [countries, setCountries] = useState([])
  const [filterInput, setFilterInput] = useState('')
  const [country, setCountry] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'notes')

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilterInput(event.target.value)
    setCountry(event.target.value)
  }

  const showSpecific = (event) => {
    event.preventDefault()
    setCountry(event.target.value)
    setFilterInput(event.target.value)
    
    console.log("button clicked", event);
    console.log("Country is", country);
    

}


  return (
    <div>
      <TextField text={"Find Countries: "} value={country} onChange={handleFilterChange} />
      {/* Find countries <input value={filterInput} onChange={handleFilterChange} /> */}
      <div>

        <Countries country={country} countries={countries} filterInput={filterInput} showSpecific={showSpecific} />
        {console.log(countries)}
      </div>
    </div>
  );
}

export default App;
