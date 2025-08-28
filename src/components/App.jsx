import React from "react";
import { Outlet, NavLink } from "react-router";
import { StackHeader } from "./StackHeader";
import { useUser } from "../providers/UserProvider";

function App() {
  const { token, username } = useUser();

  return (
    <div>
      <StackHeader username={username} />
      <main>
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
