import { useLoadUsers } from "../hooks/useLoadUsers";
import { useState } from "react";
import { useNavigate } from "react-router";

export const ListUser = () => {
  //const {removeUser} = useRemoveUser();
  const { users, loadUsers, error: usersError } = useLoadUsers();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const removeUser = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Error removing user");
      }
      await loadUsers();
    } catch (error) {
      console.error(error);
      setError("Error removing new user ");
    }
  };
  return (
    <div>
      <h2>List of users</h2>
      <button
        onClick={() => {
          navigate("/users/create");
        }}
      >
        Add User
      </button>
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
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{formattedDate}</td>
                <td>
                  <button onClick={() => removeUser(user._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
