import { MdDeleteForever } from 'react-icons/md';
import styled from 'styled-components';

function Note({id, text}) {
    return (
        <NoteItem>
            <span>{text}</span>
            <DeleteIcon />
        </NoteItem>
    )
}

const NoteItem = styled.article`
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
border-radius: 7px;
padding: 0.5rem;
min-height: 100px;
position: relative;
font-size: 0.9rem;
`

const DeleteIcon = styled(MdDeleteForever)`
font-size: 1.5rem;
position: absolute;
bottom: 5px;
right: 5px;
color: var(--aubergine);
`


export default Note;