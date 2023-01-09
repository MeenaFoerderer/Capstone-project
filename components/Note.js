import { MdDeleteForever } from 'react-icons/md';
import styled from 'styled-components';
import { NoteItem } from './StyledNoteItem';

function Note({id, text, handleDeleteNote}) {
    return (
        <NoteItem>
            <span>{text}</span>
            <DeleteIcon onClick={() => handleDeleteNote(id)}/>
        </NoteItem>
    )
}

const DeleteIcon = styled(MdDeleteForever)`
font-size: 1.5rem;
position: absolute;
bottom: 5px;
right: 5px;
color: var(--aubergine);
cursor: pointer;
`


export default Note;