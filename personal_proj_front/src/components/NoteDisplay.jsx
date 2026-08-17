import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import { updateNote as updateNoteRequest, deleteNote as deleteNoteRequest } from '../user_utilities';

const NoteDisplay = ({note, rmNote, updateNote}) => {
    const [edit, setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(note.title)

    const editNoteHandle = async ()=> {
        const editedNote = await updateNoteRequest(
            {
                id:note.id,
                title: editTitle
            }
        )
        if(editedNote){
            updateNote(editedNote)
            setEdit(false)
        }
    }

    const deleteNoteHandle = async ()=> {
        const wasDeleted = await deleteNoteRequest(note.id)
        if (wasDeleted){
            rmNote(note)
        }
    }

    return (
        <>
            <Stack direction="horizontal" gap={3} style={{border:"solid black 1vmin"}}>
                {edit ?
                <>
                    <Form.Control
                    className="me-auto"
                    placeholder={note.title}
                    value={editTitle}
                    onChange={(e)=>setEditTitle(e.target.value)}
                    />
                    <Button variant="outline-primary" onClick={editNoteHandle}>Submit</Button>
                        <div className="vr" />
                    <Button variant="outline-secondary" onClick={()=>[setEdit(!edit), setEditTitle(note.title)]}>Cancel</Button>
                </>
                :
                <>
                    <div className="p-2">{note.title}</div>
                    <div className="p-2 ms-auto">
                        <Button variant='warning' onClick={()=>setEdit(!edit)}>
                            Edit
                        </Button>
                    </div>
                    <div className="vr"/>
                    <div className="p-2">
                        <Button variant='danger' onClick={deleteNoteHandle}>
                            Delete
                        </Button>
                    </div>
                </>
                }
            </Stack>
        </>
    )
}

export default NoteDisplay