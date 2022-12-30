import Note from "./Note"

function NotesList({notes}) {
    return (
        <div>
            {notes.map((note)=> (
                <Note id={note.id} text={note.text}/>
            ))}
        </div>
    )
}

export default NotesList