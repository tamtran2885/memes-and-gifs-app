import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import {UserContainer, UserListing, UserInfo} from "./UserElements";
import axios from "axios";

const User = () => {
  const [memes, setMemes] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getMemesByUser();
  }, [])

  const getMemesByUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/api/getMemesByUser/${user.id}`)
      // console.log(result)
      setMemes(result.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <Header />
      <UserContainer >
        <UserInfo>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
        </UserInfo>
        <UserListing>
          <h3>Memes here</h3>
          {memes && memes.map(meme => (
            <div>
              <p>{meme.title}</p>
              {/* <p>{meme.category.title}</p> */}
              {/* <p>{meme.user.email}</p> */}
              <img src={"http://localhost:8000/"+ meme.url} alt="meme" style={{ width: "100px", heigh: "100px"}}/>
            </div>
          ))}
        </UserListing>
      </UserContainer>
    </>
  );
};

export default User;