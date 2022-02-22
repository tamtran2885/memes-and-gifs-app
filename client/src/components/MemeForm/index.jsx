import React from "react";
import {FormContainer, FormInput, FormBtn} from "./MemeFormElements.js";

const MemeForm = () => {

    return (
        <div>
            <h1>Meme form</h1>
            <FormContainer>
                <FormInput
                    type="text"
                    placeholder="Title"
                    required
                />
                <FormInput
                    type="file"
                    required
                />
                <FormBtn type="submit">Submit</FormBtn>
            </FormContainer>
        </div>
    )
}

export default MemeForm;