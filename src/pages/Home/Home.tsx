import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <Link to="/register">Create Account</Link>
      <Link to="/login" className={styles.registerBtn}>Already Registered? Login</Link>
    </div>
  );
}

export default HomePage;
