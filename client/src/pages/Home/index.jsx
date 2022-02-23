import React, { useState, useEffect } from "react";
import {HomeContainer, HomeListing} from "./HomeElements";
import MemeForm from "../../components/MemeForm";
import Header from "../../components/Header";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import Modal from "react-modal"

const Home = () => {
  const navigate = useNavigate();
  const [memes, setMemes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchWord, setSearchWord] = useState("");

   // Set state for upload modal
   const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const openUploadModal = () => {
    if (!localStorage.getItem("user")) {
      navigate("/sign-in");
    }
    setModalIsOpen(true);
  }

  const closeUploadModal = () => {
    setModalIsOpen(false);
  }

  return (
    <>
      <Header openUploadModal={openUploadModal} searchWord={searchWord} setSearchWord={setSearchWord} searchMemes={searchMemes}/>
      <HomeContainer >
        <Modal isOpen={modalIsOpen}>
          <MemeForm closeUploadModal={closeUploadModal}  getMemes={getMemes} categories={categories}/>
        </Modal>
        <HomeListing>
          {memes && memes.map(meme => (
            <div key={meme.id}>
              <p>{meme.title}</p>
              {/* <p>{meme.category.title}</p> */}
              {/* <p>{meme.user.email}</p> */}
              <Link to={`/meme/${meme.id}`}><img src={"http://localhost:8000/"+ meme.url} alt="meme" style={{ width: "100px", heigh: "100px"}}/></Link>
            </div>
          ))}
        </HomeListing>
      </HomeContainer>
    </>
  );
};

export default Home;