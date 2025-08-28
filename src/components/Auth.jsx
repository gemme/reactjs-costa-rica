import { useUserAuthenticated } from "../hooks/User/useUserAuthenticated";

export const Auth = () => {
  useUserAuthenticated();
  return <></>;
};
