import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterInput, setFilterInput] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const personObject = {
      name: newName,
      number: newNumber
    }

    const existingPerson = persons.find(({ name }) => name === newName)

    if (existingPerson) {
      alert(newName + " has already been added to the phonebook")
    } else {
      setPersons(persons.concat(personObject))
      setNewName("")
      setNewNumber("")
    }
  }


  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilterInput(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>

        <Filter filterInput={filterInput} handleFilterChange={handleFilterChange} />

      </div>
      <h2>Add a new</h2>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <Persons persons={persons} filterInput={filterInput} />

      <div>debug: {newName}</div>
      ...
    </div>

  )
}

export default App
