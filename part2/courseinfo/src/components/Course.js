import React from 'react';
  
  
const Header = ({content}) => {
return (
<h2>{content.name}</h2>
)
}

const Content = ({parts}) => {
return (
    parts.map(part => <Part key={part.id} part={part} />))
}

const Part = ({ part }) => {
    return (
        <p>
        {part.name} - Exercises {part.exercises}
        </p>    
    )
}

const Total = ({parts}) => {
    let total = parts.reduce((total, part) => {
        return total + part.exercises
        }, 0)

    return (
        <p>Total exercises: {total}</p>
    )
};


const Course = ({ course }) =>{
return (
<div>
<Header content={course} />
<Content parts={course.parts}/>
<Total parts={course.parts} />
</div>
) 
}
  

export default Course;