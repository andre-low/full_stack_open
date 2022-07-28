// Using concise returns in the two following arrow functions, see: https://www.samanthaming.com/tidbits/47-arrow-functions-cheatsheet/

const Hello = (props) => (
  <div>
    <p>
      Hello {props.name}, you are {props.age} years old
    </p>
  </div>
);

const Footer = () => (
  <div>
    greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
  </div>
);

const App = () => {
  const name = 'Peter';
  const age = 10;

  return (
    // <> and </> are React fragments, see: https://reactjs.org/docs/fragments.html
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  );
};

export default App;
