import { useState } from "react";

export const Form = () => {
  // Reglas de hooks
  // siempre se declaran al inicio
  // no agregar dentro de un if
  // class components no funcionan en clases
  // 1era es el estado en minusculas, 2da funcion para actualizar el estado, camelCase , setName
  // undefined y un null
  const [name, setName] = useState("");
  const [names, setNames] = useState(["Default name"]);
  // jsx
  return (
    <div>
      <span>Form</span>
      <input
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          //names.push(name);
          //[...spread, nuevo estado]
          const newState = [...names, name];
          setNames(newState);
        }}
      >
        Add
      </button>
      <ul>
        {names.map((name, i) => (
          <li key={name + i}>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

/*
const todos = {
  1: {
    id: '1',
    task: 'tarea',
    completed: true
  },
  2: {
    id: '1',
    task: 'tarea',
    completed: true
  }
};
todos[1].completed = true; 

setTodos({...todos});
*/
