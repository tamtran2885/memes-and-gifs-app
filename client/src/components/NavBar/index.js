import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const NavBar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>MeMes</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/reactions" activeStyle>
            Reactions
          </NavLink>
          <NavLink to="/entertainments" activeStyle>
            Entertainments
          </NavLink>
          <NavLink to="/sports" activeStyle>
            Sports
          </NavLink>
        </NavMenu>
        <NavBtn>Upload</NavBtn>
        <NavBtn>
          <NavBtnLink to="/user">{user ? user.name : "Hi Guest!"}</NavBtnLink>
        </NavBtn>
        {!localStorage.getItem("user") ? (
          <>
            <NavBtn>
              <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
            </NavBtn>
          </>
        ) : (
          <>
            <NavBtn onClick={logOut}>Log Out</NavBtn>
          </>
        )}
      </Nav>
    </>
  );
};

export default NavBar;
