import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({content}) => {
return (
<h1>{content.name}</h1>
)
}

const Content = ({content}) => {
  return (
    content.parts.map(part => {
      return (<div>
        <p>{part.title} - Exercises: {part.exercises}</p>
      </div>)
    } )
  )
}

const Total = ({content}) => {
  let total = 0;

  content.parts.map(part => {
    return (
      total = total + part.exercises
    )
  })

  return (
    <p>Total exercises: {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
        {
        title : 'Fundamentals of React', 
        exercises : 10
        }, 
        {
        title : 'Using props to pass data', 
        exercises : 7},
        {
        title : 'State of a component', 
        exercises : 14
        }
      ]
    }
  return (
    <div>
      <Header content={course} />
      <Content content={course}/>
      <Total content={course} />
      </div>

)}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
