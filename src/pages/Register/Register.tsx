import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import FloatingLabelInput from "../../components/FloatingLabelInput/FloatingLabelInput";
import styles from "./Register.module.css";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("Marry Doe");
  const [email, setEmail] = useState("Marry Doe");
  const [password, setPassword] = useState("Marry Doe");
  const [phoneNumber, setPhoneNumber] = useState("Marry Doe");
  const [companyName, setCompanyName] = useState("Marry Doe");
  const [isAgency, setIsAgency] = useState<string | null>(null);

  const handleRegister = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    navigate("/account");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Create your
        <br />
        PopX account
      </h1>
      <div className={styles.form}>
        <FloatingLabelInput
          label="Full Name"
          placeholder="Marry Doe"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <FloatingLabelInput
          label="Phone number"
          placeholder="Marry Doe"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <FloatingLabelInput
          label="Email address"
          placeholder="Marry Doe"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FloatingLabelInput
          label="Password"
          placeholder="Marry Doe"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FloatingLabelInput
          label="Company name"
          placeholder="Marry Doe"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            Are you an Agency?<span className="red">*</span>
          </label>
          <div className={styles.radioOptions}>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={isAgency === "yes"}
                onChange={() => setIsAgency("yes")}
              />
              <span className={styles.customRadio}></span> Yes
            </label>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={isAgency === "no"}
                onChange={() => setIsAgency("no")}
              />
              <span className={styles.customRadio}></span> No
            </label>
          </div>
        </div>
      </div>
      <Button onClick={handleRegister} className={styles.createBtn}>Create Account</Button>
    </div>
  );
}

export default Register;
