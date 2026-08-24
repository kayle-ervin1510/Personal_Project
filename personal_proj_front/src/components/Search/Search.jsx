import Container from './Container';
import Form from './Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [httpCat, setHttpCat] = useState(null);
    const [team] = useState([]);
    const navigate = useNavigate();


    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!httpCat) return;

        navigate(`/cat/${httpCat}`);
        setHttpCat("");
    }

    return (
        <>
            <Form
                handleSubmit={handleSubmit}
                setHttpCat={setHttpCat}
                httpCat={httpCat}
            />
            <Container  team={team}/>
        </>
    )
}

// took team={team} out of <Container />