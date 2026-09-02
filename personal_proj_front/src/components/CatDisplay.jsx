import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { updateCat as updateCatRequest, deleteCat as deleteCatRequest } from '../user_utilities';

const CatDisplay = ({cat, rmHttpCat, addCat, setAddCat})=> {



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
                
                />
                
                
                
                    </>
                <>
                <img style={ {width:"18rem"} }src={`https://http.cat/${cat.title}`} alt={`HTTP Cat ${cat.title}`}/>
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