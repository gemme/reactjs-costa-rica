import { useState, useEffect } from "react";
import "./CreateUser.css";
import { useNavigate } from "react-router";
import { Button } from "./Base/Button";
import { useUser } from "../providers/UserProvider";

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
  const userContext = useUser();

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
      userContext.setUsername(username);
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
        <div class="space-y-12">
          <div class="border-b border-white/10 pb-12">
            <h2 class="text-base/7 font-semibold text-white">User Profile</h2>
            <div class="sm:col-span-4">
              <label for="name" class="block text-sm/6 font-medium text-white">
                Name
              </label>
              <div class="mt-2">
                <input
                  id="name"
                  type="text"
                  name="name"
                  autocomplete="name"
                  class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  value={name}
                  placeholder="Name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </div>
            <div class="sm:col-span-4">
              <label for="email" class="block text-sm/6 font-medium text-white">
                Email
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  value={email}
                  placeholder="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>
            <div class="sm:col-span-4">
              <label
                for="dateOfBirth"
                class="block text-sm/6 font-medium text-white"
              >
                Date of Birth
              </label>
              <div class="mt-2">
                <input
                  id="dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  autocomplete="dateOfBirth"
                  class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  value={dateOfBirth}
                  placeholder="Date of Birth"
                  onChange={(event) => {
                    setDateOfBirth(event.target.value);
                  }}
                />
              </div>
            </div>
            <div class="sm:col-span-4">
              <label
                for="username"
                class="block text-sm/6 font-medium text-white"
              >
                Username
              </label>
              <div class="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autocomplete="username"
                  class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  value={username}
                  placeholder="Username"
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
              </div>
            </div>
            <div class="sm:col-span-4">
              <label
                for="password"
                class="block text-sm/6 font-medium text-white"
              >
                Password
              </label>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="text"
                  autocomplete="password"
                  class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  value={password}
                  placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {error && <span>{error}</span>}
        <Button onClick={addUser} label={"Add User"}>
          Add User
        </Button>
      </div>
    </div>
  );
};
