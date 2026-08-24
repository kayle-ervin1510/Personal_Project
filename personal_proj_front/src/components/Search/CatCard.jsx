import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';




// {httpCat} <-- when this is within the parameters of the function
// status code comes back as undefined
// whereas if I set httpCat as a const variable set to null
// it comes back as null
// better than undefined, I suppose
export default function CatCard (){
    const [capture, setCapture] = useState(false);
    const [httpCat] = useState(null)
    const imageSource = `https://http.cat/${httpCat}`;
  
   
    return (
        <Card style={ {width:"18rem"} } id={ `cat-${httpCat}-card` }>
          
            <Card.Body>
                
                <Card.Title>
                    Status Code: {`${httpCat}`}
                </Card.Title>
                  <Card.Img
                variant="top"
                src={imageSource}
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
// FIX THIS SO IT"S LIKE THE HTTPCATDEETSPAGE

// httpCat, as the status code, is listed as undefined
// but in HttpCatDeetsPage, it's listed as: "https://http.cat/500"
