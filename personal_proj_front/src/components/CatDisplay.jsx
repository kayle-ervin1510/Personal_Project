import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
                <Card style={{width:"18rem"}}>
                
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
                <div className="card-footer d-flex">
                    <Button type="button" className="mx-auto btn btn-danger" onClick={deleteCatHandle}>
                        Delete
                    </Button>
                </div>
                </>
                </Card>
            </Stack>
        </>
    )
}

export default CatDisplay;