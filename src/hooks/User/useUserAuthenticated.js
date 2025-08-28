import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useUser } from "../../providers/UserProvider";

export const useUserAuthenticated = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useUser();

  useEffect(() => {
    console.log("Checking authentication for path:", location.pathname);
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    } else {
      if (location.pathname === "/signin") {
        navigate("/");
      }
      userContext.setToken(localStorage.getItem("token"));
      userContext.setUsername(localStorage.getItem("username"));
    }
  }, [location.pathname]);
};
