import { useOutletContext } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const AuthPage = () => {
    const {setUser} = useOutletContext()

    // On line 11, there is an issue getting the setUser
    return (
        <>
            <h1>Authentication Page</h1>
            <AuthForm setUser={setUser} />
        </>
    )
}

export default AuthPage;