import { useReducer } from "react";

// reducer (state, action)
// action {  type, payload  }
/*
 state = {
    todo: '',
    todos: []
 }
*/
const INITIAL_STATE = {
  todo: "",
  todos: [],
};
// Reducer
// el estado es inmutable
// la funcion pura
// solo existe una fuente de la verdad
const reducer = (state, action) => {
  // action
  // { type: 'verb_noun' }
  // { type: 'add_todo' }
  // { type: 'get_employees' }
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "ADD_NAME":
      return {
        ...state,
        todo: action.payload,
      };
    default:
      return state;
  }
};

export const FormReducer = () => {
  // Reglas de hooks
  // siempre se declaran al inicio
  // no agregar dentro de un if
  // class components no funcionan en clases
  // 1era es el estado en minusculas, 2da funcion para actualizar el estado, camelCase , setName
  // undefined y un null
  // const [name, setName] = useState("");
  // const [names, setNames] = useState(["Default name"]);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  console.log("state.todo", state.todo);
  // jsx
  return (
    <div>
      <span>Form</span>
      <input
        onChange={(event) => {
          //setName(event.target.value);
          dispatch({
            type: "ADD_NAME",
            payload: event.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          //names.push(name);
          //[...spread, nuevo estado]
          //const newState = [...names, name];
          //setNames(newState);
          dispatch({
            type: "ADD_TODO",
            payload: state.todo,
          });
        }}
      >
        Add
      </button>
      <ul>
        {state.todos.map((name, i) => (
          <li key={name + i}>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
