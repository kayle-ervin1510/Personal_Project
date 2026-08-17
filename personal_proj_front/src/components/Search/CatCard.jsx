import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

export default function CatCard ({httpCat, canCatch}){
    const [capture, setCapture] = useState(false);
    const code = typeof httpCat === 'object' ? httpCat?.id : httpCat;
    // const imageSource = `http://http.cat/${Httpcode}`

    return (
        <Card style={ {width:"18rem"} } id={ `cat-${code}-card` }>
            <Card.Img
                variant="top"
                src={`http://http.cat/${code}`}
                alt={`HTTP Cat ${code}`}
            />
            <Card.Body>
                <Card.Text>
                    <Badge bg="secondary">HTTP Code #{code}</Badge>
                </Card.Text>
                <Card.Title>
                    Status {code}
                </Card.Title>
                <Stack gap={2}>
                    <Button
                    variant={capture?"secondary":"warning"}
                    onClick={()=>setCapture(!capture)}
                    disabled={!capture && canCatch === false}
                    >
                        {capture?"Release Cat":"Collect Cat"}
                    </Button>
                    <Button as={Link} to={`/cat/${code}`}>Details</Button>
                </Stack>
            </Card.Body>

        </Card>
    )
}