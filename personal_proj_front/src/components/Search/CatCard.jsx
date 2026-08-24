import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

export default function CatCard ({httpCat}){
    const [capture, setCapture] = useState(false);
    // const imageSource = `https://http.cat/${httpCat}`
    
    return (
        <Card style={ {width:"18rem"} } id={ `cat-${httpCat}-card` }>
          
            <Card.Body>
                
                <Card.Title>
                    Status Code: {`${httpCat}`}
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

// for HTTP Cats, the url usage is: https://http.cat/[status_code]
// httpCat is a stand-in for the status code
// so .id won't be of use, because it has no call for "id"
// I need to call and list the image as an image
// not using id, or name
// the stand-in for the http status code is undefined, or null
// if I put null in the useState for httpCat
// I need to figure out how to make it equal to the status codes
// the actual status codes