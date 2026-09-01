import { useEffect, useState } from 'react';
import { useParams, useOutletContext} from 'react-router-dom';
import MissingPage from './MissingPage';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';


import CatCard from '../components/Search/CatCard';

export default function HttpCatDeetsPage() {

    
    const [httpCat, setHttpCat] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    
    const [list, setList] = useState([]);
    

    const {id} = useParams();
    const [capture, setCapture] = useState(false);
    
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
            setErrorMessage(`No such cat with http code '${lookupId}' exists.`)
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
// Cannot add any cats to a list, yet, I need to 
// change my backend for that

    
  
    return (
        <Card style = {{width:"18rem"}} id={`cat=${httpCat}-card`}>
            <Card.Body>
            <Card.Title>HTTP Status {`${httpCat}`}</Card.Title>
            <Card.Img
            src={`https://http.cat/${httpCat}`}
             alt={httpCat}
             />
           
              
            <Stack>
                <Button
                variant={capture?"secondary":"warning"}
                //onCLick={()=>createCat({title:httpCat})}
                onClick={()=>setCapture(!capture)}
                >
                    {capture?"Release Cat":"Collect Cat"}
                </Button>
            </Stack>
 
            </Card.Body>
            
        </Card>
    );
}

