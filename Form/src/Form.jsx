import React from "react";
import "./index.css";
import { useState } from "react";

const Form = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfrimPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  function validate (e) {
    e.preventDefault();
    
    if(username.length > 8){
      setErorUserName('');
      setUserColor("green");
    }else{
      setErorUserName("Username must be at least 8 characters");
      setUserColor("red");
    }

    if(email.includes("@gmail.com")){
      setErrorEmail("");
      setEmailColor("green"); 
    }else{
      setErrorEmail("Email must conntain '@gmail.com'");
      setEmailColor("red");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must be at least 8 characters");
      setPasswordColor("red");
    }

    if (password != "" && password == confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords didn't matched.");
      setConfirmPasswordColor("red");
    }
    
    
  }

  return (
    <>
      <div className="card">
        <div className="card-image"></div>
          <form>
            <input
              type="text"
              placeholder="Name"
              style={{ borderColor: userColor }}
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <p className="error">{errorUserName}</p>

            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: emailColor }}
            />
            <p className="error">{errorEmail}</p>

            <input
              type="password"
              placeholder="Password"
              style={{ borderColor: passwordColor }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error">{errorPassword}</p>

            <input
              type="password"
              placeholder="Confirm Password"
              style={{ borderColor: confirmPasswordColor }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="error">{errorConfrimPassword}</p>

            <button type="submit" className="submit-btn" onClick={validate}>Submit</button>
          </form>
        
      </div>
    </>
  );
};

export default Form;
