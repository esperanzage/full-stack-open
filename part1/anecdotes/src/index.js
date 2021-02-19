import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;



const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
  let copyOfPoints =  [...points];

  const getRandomQuote = () => {
    let quoteIndex = Math.floor((Math.random())* (6-0) + 0);
    setSelected(quoteIndex);
  }; 

  const increasePoints = () => {
    copyOfPoints[selected] += 1;
    setPoints(copyOfPoints);
  }

  const getMostVoted = () =>{
    let highest = copyOfPoints[0];
    let index = 0;

    for (let i = 1; i < copyOfPoints.length; i++) {
        if (copyOfPoints[i] > highest){
          highest = copyOfPoints[i];
          index = i;
        }
    }
    return index;
  }

  return (
    <div>
    <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
    <Button handleClick={increasePoints} text={'Vote Quote'} />
    <Button handleClick={getRandomQuote} text={'Next Quote'} />

    <h1>Most Voted</h1>
    <p>{anecdotes[getMostVoted()]}</p>
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
