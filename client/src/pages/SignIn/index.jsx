import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {FormContainer, FormInput, FormBtn} from "./SignInElements.js"

import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [])

  const login = async (e) => {
    e.preventDefault();

    // Pull all inputs inside an object
    let item = {email, password}
    try {
      const result = await axios.post("http://localhost:8000/api/login", item)
      // console.log(result)
      localStorage.setItem("user", JSON.stringify(result.data))
      navigate("/");
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <>
      <h1>Sign In form</h1>
            <FormContainer>
                <FormInput
                    type="text"
                    placeholder="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <FormInput
                    type="password"
                    placeholder="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <FormBtn type="submit" onClick={login}>Submit</FormBtn>
            </FormContainer>
    </>
  );
};

export default SignIn;