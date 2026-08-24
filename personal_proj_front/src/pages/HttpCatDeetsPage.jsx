import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import CatCard from '../components/Search/CatCard';
import MissingPage from './MissingPage';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

export default function HttpCatDeetsPage() {

    
    const [httpCat, setHttpCat] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const { team, catchCat, releaseCat, hasCat } = useOutletContext()
    const {id} = useParams();
    
    // const isCaught = httpCat ? hasCat(httpCat.id) : false
    // const canCatch = httpCat ? !isCaught && team.length < 10 : false


    useEffect ( () => {
        const lookupId = id?.charAt(0) + id?.slice(1) || ""

    const fetchHttpCat = async () => {
        try {
            const response = `${lookupId}`
            // originally response = `https://http.cat/${lookupId}`
            setHttpCat(response);
            setErrorMessage("");
        }catch (error) {
            setHttpCat(null);
            setErrorMessage(`No such cat with http code '${httpCat}' exists.`)
        }
        }
        fetchHttpCat();
   }, [id])


    if (errorMessage) {
        return <MissingPage message={errorMessage}/>
    }
    if (!httpCat) {
        return <MissingPage message={errorMessage}/>
    }

  
    return (
        <Card style = {{width:"16rem"}} id={`cat=${httpCat}-card`}>
            <Card.Body>
            <Card.Title>HTTP Status {`${httpCat}`}</Card.Title>
            <Card.Img
            src={`https://http.cat/${httpCat}`}
             alt={httpCat}
             />
           
            {/* 
            <Stack>
            <Button 
            className="cat-action"
            disabled={canCatch && !isCaught}
            onClick={() => (isCaught ? releaseCat(httpCat.id) : catchHttpCat(httpCat))}
            >
                {isCaught ? "Remove Cat" : "Add Cat"}
            </Button> 
            </Stack> */}
            <CatCard/>
            {/* 
            <Stack>
            <Button 
            className="cat-action"
            disabled={!canCatch && !isCaught}
            onClick={() => (isCaught ? releaseCat(httpCat.id): catchHttpCat(httpCat))}
            >
                {isCaught ? "Let go" : "Catch"}
            </Button>
            </Stack>
            */}
            </Card.Body>
        </Card>
    );
}

