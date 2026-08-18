import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { userAuth } from '../user_utilities';

const AuthForm = ({setUser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signup, setSignup] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        //Error also on the below await function
        const loggedInUser = await userAuth(email, password, signup)
        if (!loggedInUser) return 

        setUser(loggedInUser)
        setSignup(true)
        setEmail('')
        setPassword('')
        navigate('/home')
    }
// Some sort of issue on line 28, with onSubmit={handleSubmit}
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
                        label={signup ? "Ceate Account":"Login"}
                        checked={signup}
                        onChange={(e)=>setSignup(e.target.checked)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {signup ? "Create Account" : "Login"}
                </Button>
            </Form>
        </>
    )

}

export default AuthForm;