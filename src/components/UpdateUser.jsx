import { useState, useEffect } from "react";
import { useLoadUsers } from "../hooks/useLoadUsers";

export const UpdateUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [error, setError] = useState("");
  const { users, loadUsers, error: usersError } = useLoadUsers();

  /*
  async function loadUsers() {
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Error loading userss");
      }
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      setError("Error adding new user ");
    }
  }
*/

  const updateUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, dob: dateOfBirth }),
      });
      if (!response.ok) {
        throw new Error("Error updating users");
      }
      const data = await response.json();
      console.log(data);
      await loadUsers();
    } catch (error) {
      console.error(error);
      setError("Error updating new user ");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

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
        <h2>Update User</h2>
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

        {/* <label htmlFor="username" />
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
        /> */}
        {error && <span>{error}</span>}
        <button onClick={updateUser}>Update User</button>
      </div>
      <div>
        <h2>List of users</h2>
        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </thead>

          <tbody>
            {users.map((user) => {
              const formattedDate = new Intl.DateTimeFormat("en-US", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date(user.dob));
              //'yyyy-MM-ddT12:00:00'
              //['yyyy-MM-dd', '12:00:00']
              return (
                <tr
                  onClick={() => {
                    setId(user._id);
                    setName(user.name);
                    setEmail(user.email);
                    setDateOfBirth(user.dob.split("T")[0]);
                  }}
                >
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{formattedDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {error && <span>Error updating user</span>}
        {usersError && <span>Error loading users</span>}
      </div>
    </div>
  );
};
