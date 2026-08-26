import { useState } from 'react';
import { useOutletContext, useNavigate, useLoaderData } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import NoteDisplay from '../components/NoteDisplay';
import NoteForm from '../components/NoteForm';
import Count from '../components/Counter';
import { userLogout } from '../user_utilities';


const HomePage = ()=>{
    const {user, setUser} = useOutletContext()
    const [notes, setNotes] = useState(useLoaderData())
    const navigate = useNavigate()

    const addNote = (note) => {
        setNotes([...notes, note])
    }

    const rmNote = (rmNote) => {
        setNotes(notes.filter((note)=>(
            note.id !== rmNote.id
        )))
    }

    const updateNote = (editNote) => {
        setNotes(notes.map((note)=>(
            note.id === editNote.id ? editNote : note
        )))
    }

    const handleLogout = async()=>{
        setUser(await userLogout());
        navigate('/')
    }
    return (
        <>
            
            <h4>Welcome {user && user}: Here are your Notes! </h4>
            <button onClick={handleLogout}>Log Out</button>
            
            <Stack gap={2}>
                {/* <NavBar/> */}
                
                
                <NoteForm addNote={addNote}/>

                {notes.map((note)=>(
                    <NoteDisplay
                        key={note.id}
                        note={note}
                        rmNote={rmNote}
                        updateNote={updateNote}
                    />
                ))}
            </Stack>
            <Count/>
            
        </>
    )
}

export default HomePage;