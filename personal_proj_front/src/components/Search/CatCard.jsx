import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

export default function CatCard ({httpCat}){
    const [capture, setCapture] = useState(false);
    // const imageSource = `https://http.cat/${httpCat}`

    return (
        <Card style={ {width:"18rem"} } id={ `cat-${httpCat}-card` }>
            <Card.Img
                variant="top"
                src={`https://http.cat/${httpCat}`}
                alt={`HTTP Cat ${httpCat}`}
            />
            <Card.Body>
                <Card.Text>
                    <Badge bg="secondary">HTTP Code #{httpCat}</Badge>
                </Card.Text>
                <Card.Title>
                    Status {httpCat}
                </Card.Title>
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