import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {
  const actors = ["Sakib", "Raj", "Jasim", "Rubel"];

  const books = [
    { id: 1, name: "Physics", price: 100 },
    { id: 2, name: "Math", price: 120 },
    { id: 3, name: "Chemistry", price: 130 },
    { id: 4, name: "Biology", price: 150 },
  ];

  const singers = [
    { id: 1, name: "Dr. Mahfuzur Rahman", age: 68 },
    { id: 2, name: "Eva Rahman", age: 38 },
    { id: 3, name: "Shuvro Dev", age: 58 },
    { id: 4, name: "Pritom", age: 28 },
    { id: 5, name: "Imran", age: 37 },
  ];

  return (
    <>
      <BookStore books={books} />

      {singers.map((singer) => (
        <Singer singer={singer} />
      ))}
      <Actor name="Bappa Raaz" />
      {actors.map((actor) => (
        <Actor name={actor} />
      ))}
      {/* <Device name="Laptop" price="5000" />
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
      <Todo task="Try JSX" isDone={true} /> */}
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
