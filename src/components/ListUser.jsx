import { useLoadUsers } from "../hooks/User/useLoadUsers";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./Base/Button";
import { useUser } from "../providers/UserProvider";
export const ListUser = () => {
  //const {removeUser} = useRemoveUser();
  const { users, loadUsers, error: usersError, loading } = useLoadUsers();
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
      <div className="flex justify-end">
        <Button
          onClick={() => {
            navigate("/users/create");
          }}
          label={"Create New User"}
        />
      </div>

      <ul role="list" className="divide-y divide-white/5 m-10">
        {loading && (
          <span className="text-sm/6 font-medium text-white">Loading...</span>
        )}
        {users.map((user) => {
          const formattedDate = new Intl.DateTimeFormat("en-US", {
            dateStyle: "long",
            timeStyle: "short",
          }).format(new Date(user.dob));
          return (
            <li className="cursor-pointer flex gap-x-6 hover:bg-gray-800 justify-start py-5 rounded ">
              <div
                onClick={() => {
                  navigate("/users/update/" + user._id);
                }}
                className="flex min-w-0 gap-x-4"
              >
                <div className="min-w-0 flex-auto">
                  <p className="text-sm/6 font-semibold text-white">
                    {user.name}
                  </p>
                  <p className="mt-1 truncate text-xs/5 text-gray-400">
                    {user.email}
                  </p>
                </div>
              </div>
              <div className="flex min-w-0 gap-x-4">
                <div
                  onClick={() => {
                    navigate("/users/update/" + user._id);
                  }}
                  className="hidden shrink-0 sm:flex sm:flex-col sm:items-end"
                >
                  <p className="text-sm/6 text-white">Date of Birth</p>
                  <p className="mt-1 text-xs/5 text-gray-400">
                    {formattedDate}
                  </p>
                </div>
              </div>
              <div>
                <Button
                  onClick={(event) => removeUser(user._id)}
                  label="Delete"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
