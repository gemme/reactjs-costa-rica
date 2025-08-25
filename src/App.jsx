//import "./App.css";
import React from "react";
import { useState } from "react";
import { FormReducer } from "./FormReducer";
//import { ListData } from "./ListData";
import { CreateUser } from "./CreateUser";

// hooks
// built-in hooks
// useState
// useEffect
// custom hooks
// manually hooks

// Smart Components
// Stateful components
// Class Components
// React 18

// Dumb Components
// Stateless Components
// Function Components

/*
function App() {
  return <div>Hola Mundo</div>;
}
  */

/*
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };

    //this.updateName = this.updateName.bind(this);
  }

  updateName = () => {
    this.setState({
      name: "Gabriel",
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.updateName}>Click me</button>
        <span>{"Hola mundo: " + this.state.name}</span>
      </div>
    );
  }
}
  */

function App() {
  // const myState = useState('')
  //const name = myState[0];
  //const seState = myState[1];

  // destructuring
  // hook
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [toggle, setToggle] = useState(true);

  function updateName() {
    setName("Gabriel");
  }

  function updateLastName() {
    setLastName("Martinez");
  }

  return (
    <div>
      {/* <button
        onClick={() => {
          updateName();
          updateLastName();
        }}
      >
        Click me
      </button>
      <span
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {"Hola mundo: " + name}
      </span>
      <LastName lastname={lastname} updateLastName={updateLastName} />
      <FormReducer />
      {toggle && <ListData />} */}
      <CreateUser />
    </div>
  );
}

function LastName(props) {
  return (
    <>
      <button onClick={props.updateLastName}>Click me</button>
      <div>{props.lastname}</div>
    </>
  );
}

export default App;
