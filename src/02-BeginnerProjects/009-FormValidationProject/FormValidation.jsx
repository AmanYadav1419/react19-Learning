// this is very basic and beginner friendly form validation project,
//  so that you can understand the concept of form validation.

import { useState } from "react";
import "./formvalidation.css";

const FormValidation = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfrimPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  // handle form submit validate
  const handleFormSubmitValidate = (e) => {
    e.preventDefault();

    // username validation checks
    if (username.length > 5) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be more than 5 characters");
      setUserColor("red");
    }

    // email validation checks
    if (email.includes("@gmail.com")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Please enter a valid email");
      setEmailColor("red");
    }

    // password validation checks
    if (password.length > 5) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must be more than 7 characters");
      setPasswordColor("red");
    }

    // confirm password validation checks
    if (confirmpassword !== "" && confirmpassword === password) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword(
        "please check your confirm password , it should match with password",
      );
      setConfirmPasswordColor("red");
    }

    // form submit validate
    if (
      username.length > 5 &&
      email.includes("@gmail.com") &&
      password.length > 5 &&
      confirmpassword === password
    ) {
      alert("Form submitted successfully");

        // additional print the form data to the console
        // so that you can see the form data that you submitted.
        console.log({
          username,
          email,
          password,
          confirmpassword,
        });

        // and then make the states empty for new entry
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
  };

  return (
    <div className="formvalidation-wrapper">
      <div className="formvalidation-card">
        <h2 className="formvalidation-title">Create Account</h2>
        <p className="formvalidation-subtitle">Fill in the details below to register</p>

        {/* form */}
        <form className="formvalidation-form" onSubmit={handleFormSubmitValidate}>
          <div className="form-field">
            <label className="form-label" htmlFor="fv-username">Username</label>
            <input
              id="fv-username"
              type="text"
              placeholder="At least 6 characters"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ borderColor: userColor || undefined }}
              className="formvalidation-input"
            />
            <p className="formvalidation-error">{errorUserName}</p>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="fv-email">Email</label>
            <input
              id="fv-email"
              type="email"
              placeholder="you@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: emailColor || undefined }}
              className="formvalidation-input"
            />
            <p className="formvalidation-error">{errorEmail}</p>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="fv-password">Password</label>
            <input
              id="fv-password"
              type="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderColor: passwordColor || undefined }}
              className="formvalidation-input"
            />
            <p className="formvalidation-error">{errorPassword}</p>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="fv-confirm">Confirm Password</label>
            <input
              id="fv-confirm"
              type="password"
              placeholder="Repeat your password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ borderColor: confirmPasswordColor || undefined }}
              className="formvalidation-input"
            />
            <p className="formvalidation-error">{errorConfrimPassword}</p>
          </div>

          {/* sumbit button */}
          <button
            className="formvalidation-submit-btn"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
