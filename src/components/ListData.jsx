import { useState, useEffect } from "react";
import "./ListData.css";
const _data = {
  url: "https://anapioficeandfire.com/api/characters/583",
  name: "Jon Snow",
  gender: "Male",
  culture: "Northmen",
  born: "In 283 AC",
  died: "",
  titles: ["Lord Commander of the Night's Watch"],
  aliases: [
    "Lord Snow",
    "Ned Stark's Bastard",
    "The Snow of Winterfell",
    "The Crow-Come-Over",
    "The 998th Lord Commander of the Night's Watch",
    "The Bastard of Winterfell",
    "The Black Bastard of the Wall",
    "Lord Crow",
  ],
  father: "",
  mother: "",
  spouse: "",
  allegiances: ["https://anapioficeandfire.com/api/houses/362"],
  books: ["https://anapioficeandfire.com/api/books/5"],
  povBooks: [
    "https://anapioficeandfire.com/api/books/1",
    "https://anapioficeandfire.com/api/books/2",
    "https://anapioficeandfire.com/api/books/3",
    "https://anapioficeandfire.com/api/books/8",
  ],
  tvSeries: [
    "Season 1",
    "Season 2",
    "Season 3",
    "Season 4",
    "Season 5",
    "Season 6",
  ],
  playedBy: ["Kit Harington"],
};

// Especificidad
// tags, classes, id
/*
    div{
        color: 'pink'
    }

    div .format{
        color: 'red'
    }

    .format{
        color:'black'
    }    
 */

// mock
export const ListData = () => {
  const [data, setData] = useState({});
  const [input, setInput] = useState(583);
  console.log("render");
  useEffect(() => {
    // https://anapioficeandfire.com/api/characters/538
    fetch("https://anapioficeandfire.com/api/characters/" + input, {
      method: "GET",
    })
      .then((response) => {
        // objeto de tipo response
        // spaguetti code
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
    console.log("useEffect1");
    const id = setInterval(() => {
      console.log("interval");
    }, 1000);
    // lifecycle hooks
    // montaje
    // desmontaje
    return () => {
      console.log("desmontaje");
      clearInterval(id);
    };
  }, [
    /* no dependencia*/
    input,
  ]);

  return (
    <ul>
      {
        <div
          className="format"
          id="custom"
          style={{
            background: "yellow",
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(event) => {
              setInput(parseInt(event.target.value));
            }}
          />
          <li>{data.name}</li>
          <h3>Aliases</h3>
          <ul>
            {data?.aliases?.map((alias) => (
              <li>{alias}</li>
            ))}
          </ul>
        </div>
      }
    </ul>
  );
};
