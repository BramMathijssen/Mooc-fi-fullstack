import React from 'react'
import ReactDOM from 'react-dom'


//Part 1a
const name = "bert";

const App = () => {
    return(
        <div>
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
            <Hello name= "Bertaap" />
            {/* Dynamisch vullen van het Hello component */}
            <Hello name= {name} age= {age} />
            <p>Hello {name} with a console log element </p>
            <p>The current time is {now.toString()}</p>
            <br />
            <p>
                {/* {Alle text binnen curly brackets wordt als js code geintepeteerd.} */}
                {a} plus {b} is {a + b}
            </p>
            <Footer name = {name}/>
        </div>
    )
}

const Footer = (props) => {
    return(
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


//part 1b
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
}) 


// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Test />, document.getElementById('test'))
ReactDOM.render(<Testlet />, document.getElementById('testlet'))
ReactDOM.render(<AppTwo />, document.getElementById('apptwo'))