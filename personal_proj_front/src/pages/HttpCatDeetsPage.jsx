import { useEffect, useState } from 'react';
import { useParams, useOutletContext, useLoaderData} from 'react-router-dom';
import MissingPage from './MissingPage';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { updateCat as updateCatRequest, deleteCat as deleteCatRequest, createCat as createCatRequest } from '../user_utilities';

import CatCard from '../components/Search/CatCard';
import { createCat } from '../user_utilities';

export default function HttpCatDeetsPage() {
 
    
    // const isCaught = httpCat ? hasCat(httpCat.id) : false
    // const canCatch = httpCat ? !isCaught && cats.length < 10 : false
   
   
    const [capture, setCapture] = useState(false);
    const {id} = useParams();
    const [cat, setCat] = useState(null);
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
            <Card.Body>
            <Card.Title>HTTP Status {`${httpCat}`}</Card.Title>
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

                {/* // className="cat-action"
                disabled={!canCatch && !isCaught}
                // onClick={() => (isCaught ? releaseCat(cat.id) : catchCat(cat))}
                //> 
                //     {isCaught ? "Release Cat":"Collect Cat"} */}
                </Button>
            </Stack>
 
            </Card.Body>
            
        </Card>
    );
}

