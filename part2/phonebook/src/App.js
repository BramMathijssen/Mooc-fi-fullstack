import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }

  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterInput, setFilterInput] = useState('')

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

  // const isFiltered = function(person) {
  //   return person.
  // }


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
