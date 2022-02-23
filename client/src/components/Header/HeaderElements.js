import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: yellow;
`;

export const SearchBar = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  background: #000;
  padding: 0.5rem calc((100vw - 970px) / 2);
`;

export const SearchTerm = styled.input`
  width: 100%;
  border: 3px solid #fff;
  border-right: none;
  padding: 20px;
  height: 25px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
  font-size: 20px;

  &:focus {
    color: #00b4cc;
  }
`;

export const SearchButton = styled.button`
width: 50px;
height: 46px;
border: 1px solid #00B4CC;
background: #00B4CC;
text-align: center;
color: #fff;
border-radius: 0 5px 5px 0;
cursor: pointer;
font-size: 20px;
  }
`;
