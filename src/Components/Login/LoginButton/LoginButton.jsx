import { useAuth0 } from "@auth0/auth0-react";
import './LoginButton.css';
const LoginButton = ({ styleId = "login-button" }) => {
  const { loginWithRedirect } = useAuth0();

  return (
  <div className="login-container">
    <button id={styleId} onClick={() => loginWithRedirect()}>Log In</button>
  </div>
  );
};

export default LoginButton;