import { useRouteError, Link } from 'react-router-dom';

const ErrorPage =()=>{
    const error = useRouteError();
    // console.log(error)

    return (
        <>
            <h1>Woops! Some wires got crossed!</h1>
            <p> {error?.message ?? "Unknown Error"}</p>
            <Link to='/'>Return to Login Page</Link>
        </>
    );
};

export default ErrorPage