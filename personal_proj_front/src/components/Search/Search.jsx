import Container from './Container';
import Form from './Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [httpCatId, setHttpCatId] = useState("");
    const[cats] = useState([]);
    const navigate = useNavigate();
   
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!httpCatId) return
        navigate(`/cat/${httpCatId}`);
        setHttpCatId("");
    }
    return (
        <>
            <Form
                handleSubmit={handleSubmit}
                setHttpCatId={setHttpCatId}
                httpCatId={httpCatId}
            />
            <Container  cats={cats}/>
        </>
    )
}

