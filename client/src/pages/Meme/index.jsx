import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import {MemeContainer, MemeInfo} from "./MemeElements";
import axios from "axios";
import {useNavigate, useLocation} from "react-router-dom";

const Meme = () => {
  const [meme, setMeme] = useState("");
  const { pathname } = useLocation();

  // GET ID FROM URL 
  const getMemeId = () => {
    const pathSplit = pathname.split("/");
    return pathSplit[pathSplit.length - 1];
  };

  useEffect(() => {
    getMeme();
  }, [])

  const getMeme = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/api/getMemeById/${getMemeId()}`)
      // console.log(result)
      setMeme(result.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  console.log(meme)

  return (
    <>
      <Header />
      <MemeContainer >
        <MemeInfo>
          <h3>Meme here</h3>
          <h4>Title: {meme && meme.title}</h4>
          <h5>Type: {meme && meme.category.title}</h5>
          <img src={"http://localhost:8000/"+ meme.url} alt="meme" style={{ width: "100px", heigh: "100px"}}/>
          <p>Copy Link: <span>http://localhost:8000/{meme.url}</span></p>
        </MemeInfo>
      </MemeContainer>
    </>
  );
};

export default Meme;