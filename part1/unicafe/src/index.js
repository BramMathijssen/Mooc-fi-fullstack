import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'; // Tell webpack that Button.js uses these styles

const Header = () => {
  return (
    <h2>Give feedback</h2>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({ total, good, neutral, bad }) => {
  let average = (good - bad) / total
  let positive = (good / total) * 100

  if (total === 0) {
    return (
      <div>
        <p>No feedback given yet.</p>
      </div>
    )
  } else {
    return (
      <React.Fragment>
        <h2>statistics</h2>
        <table>
          <thead>
            <tr>
              <th>Value</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <Statistic text={"good"} value={good} />
            <Statistic text={"neutral"} value={neutral} />
            <Statistic text={"bad"} value={bad} />
            <Statistic text={"average"} value={average} />
            <Statistic text={"positive"} value={positive + "%"} />
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let [average, setAverage] = useState(0);
  let [total, setTotal] = useState(0);

  const increase = (param) => {
    if (param === 1) {
      setGood(good + 1);
      setTotal(total + 1)

    } else if (param === 2) {
      setNeutral(neutral + 1)
      setTotal(total + 1)

    } else if (param === 3) {
      setBad(bad + 1);
      setTotal(total + 1)
    }
  }

  return (
    <div>
      <Header />
      <Button onClick={() => increase(1)} text="good" />
      <Button onClick={() => increase(2)} text="neutral" />
      <Button onClick={() => increase(3)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)