import { useState, useEffect } from "react";
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
// mock
export const ListData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // https://anapioficeandfire.com/api/characters/538
    fetch("https://anapioficeandfire.com/api/characters/583", {
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
    // lifecycle hooks
  }, []);
  /*
    .then((data) => {
      console.log(data);
      setData(data);
    });
    */
  return (
    <ul>
      {
        <>
          <li>{data.name}</li>
          <h3>Aliases</h3>
          <ul>
            {data?.aliases?.map((alias) => (
              <li>{alias}</li>
            ))}
          </ul>
        </>
      }
    </ul>
  );
};
