import React, { useState } from "react";
import validation from "./Validation";
import { useNavigate } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export default function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const [errors, setError] = useState({});

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    //e.preventDefault();
    let validationResponse = validation(values);
    setError(validationResponse);
    if (Object.keys(validationResponse).length === 0) {
      navigate("/dashboard");
    }
  }
  return (

    <div class="container">
      <div id="login-form">
        <h1><LockOpenIcon />Login</h1>
        <br/>
        <div class="input-control">
          <label for="username">Username</label>
          <input id="username" name="name" placeholder="Enter username" type="text" value={values.name} onChange={handleChange} />
          {errors.name && (
            <p style={{ color: "red", fontSize: "13px" }}>{errors.name}</p>
          )}
          <div class="error"></div>
        </div>
        <div class="input-control">
          <label for="password">Password</label>
          <input id="password" name="password" placeholder="Enter password" type="password" value={values.password} onChange={handleChange} />
          {errors.password && (
            <p style={{ color: "red", fontSize: "13px" }}>
              {errors.password}
            </p>
          )}
          <div class="error"></div>
        </div>
        <button
          Variant="contained"
          type="submit"
          className="login-button"
          onClick={() => handleSubmit()}
        >
          Register
        </button>
      </div>
    </div>
  );
}

