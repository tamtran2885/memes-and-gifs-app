import React from "react";
import NavBar from "../NavBar";
import { HeaderContainer, SearchBar } from "./HeaderElements";

const Header = (props) => {
  const { searchWord, setSearchWord, searchMemes } = props;
  return (
    <>
      <HeaderContainer>
        <NavBar />
        <SearchBar>
          <h3>Search</h3>
          <input type="text" placeholder="Search" value={searchWord} onChange={(event) => setSearchWord(event.target.value)} />
          <button type="button" onClick={searchMemes}>Submit</button>
        </SearchBar>
      </HeaderContainer>
    </>
  );
};

export default Header;
