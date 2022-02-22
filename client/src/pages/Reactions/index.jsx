import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import {ReactionsContainer, ReactionsListing} from "./ReactionsElements";
import axios from "axios";

const Reactions = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    getMemesByReactions();
  }, [])

  const getMemesByReactions = async () => {
    try {
      const result = await axios.get("http://localhost:8000/api/getMemesByReactions")
      // console.log(result)
      setMemes(result.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <Header />
      <ReactionsContainer >
        <ReactionsListing>
          <h3>Memes here</h3>
          {memes && memes.map(meme => (
            <div>
              <p>{meme.title}</p>
              {/* <p>{meme.category.title}</p> */}
              {/* <p>{meme.user.email}</p> */}
              <img src={"http://localhost:8000/"+ meme.url} alt="meme" style={{ width: "100px", heigh: "100px"}}/>
            </div>
          ))}
        </ReactionsListing>
      </ReactionsContainer>
    </>
  );
};

export default Reactions;