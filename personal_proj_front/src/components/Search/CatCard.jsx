import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';


export default function CatCard ({httpCat}){
    const [capture, setCapture] = useState(false);
    const imageSource = `https://http.cat/${httpCat}`

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

// httpCat is listed as undefined in CatCard
// as well as in all of the Search function
// but in HttpCatDeetsPage it's no longer undefined
