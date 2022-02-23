import styled from "styled-components";

export const Container = styled.div`
  background: #fafafa;
  margin: 3em auto;
  padding: 0 1em;
  max-width: 370px;
`;

export const ContainerTitle = styled.h1`
  text-align: center;
  padding: 1em 0;
`;

export const FormContainer = styled.form`
  padding: 0 1.5em;
`;

export const FormInput = styled.input`
  border-radius: 3px solid pink;
  background: #fafafa;
  border: none;
  border-bottom: 2px solid #e9e9e9;
  color: #666;
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  height: 50px;
  transition: border-color 0.3s;
  width: 100%;
  margin-bottom: 0.7em;

  &:focus {
    border-bottom: 2px solid #c0c0c0;
    outline: none;
  }
`;

export const FormBtn = styled.button`
  background: palevioletred;
  padding: 0.5rem 0;
  color: white;
  font-size: 18px;
  width: 100%;
  margin: 1em 0 0;
  border: 2px solid palevioletred;
  border-radius: 3px;

  &:hover {
    color: yellow;
  }
`;

export const FormFooter = styled.div`
  font-size: 1em;
  padding: 2em 0;
  text-align: center;
`;
