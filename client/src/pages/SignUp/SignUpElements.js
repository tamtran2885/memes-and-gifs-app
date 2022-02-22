import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
`;

export const FormInput = styled.input`
    border-radius: 3px solid pink;
`;

export const FormBtn = styled.button`
  background: palevioletred;
  color: white;

  margin: 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  &:hover {
    color: yellow;
  }
`;