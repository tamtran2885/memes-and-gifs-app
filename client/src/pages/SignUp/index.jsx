import React, { useState, useEffect } from "react";
import {FormContainer, FormBtn, FormInput} from "./SignUpElements";
import {useNavigate} from "react-router-dom";

import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(()=> {
    if (localStorage.getItem("user")) {
      navigate("/")
    }
  }, [])

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    // Pull all inputs inside an object
    let item = {name, email, password}
    try {
      const result = await axios.post("http://localhost:8000/api/register", item)
      // console.log(result)
      localStorage.setItem("user", JSON.stringify(result.data))
      navigate("/");
    } catch (e) {
      console.log(e.message)
    }
  }
    
    return (
    <>
      <h1>Sign Up form</h1>
            <FormContainer>
                <FormInput
                    type="text"
                    placeholder="username"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
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
                <FormBtn onClick={signUp} type="submit">Submit</FormBtn>
            </FormContainer>
    </>
  );
};

export default SignUp;