import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Note from './components/Note'
import App from './App'
import './index.css'; // Tell webpack that Button.js uses these styles

//=================================================================
//FUNCTIONAL PROGRAMMING                                           |
//=================================================================

const FilterExample = () => {
  var animals = [
    { name: "bert", species: "rabbit" },
    { name: "bert", species: "hond" },
    { name: "bert", species: "hond" },
  ]

  var dogs = animals.filter(function (animal) {
    return animal.species === "dog"
  })

  var isDog = function (animal) {
    return animal.species === "dog"
  }

  var dogs = animals.filter(isDog)
  var otherAnimals = animals.reject(isDog)

  //klassieke methode
  var dogs = []
  for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog')
      dogs.push(animals[i])
  }

  return (
    <div>Filter Example</div>
  )
}

const MapExample = () => {
  var animals = [
    { name: "bert", species: "rabbit" },
    { name: "bert", species: "hond" },
    { name: "bert", species: "hond" }
  ]

  //map() high order function
  var names1 = animals.map(function (animal) {
    return animal.name
  })

  //destructed version of map() using arrow function
  var names2 = animals.map((animal) => animal.name)

  //further destructing, using x instead of animal
  var names3 = animals.map((x) => x.name)

  // transformation on the array, using the map function
  var names4 = animals.map(function (animal) {
    return animal.name + " is a " + animal.species
  })

  //original method 
  var names5 = []
  for (var i = 0; i < animals.length; i++) {
    names5.push(animals[i].name)
  }
  console.log(names1);
  return (
    <div>
      <p>Hoi</p>
    </div>
  )
}

const ReduceExample = () => {
  var orders = [
    { amount: 250 },
    { amount: 450 },
    { amount: 150 },
    { amount: 50 }
  ]

  var totalAmount = orders.reduce(function (sum, order) {
    return sum + order.amount
  }, 0)

  return (
    <div>
      <p>Reduce Example</p>
    </div>
  )
}

//=================================================================
// Part 2a                                                         |
//=================================================================

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]


ReactDOM.render(<App notes={notes} />, document.getElementById('root'))
// ReactDOM.render(<MapExample />, document.getElementById('root'))
