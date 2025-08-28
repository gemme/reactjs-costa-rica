import { useAuthentication } from "../../hooks/User/useAuthentication";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../../providers/UserProvider";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { token, signIn } = useAuthentication();
  const navigate = useNavigate();
  const userContext = useUser();

  console.log("Logged in Token", token);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      userContext.setUsername(username);
      userContext.setToken(token);
      navigate("/");
    }
  }, [token]);

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
          class="mx-auto h-10 w-auto"
        />
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            signIn(username, password);
          }}
          class="space-y-6"
        >
          <div>
            <label
              for="email"
              class="block text-sm/6 font-medium text-gray-100"
            >
              Username
            </label>
            <div class="mt-2">
              <input
                id="username"
                type="text"
                name="username"
                required
                autocomplete="username"
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm/6 font-medium text-gray-100"
              >
                Password
              </label>
              <div class="text-sm">
                <a
                  href="#"
                  class="font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div class="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                required
                autocomplete="current-password"
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm/6 text-gray-400">
          Not a member?
          <a
            href="#"
            class="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};
