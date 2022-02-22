import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import NavBar from "../../components/NavBar";

const User = () => {
  const navigate = useNavigate();
  
  useEffect(()=> {
    if (!localStorage.getItem("user")) {
      navigate("/sign-in")
    }
  }, [])

  return (
    <>
      <NavBar />
      <h1>User</h1>
    </>
  );
};

export default User;