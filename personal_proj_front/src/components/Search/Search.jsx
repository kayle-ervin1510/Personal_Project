import Container from './Container';
import Form from './Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [httpCat, setHttpCat] = useState("");
    const [team] = useState([]);
    // const navigate = useNavigate();


    const handleSubmit = (event) =>{
        event.preventDefault();
        // if(!httpCatName) return;

        // navigate(`/cat/${httpCatName}`);
        // setHttpCatName("");
    }

    return (
        <>
            <Form
                handleSubmit={handleSubmit}
                setHttpCat={setHttpCat}
                httpCat={httpCat}
            />
            <Container team={team}/>
        </>
    )
}

// swapped out list from list={list} to team.