import React from "react";
import {HomeContainer} from "./HomeElements";
import MemeForm from "../../components/MemeForm";
import NavBar from "../../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <HomeContainer >
        <h1>Home</h1>
        <MemeForm />
      </HomeContainer>
    </>
  );
};

export default Home;