import { useEffect, useState } from 'react';
import { useParams, useOutletContext, useLoaderData} from 'react-router-dom';
import MissingPage from './MissingPage';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { createCat } from '../user_utilities';

export default function HttpCatDeetsPage() {
 
   
   
    const [capture, setCapture] = useState(false);
    const {id} = useParams();
    const [httpCat, setHttpCat] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

   
   
    useEffect ( () => {
        const lookupId = id?.charAt(0) + id?.slice(1) || ""

    const fetchHttpCat = async () => {
        try {
            const response = `${lookupId}`
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


    
  
    return (
        <Card style = {{width:"18rem"}} id={`cat=${httpCat}-card`}>
            <Card.Body >
            <Card.Title className="text-center">HTTP Status {`${httpCat}`}</Card.Title>
            <Card.Img
            src={`https://http.cat/${httpCat}`}
             alt={httpCat}
             />
           
              
            <Stack>
                <Button 
                className="cat-action"
                variant={capture?"secondary":"warning"}
                onClick={()=>createCat({title:httpCat})}
                
                >
                    {capture?"Release Cat":"Collect Cat"}

                </Button>

            </Stack>
 
            </Card.Body>
            
        </Card>
    );
}

