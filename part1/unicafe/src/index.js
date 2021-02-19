import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;

const Statistic = ({text, value}) => <><td>{text}</td><td>{value}</td></>;

const Statistics = ({metrics, calculateAverage, calculatePositiveRate}) => {

  if (metrics.total === 0){
    return <div> No feedback given </div>;
  }
  
  return (
    <div>
      <table>
      <tbody>
      <tr><Statistic text="Good:" value={metrics.good} /></tr>
      <tr><Statistic text="Neutral:" value={metrics.neutral} /></tr>
      <tr><Statistic text="Bad:" value={metrics.bad} /></tr>
      <tr><Statistic text="Average Score:" value={calculateAverage()} /></tr>
      <tr><Statistic text="Positive Percentage:" value={calculatePositiveRate()} /></tr>
      </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let total = good + neutral + bad;

  let metrics = {good, neutral, bad, total};

  const handleGoodClick = () =>{
    let goodClicks = good + 1;

    setGood(goodClicks);
  };

  const handleNeutralClick = () =>{
    let neutralClicks = neutral + 1;

    setNeutral(neutralClicks);
  };

  const handleBadClick = () =>{
    let badClicks = bad + 1;
    setBad(badClicks);
  };

  const calculateAverage = () => (good  - bad) / total;

  const calculatePositiveRate = () => good / total * 100;

  

  return (
    <div>
      <h1>Give Feedback</h1>
      <p>How did you find the service at this branch?</p>
      <Button handleClick={handleGoodClick} text='Good'/> 
      <Button handleClick={handleNeutralClick} text='Neutral'/> 
      <Button handleClick={handleBadClick} text='Bad' /> 
      <h2>Feedback Statistics</h2>
      <Statistics metrics={metrics} calculateAverage={calculateAverage} calculatePositiveRate={calculatePositiveRate} />

    </div>
    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
