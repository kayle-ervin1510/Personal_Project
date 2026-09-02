import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';


export default function CatCard (){
    const [capture, setCapture] = useState(false);
    const [httpCat, setHttpCat] = useState(null);
    const [errorMessage, setErrorMessage] = useState("")
    const {id} = useParams();
   
    
    useEffect( () => {
        const findId = id?.charAt(0) + id?.slice(1) || ""

        const fetchHttpCat = async () => {
            try{
                const response = `${findId}`
                setHttpCat(response);
                setErrorMessage("");
            }catch (error) {
                setHttpCat(null);
                setErrorMessage(`No such cat with http code '${findId}' exists!`)
            }
        }
        fetchHttpCat();
    }, [id])
   
    return (
        <Card style={ {width:"18rem"} } id={ `cat-${httpCat}-card` }>
          
            <Card.Body>
                
                <Card.Title className="text-center">
                    {/* Status Code: {`${httpCat}`} */}
                </Card.Title>
                  <Card.Img
                variant="top"
                src={`https://http.cat/${httpCat}`}
                alt={`HTTP Cat ${httpCat}`}
            />
                <Stack gap={2}>
                    <Button
                    variant={capture?"secondary":"warning"}
                    onClick={()=>setCapture(!capture)}
                    >
                        {capture?"Release Cat":"Collect Cat"}
                    </Button>
                </Stack>
            </Card.Body>

        </Card>
    )
}
