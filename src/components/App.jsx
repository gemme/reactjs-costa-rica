import React from "react";
import { Outlet, NavLink } from "react-router";

function App() {
  return (
    <div>
      <nav>
        <div>
          <NavLink to="/users">Users</NavLink>
        </div>
        <div>
          <a href="/employees/">Employees</a>
        </div>
      </nav>
      <div>
        <h1>Dashboard</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
