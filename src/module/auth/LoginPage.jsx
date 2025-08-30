import { useState } from "react";
import { login, USER_ROLE } from "../../api/userApi.js";
import { useNavigate } from "react-router";
import LoginForm from "./LoginForm.jsx";

const dashboardMap = {
  [USER_ROLE.ADMIN]: "/admin",
  [USER_ROLE.USER]: "/dashboard",
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  function handleLogin(dto) {
    return login(dto)
      .then(({ role }) => {
        localStorage.setItem(
          "user",
          JSON.stringify({ role, username: dto.username }),
        );
        navigate(dashboardMap[role]);
      })
      .catch(setErrorMessage);
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm handleSubmit={handleLogin} />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
