import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {FormContainer, FormInput, FormBtn, Container, ContainerTitle, FormFooter} from "./SignInElements.js"
import { Link } from "react-router-dom";

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
      <Container>
        <ContainerTitle>Sign In</ContainerTitle>
        <FormContainer>
          <FormInput
            type="text"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />
        <FormInput
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
          <FormBtn type="submit" onClick={login}>SIGN IN</FormBtn>
          <FormFooter>If you don't have an account yet, please <Link to="/sign-up">Sign Up</Link></FormFooter>
        </FormContainer>
      </Container>
    </>
  );
};

export default SignIn;