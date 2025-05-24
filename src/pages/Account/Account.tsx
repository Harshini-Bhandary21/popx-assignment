import styles from "./Account.module.css";
import profilePic from "../../images/profile.png";
import camera from "../../images/camera.svg";

function Account() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Account Settings</h1>
      <div className={styles.card}>
        <div className={styles.profileSection}>
          <div className={styles.avatarWrapper}>
            <img src={profilePic} alt="Profile" className={styles.avatar} />
            <img src={camera} alt="Camera" className={styles.camera} />
          </div>
          <div className={styles.userInfo}>
            <h2 className={styles.name}>Marry Doe</h2>
            <p className={styles.email}>Marry@Gmail.Com</p>
          </div>
        </div>
        <p className={styles.description}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
}

export default Account;
