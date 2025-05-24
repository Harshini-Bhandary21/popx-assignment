import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./Login.module.css";
import FloatingLabelInput from "../../components/FloatingLabelInput/FloatingLabelInput";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/account");
  };

  return (
    <div className={styles.container}>
      <h1>Sign in to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className={styles.form}>
        <FloatingLabelInput
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FloatingLabelInput
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button className={styles.loginButton} onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
