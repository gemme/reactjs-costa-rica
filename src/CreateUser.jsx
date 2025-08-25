import { useState } from "react";
import "./CreateUser.css";

export const CreateUser = () => {
  // fetch(, {method: 'POST'})
  // axios.post
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const addUser = async () => {
    const reponse = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        dob: dateOfBirth,
        username,
        password,
      }),
    });
    if (!reponse.ok) {
      throw new Error("Error creating user");
    }
    //const data = await response.json();
    //setUsers([...users, data]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "10px",
      }}
    >
      <div>Create User</div>
      <label htmlFor="name"></label>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label htmlFor="email" />
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <label htmlFor="dateOfBirth" />
      <input
        type="date"
        value={dateOfBirth}
        placeholder="Date of Birth"
        onChange={(event) => {
          setDateOfBirth(event.target.value);
        }}
      />
      <label htmlFor="username" />
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <label htmlFor="password" />
      <input
        type="text"
        value={password}
        placeholder="Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
};
