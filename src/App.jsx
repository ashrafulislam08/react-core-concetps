import "./App.css";

function App() {
  return (
    <>
      <Device name="Laptop" />
      <Device name="Phone" />
      <Device name="Mobile" />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Student />
      <Developer />
    </>
  );
}

function Device(props) {
  return <h2>This device: {props.name} </h2>;
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

function Student() {
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Name: </p>
      <p>Age: </p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
  };

  return (
    <div style={developerStyle}>
      <h5>Developer</h5>
      <p>Coding: </p>
    </div>
  );
}

export default App;

// Javascript XML
