import React, { useState, useEffect } from "react";
import {HomeContainer, HomeListing} from "./HomeElements";
import MemeForm from "../../components/MemeForm";
import Header from "../../components/Header";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [memes, setMemes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    getMemes();
    getCategories();
  }, [])

  const getCategories = async () => {
    try {
      const result = await axios.get("http://localhost:8000/api/getAllCategories")
      // console.log(result)
      setCategories(result.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  const getMemes = async () => {
    try {
      const result = await axios.get("http://localhost:8000/api/getAllMemes")
      // console.log(result)
      setMemes(result.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  const searchMemes = async () => {
    if (searchWord.trim()) {
      axios.get(`http://localhost:8000/api/search/${searchWord || "none"}`,).then((response) => {
      // console.log(response.data)
      setMemes(response.data);
      })
    } else {
      getMemes();
      navigate("/");
    }
  }

  return (
    <>
      <Header searchWord={searchWord} setSearchWord={setSearchWord} searchMemes={searchMemes}/>
      <HomeContainer >
        <MemeForm getMemes={getMemes} categories={categories}/>
        <HomeListing>
          <h3>Memes here</h3>
          {memes && memes.map(meme => (
            <div>
              <p>{meme.title}</p>
              {/* <p>{meme.category.title}</p> */}
              {/* <p>{meme.user.email}</p> */}
              <img src={"http://localhost:8000/"+ meme.url} alt="meme" style={{ width: "100px", heigh: "100px"}}/>
            </div>
          ))}
        </HomeListing>
      </HomeContainer>
    </>
  );
};

export default Home;