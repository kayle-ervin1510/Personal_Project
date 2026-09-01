import { useEffect, useState } from 'react';
import { useParams, useOutletContext, useLoaderData} from 'react-router-dom';
import MissingPage from './MissingPage';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
// import { updateCat as updateCatRequest, deleteCat as deleteCatRequest, createCat as createCatRequest } from '../user_utilities';

import CatCard from '../components/Search/CatCard';
import { createCat } from '../user_utilities';

export default function HttpCatDeetsPage() {

    
    // const [httpCat, setHttpCat] = useState(null);
    
    
    // const {id} = useParams();
    
    
    // const isCaught = httpCat ? hasCat(httpCat.id) : false
    // const canCatch = httpCat ? !isCaught && cats.length < 10 : false
   
   // I think I'd have this here. 
   // Looking NoteForm and NoteDisplay, this seems to fit
   // i.e. ListPage has the "HomePage" for my adding cats, removing cats, etc
   // while HttpCatDeetsPage has the "NoteDisplay" which is the const handleing


    // const [add, setAdd] = useState(false)
    // const [addCat, setAddCat] = useState(cat.title)
    
    // const addCatHandle = async ()=> {
    //     const addedCat = await updateCatRequest(
    //         {
    //             id:cat.id,
    //             title: addCat
    //         }
    //     )
    //     if (addedCat){
    //         updateCatList(addedCat)
    //         setAdd(false)            
    //     }
    // }

    // const deleteCatHandle = async () => {
    //     const wasDeleted = await deleteCatRequest(cat.id)
    //     if (wasDeleted) {
    //        rmCat(cat)
    //     }
    // }
    // new code below, old code above
    const [capture, setCapture] = useState(false);
    const {id} = useParams();
    const [cat, setCat] = useState(null);
    const [httpCat, setHttpCat] = useState(null);
    const [cats, setCats] = useState(useLoaderData());
    const [errorMessage, setErrorMessage] = useState("");

    const addHttpCat = (cat) => {
        setCats([...cats, cat])
    }

    // is rmHttpCat supposed to be deleteCat or deleteCatRequest?
    const rmHttpCat = (rmHttpCat) => {
        setCats(cats.filter((cat)=>(
            cat.id != rmHttpCat.id
        )))
    }

    // maybe supposed to be updateCatRequest
    const updateCat = (editTeam) => {
        setCats(cats.map((cat)=> (
            cat.id === editTeam.id ? editTeam : cat
        )))
    }
    //

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newList = await createCat({title: httpCat})
        if (newList) {
            addHttpCat(newList)
        }
        setHttpCat('')
    }
   
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

