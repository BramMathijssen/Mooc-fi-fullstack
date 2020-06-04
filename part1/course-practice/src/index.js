import React, { useState } from 'react'
import ReactDOM from 'react-dom'


//=================================================================
//PART 1A                                                          |
//=================================================================
const name = "bert";

const App = () => {
    return (
        <div>
            <p>Hello World</p>
            {/* The app can be structured from different components to enforce
            seperation of concerns */}
            {/* <Navigation />
            <Adminbar /> */}
        </div>
    )
}

//Dit component wordt opgeroepen in de AppTwo function
const Hello = (props) => (
    <div>
        <p>Hello {props.name} from the Hello Component, you are {props.age} years old </p>
    </div>
)

const AppTwo = () => {

    console.log('Hello from component')
    const now = new Date();
    const a = 10;
    const b = 20;
    //const binnen een functie override de globale variable 
    const name = "BartelJoris"
    const age = 10

    return (
        <div id="container">
            {/* Een naam wordt meegegeven door het props attribuut in de Hello Function */}
            <Hello name="Bert" />
            <Hello name="Henk" />
            <Hello name="Bertaap" />
            {/* Dynamisch vullen van het Hello component */}
            <Hello name={name} age={age} />
            <p>Hello {name} with a console log element </p>
            <p>The current time is {now.toString()}</p>
            <br />
            <p>
                {/* {Alle text binnen curly brackets wordt als js code geintepeteerd.} */}
                {a} plus {b} is {a + b}
            </p>
            <Footer name={name} />
        </div>
    )
}

const Footer = (props) => {
    return (
        <div>
            this practice app has been created by {props.name}
        </div>
    )
}

const Test = () => (
    //Gebruik van React.Fragment zorgt ervoor dat het niet in een div omhuld wordt
    <React.Fragment>
        <p>DIT IS EEN TEST</p>
    </React.Fragment>
)

let Testlet = () => (
    <React.Fragment>
        <p>Dit is een let function</p>
    </React.Fragment>
)

//=================================================================
//PART 1B                                                          |
//=================================================================

//-----------------------
//ARRAYS
const t = [1, -1, 3]

t.push(5)

//maakt een nieuwe arraylist aan en voegt hier het nummer 12 toe aan de oude lijst
const t2 = t.concat(12)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
    console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})

t2.forEach(value => {
    console.log(value)  // numbers 1, -1, 3, 5, 12 are printed, each to own line
})

//-----------------------
//MAPS

const a = [1, 2, 3]

//multiplies te value of a by 2 and stores it in a map
const m1 = a.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed

const m2 = a.map(value => '<li>' + value + '</li>')
console.log(m2)  // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed


const b = [1, 2, 3, 4, 5, 7]

const [first, second, ...rest] = b

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4 ,5] is printed

//-----------------------
//OBJECTS

//An object literal is a list of zero or more pairs of property names and associated values
//of an object, enclosed in curly braces ({}).

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log(object1.name)
const fieldName = 'age'
console.log(object1[fieldName])

object1.address = 'Breda'
object1['secret numer'] = 12341

//-----------------------
//FUNCTIONS

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 2)
console.log("Het result is " + result)

//als er maar 1 parameter is zijn de haakjes () niet nodig
const square = p => {
    console.log(p)
    return p * p
}

//square can also be written like this:
const squareTwo = p => p * p

//a function can also be saved under a variable
const average = function (a, b) {
    return (a + b) / 2
}

console.log("Het gemiddelde is: " + average(2, 10))

//=================================================================
//PART 1C                                                          |
//=================================================================

const App1C = () => {
    const name = 'Peter'
    const age = 10

    return (
        <div>
            <h1>Greetings</h1>
            <Hello1C name="Maya" age={26 + 10} />
            <Hello1C name={name} age={age} />
        </div>
    )
}

const Hello1C = ({ name, age }) => {
    // const name = props.name
    // const age = props.age

    // const { name, age } = props

    const bornYear = () => new Date().getFullYear() - age
    
    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
        </p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

//-----------------------
//STATE

const AppState = () => {

    const [ counter, setCounter ] = useState(0)
   
   
    setTimeout(
      () => setCounter(counter + 1),
      5000
    )
    console.log("rendering", counter);
   
     return (
       <div>{counter}</div>
     )
   }

//-----------------------
//EVENT HANDLERS

   //Set counter is executed when pressing the button with the onClick eventhandler
   const AppCounterManual = () => {
    const [ counter, setCounter ] = useState(0)
  
    return (
      <div>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>
          plus
        </button>
        <button onClick={() => setCounter(0)}> 
          zero
        </button>
      </div>
    )
  }

  //The set counter functions have been stored in a seperate variable instead of 
  //directly defining them in the event handler onClick
  const AppManualCounterVar = () => {
    const [ counter, setCounter ] = useState(0)
  
    const increaseByOne = () => setCounter(counter + 1)
    
    const setToZero = () => setCounter(0)
  
    return (
      <div>
        <div>{counter}</div>
        <button onClick={increaseByOne}>
          plus
        </button>
        <button onClick={setToZero}>
          zero
        </button>
      </div>
    )
  }

//---------------------------------------
//PASSING STATE TO CHILD COMPONENTS

// Component to display the counter
const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
}
// Destructured version of Display
// const Display = ({ counter }) => <div>{counter}</div>

// Component that contains the button Event Handler
const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
}
// Destructured version of Button
// const Button = ({ handleClick, text }) => (
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )



// Display and Button have both been placed in their own child component and get
// called in the App component
const App = () => {
    const [ counter, setCounter ] = useState(0)
  
    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)
  
    return (
      <div>
        <Display counter={counter}/>
        <Button
          handleClick={increaseByOne}
          text='plus'
        />
        <Button
          handleClick={setToZero}
          text='zero'
        />     
        <Button
          handleClick={decreaseByOne}
          text='minus'
        />           
      </div>
    )
}



  ReactDOM.render(<AppCounterManual />, document.getElementById('root'))
//    ReactDOM.render(<AppState />, document.getElementById('root'))
// ReactDOM.render(<App1C />, document.getElementById('root'))
// ReactDOM.render(<Test />, document.getElementById('test'))
// ReactDOM.render(<Testlet />, document.getElementById('testlet'))
// ReactDOM.render(<AppTwo />, document.getElementById('apptwo'))