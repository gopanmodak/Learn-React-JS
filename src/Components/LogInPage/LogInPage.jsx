import React, { useState } from "react";
import "./LogIn.css";

const LogIn = () => {
  let handleOnChange = () => {};
  const handleNameChange = (w) => {
    setName(w.target.value);
  };
  const handleEmailChange = (w) => {
    setEmail(w.target.value);
  };
  const handlePasswordChange = (w) => {
    setPassword(w.target.value);
  };

  const handleSubmit = (r) => {
    r.preventDefault();
    let userInfo = {
      name: name,
      email: email,
      password: password,
    };
    console.log(userInfo);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1> Registration Page </h1>

      <form action="" onSubmit={handleSubmit}>
        <div>
          <label name="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label name="name">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label name="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="submit" onClick={handleOnChange}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
