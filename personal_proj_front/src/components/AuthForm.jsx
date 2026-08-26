import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { userAuth } from '../user_utilities';

const AuthForm = ({setUser}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [create, setCreate] = useState(true)
    const navigate = useNavigate()
// changed signup to create, and setSignup to setCreate

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const loggedInUser = await userAuth(email, password, create)
        if (!loggedInUser) return 

        setUser(loggedInUser)
        setCreate(true)
        setEmail('')
        setPassword('')
        navigate('/home')
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type = "email"
                        placeholder = "Please enter email"
                        value = {email}
                        onChange = {(e)=>setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        Don't worry - your email is safe with us.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type = "password"
                        placeholder = "Password"
                        value = {password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label={create ? "Ceate Account":"Login"}
                        checked={create}
                        onChange={(e)=>setCreate(e.target.checked)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {create ? "Create Account" : "Login"}
                </Button>
            </Form>
        </>
    )

}

export default AuthForm;