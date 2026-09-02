import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { updateCat as updateCatRequest, deleteCat as deleteCatRequest } from '../user_utilities';

const CatDisplay = ({cat, rmHttpCat, addCat, setAddCat})=> {


    // const [addCat, setAddCat] = useState(cat.title)
 
    
    // const addCatHandle = async ()=> {
    //     const addedCat = await updateCatRequest(
    //         {
    //             id:cat.id,
    //             title: addCat
    //         }
    //     )
    //     if (addedCat){
    //         updateCat(addedCat)
    //         setAdd(true)            
    //     }
    // }

    const deleteCatHandle = async () => {
        const wasDeleted = await deleteCatRequest(cat.id)
        if (wasDeleted) {
            
           rmHttpCat(cat)
        }
    }

    return (
        <>
            <Stack>
                
                <>
                <Form.Control
                style={{width:"18rem"}}
                className="cat-auto"
                placeholder={cat.title}
                // value={addCat}
                // onChange={(e)=>setAddCat(e.target.value)}
                />
                
                
                
                    </>
                <>
                <img style={ {width:"18rem"} }src={`https://http.cat/${cat.title}`} alt={`HTTP Cat ${cat.title}`}/>
                {/* <Button variant="outline-primary" onClick={addCatHandle}>Add</Button> */}
                    <div className="vr"/>
                <div >{cat.title}</div>
                <div className="vr"/>
                <div className="p-2">
                    <Button variant="danger" onClick={deleteCatHandle}>
                        Delete
                    </Button>
                </div>
                </>
                
            </Stack>
        </>
    )
}

export default CatDisplay;