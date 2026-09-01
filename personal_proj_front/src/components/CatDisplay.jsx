import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { updateCat as updateCatRequest, deleteCat as deleteCatRequest, createCat as createCatRequest } from '../user_utilities';


    const [cat, setCat] = useState(null);
    const [cats, getCats] = useState(null);
    const [add, setAdd] = useState(false)
    const [addCat, setAddCat] = useState(cat.title)
    const {id} = useParams()
    
    const addCatHandle = async ()=> {
        const addedCat = await updateCatRequest(
            {
                id:cat.id,
                title: addCat
            }
        )
        if (addedCat){
            updateCat(addedCat)
            setAdd(false)            
        }
    }

    const deleteCatHandle = async () => {
        const wasDeleted = await deleteCatRequest(cat.id)
        if (wasDeleted) {
            // previously rmCat
           rmHttpCat(cat)
        }
    }

    return (
        <>
            <Stack>
                {add ?
                <>
                <Form.Control
                className="cat-auto"
                placeholder={cat.title}
                value={addCat}
                onChange={(e)=>setAddCat(e.target.value)}
                />
                <Button></Button>
                </>
                :
                <>
                </>
                }
            </Stack>
        </>
    )