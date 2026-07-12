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
    <>
      <div className="formvalidation-card">
        <div className="formvalidation-card-img"></div>

        {/* form */}
        <form className="formvalidation-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderColor: userColor }}
            className="formvalidation-input"
            />
          <p className="formvalidation-error">{errorUserName}</p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
            className="formvalidation-input"
          />

          <p className="formvalidation-error">{errorEmail}</p>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
            className="formvalidation-input"
          />

          <p className="formvalidation-error">{errorPassword}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ borderColor: confirmPasswordColor }}
            className="formvalidation-input"
          />

          <p className="formvalidation-error">{errorConfrimPassword}</p>

          {/* sumbit button */}
          <button
            className="formvalidation-submit-btn"
            onClick={handleFormSubmitValidate}
          >
            Sumbit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormValidation;
