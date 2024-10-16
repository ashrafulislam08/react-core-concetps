import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <Device name="Laptop" price="5000" />
      <Device name="Phone" price="1170" />
      <Device name="Mobile" price="2000" />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Student name="Siam" age="25" />
      <Student name="Rafiq" age="60" />
      <Developer language={"Javascript"} />

      <Todo task="Learn React" isDone={false} />
      <Todo task="Core Concepts" isDone={false} />
      <Todo task="Try JSX" isDone={true} />
    </>
  );
}

function Device({ name, price }) {
  return (
    <h2>
      This device: {name} <br />
      Price: {price}
    </h2>
  );
}

function Person() {
  const age = 24;
  const money = 20;
  const person = { name: "Ashraful Islam", age: 19 };
  return (
    <h1>
      I am {person.name} with age: {age + money}
    </h1>
  );
}

function Student({ name, age }) {
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Name:{name} </p>
      <p>Age: {age} </p>
    </div>
  );
}

function Developer({ language }) {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
  };

  return (
    <div style={developerStyle}>
      <h5>Developer</h5>
      <p>Coding: {language} </p>
    </div>
  );
}

export default App;

// Javascript XML - JSX
