import React from 'react'

const Header = ({course}) => <h2>{course.name}</h2>

const Part = ({part}) => (<p>{part.name} {part.exercises}</p>)

const Content = ({course}) => (
  <>
    {course.parts.map(part => 
      <Part key = {part.id} part = {part} />
    )}
  </>
)

const Total = ({course}) => (
  <h4>Total of {
    course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)
  } exercises</h4>
)

const Course = ({course}) => (
  <div>
    <Header course = {course} />
    <Content course = {course} />
    <Total course = {course} />
  </div>
)

export default Course