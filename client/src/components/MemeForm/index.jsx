import React, { useState } from "react";
import {FormContainer, FormInput, FormBtn, FormSelect} from "./MemeFormElements.js";
import axios from "axios";

const MemeForm = ({getMemes, categories}) => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [category, setCategory] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));

    const addMeme = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("url", file);
            formData.append("category_id", category);
            formData.append("user_id", user.id);
            // console.log(Object.fromEntries(formData.entries()));

            await axios.post("http://localhost:8000/api/addMeme", formData)
            getMemes();
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div>
            <h1>Meme form</h1>
            <FormContainer>
                <FormInput
                    type="text"
                    placeholder="Title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <FormInput
                    type="file"
                    required
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <FormSelect onChange={(e) => setCategory(e.target.value)} required>
                    <option>Please choose one category</option>
                    {categories && categories.map((option) => (
                        <option value={option.id} key={option.id}>{option.title}</option>
                    ))}
                </FormSelect>
                <FormBtn type="submit" onClick={addMeme}>Submit</FormBtn>
            </FormContainer>
        </div>
    )
}

export default MemeForm;