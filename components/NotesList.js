import Note from "./Note"
import AddNote from "./AddNote"
import styled from "styled-components"

function NotesList({notes, handleAddNote, handleDeleteNote}) {
    return (
        <NotesWrapper>
            {notes.map((note)=> (
                <Note id={note.id} text={note.text} handleDeleteNote={handleDeleteNote}/>
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </NotesWrapper>
    )
}

const NotesWrapper = styled.div`
margin-bottom: 4em;
`

export default NotesList