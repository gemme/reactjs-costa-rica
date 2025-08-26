import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./components/App.jsx";
import { ListUser } from "./components/ListUser.jsx";
import { UpdateUser } from "./components/UpdateUser.jsx";
import { CreateUser } from "./components/CreateUser.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/users" element={<ListUser />} />
          <Route path="/users/:id" element={<UpdateUser />} />
          <Route path="/users/create" element={<CreateUser />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
