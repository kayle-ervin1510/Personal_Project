import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

export default function CatCard ({httpCat}){
    const [capture, setCapture] = useState(false);
    // const imageSource = `https://http.cat/${httpCat}`

    return (
        <Card style={ {width:"18rem"} } id={ `cat-${httpCat}-card` }>
            <Card.Img
                variant="top"
                imageSource={`https://http.cat/${httpCat}`}
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
                    <Button as={Link} to={`/cat/${httpCat.id}`}>Details</Button>
                </Stack>
            </Card.Body>

        </Card>
    )
}

// for HTTP Cats, the url usage is: https://http.cat/[status_code]