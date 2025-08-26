import { useState, useEffect } from "react";
import "./CreateUser.css";
import { useNavigate } from "react-router";

export const CreateUser = () => {
  // fetch(, {method: 'POST'})
  // axios.post
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const addUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users", {
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
      if (!response.ok) {
        throw new Error("Error creating user");
      }
      navigate("/users");
    } catch (error) {
      console.error(error);
      setError("Error adding new user ");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px",
        }}
      >
        <h2>Create User</h2>
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
        {error && <span>{error}</span>}
        <button onClick={addUser}>Add User</button>
      </div>
    </div>
  );
};
