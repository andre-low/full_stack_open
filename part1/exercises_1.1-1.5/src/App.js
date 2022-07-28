import PropTypes from 'prop-types';

const Header = (props) => <h1>{props.course.name}</h1>;

Header.propTypes = {
  course: PropTypes.object.isRequired,
};

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);

Part.propTypes = {
  part: PropTypes.object.isRequired,
};

const Content = (props) => (
  <>
    <Part part={props.course.parts[0]} />
    <Part part={props.course.parts[1]} />
    <Part part={props.course.parts[2]} />
  </>
);

Content.propTypes = {
  course: PropTypes.object.isRequired,
};

const Total = (props) => {
  let exercises = 0;
  for (const part of props.course.parts) {
    exercises += part.exercises;
  }
  return <p>Number of exercises {exercises}</p>;
};

Total.propTypes = {
  course: PropTypes.object.isRequired,
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
