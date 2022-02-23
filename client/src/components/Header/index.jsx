import React from "react";
import NavBar from "../NavBar";
import { HeaderContainer, SearchBar, SearchTerm, SearchButton } from "./HeaderElements";

const Header = (props) => {
  const { searchWord, setSearchWord, searchMemes, openUploadModal } = props;
  return (
    <>
      <HeaderContainer>
        <NavBar openUploadModal={openUploadModal}/>
        <SearchBar>
          <SearchTerm type="text" placeholder="Search" value={searchWord} onChange={(event) => setSearchWord(event.target.value)} />
          <SearchButton type="button" onClick={searchMemes}><i class="fa fa-search"></i></SearchButton>
        </SearchBar>
      </HeaderContainer>
    </>
  );
};

export default Header;
