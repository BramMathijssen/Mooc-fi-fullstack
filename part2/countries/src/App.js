import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Countries from './components/Countries'


function App() {
  const [countries, setCountries] = useState([])
  const [filterInput, setFilterInput] = useState('')

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
  }


  return (
    <div>
      Find countries <input value={filterInput} onChange={handleFilterChange} />
      <div>

        <Countries countries={countries} filterInput={filterInput} />
        {console.log(countries)}
      </div>
    </div>
  );
}

export default App;
