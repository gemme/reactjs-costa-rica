import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./components/App.jsx";
import { ListUser } from "./components/ListUser.jsx";
import { UpdateUser } from "./components/UpdateUser.jsx";
import { CreateUser } from "./components/CreateUser.jsx";
import { UserProvider } from "./providers/UserProvider.jsx";
import { SignIn } from "./components/Base/SignIn.jsx";

const Main = () => {
  return (
    <BrowserRouter>
      <StrictMode>
        <UserProvider>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<App />}>
              <Route path="/users" element={<ListUser />} />
              <Route path="/users/:id" element={<UpdateUser />} />
              <Route path="/users/create" element={<CreateUser />} />
              <Route path="/users/update/:id" element={<UpdateUser />} />
              {/*   /users/update/123  */}
            </Route>
          </Routes>
        </UserProvider>
      </StrictMode>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
