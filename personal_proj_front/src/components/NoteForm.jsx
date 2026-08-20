import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createNote } from '../user_utilities'

function NoteForm({addNote}) {
    const [noteTitle, setNoteTitle] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newNote = await createNote({title: noteTitle})
        if (newNote){
            addNote(newNote)
        }
        setNoteTitle('')
    }
    return (
        <>
            <Form onSubmit={handleSubmit} style={{width:"100%", display:"flex", justifyContent:"space-around"}}>
                <Form.Control 
                type="text"
                placeholder='Input a new note here!'
                value={noteTitle}
                onChange={(e)=>setNoteTitle(e.target.value)}
                />
                <Button type='submit'>
                    Create
                </Button>
            </Form>
        </>
    );
}

export default NoteForm;