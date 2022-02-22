import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import {SportsContainer, SportsListing} from "./SportsElements";
import axios from "axios";

const Sports = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    getMemesBySports();
  }, [])

  const getMemesBySports = async () => {
    try {
      const result = await axios.get("http://localhost:8000/api/getMemesBySports")
      // console.log(result)
      setMemes(result.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <Header />
      <SportsContainer >
        <SportsListing>
          <h3>Memes here</h3>
          {memes && memes.map(meme => (
            <div>
              <p>{meme.title}</p>
              {/* <p>{meme.category.title}</p> */}
              {/* <p>{meme.user.email}</p> */}
              <img src={"http://localhost:8000/"+ meme.url} alt="meme" style={{ width: "100px", heigh: "100px"}}/>
            </div>
          ))}
        </SportsListing>
      </SportsContainer>
    </>
  );
};

export default Sports;