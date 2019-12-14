import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
    <div>
        <p>Hello world</p>
    </div>
)

const AppTwo = () => {
    console.log('Hello from component')
    const now = new Date();
    const a = 10;
    const b = 20;
    return (
        <div>
            <p>Hello world with a console log element</p>
            <p>
                {a} plus {b} is {a + b}
            </p>
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


ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Test />, document.getElementById('test'))
ReactDOM.render(<Testlet />, document.getElementById('testlet'))
ReactDOM.render(<AppTwo />, document.getElementById('apptwo'))