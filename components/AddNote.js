import { useState } from "react"
import styled from "styled-components"
import { NoteItem } from "./StyledNoteItem"

function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('')
        }
    }

    return (
        <NoteItem>
            <NoteTextArea 
            rows='8' 
            cols='10' 
            placeholder="Type to add a note..."
            value={noteText}
            onChange={handleChange}></NoteTextArea>
            <NoteFooter>
                <small>{characterLimit - noteText.length} Remaining</small>
                <button onClick={handleSaveClick}>Save</button>
            </NoteFooter>
        </NoteItem>
    )
}

const NoteTextArea = styled.textarea`
width: 100%;
border: none;
resize: none;

&:focus {
    outline: none;
}
`

const NoteFooter = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
export default AddNote