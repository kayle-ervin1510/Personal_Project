import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { updateCat as updateCatRequest, deleteCat as deleteCatRequest } from '../user_utilities';

const CatDisplay = ({cat, rmHttpCat, updateCat})=> {
    // const [cat, setCat] = useState(null);
    // const [cats, getCats] = useState(null);
    const [add, setAdd] = useState(true)
    const [addCat, setAddCat] = useState(cat.title)
    // const {id} = useParams()
    
    const addCatHandle = async ()=> {
        const addedCat = await updateCatRequest(
            {
                id:cat.id,
                title: addCat
            }
        )
        if (addedCat){
            updateCat(addedCat)
            setAdd(true)            
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
                
                {/* <img src={`https://http.cat/${cat}`} alt={`HTTP Cat ${cat}`}/> */}
                <Button variant="outline-primary" onClick={addCatHandle}>Add</Button>
                    <div className="vr"/>
                
                    </>
                :
                <>
                <div>{cat.title}</div>
                <div className="vr"/>
                <div className="p-2">
                    <Button variant="danger" onClick={deleteCatHandle}>
                        Delete
                    </Button>
                </div>
                </>
                }
            </Stack>
        </>
    )
}

export default CatDisplay;