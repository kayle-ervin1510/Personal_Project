import Container from './Container';
import Form from './Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [httpCatName, setHttpCatName] = useState("");
    const [list] = useState();
    const navigate = useNavigate();


    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!httpCatName) return;

        navigate(`/cat/${httpCatName}`);
        setHttpCatName("");
    }

    return (
        <>
            <Form
                handleSubmit={handleSubmit}
                setHttpCatName={setHttpCatName}
                httpCatName={httpCatName}
            />
            {/* line 28 has an issue, linked back to container.jsx line 10 */}
            <Container httpList={list}/>
        </>
    )
}
