import Container from './Container';
import Form from './Form';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Search() {
    const [httpCatId, setHttpCatId] = useState(null);
    const [team] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
    

    const handleSubmit = (event) =>{
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
            <Container  team={team}/>
        </>
    )
}

// took team={team} out of <Container />