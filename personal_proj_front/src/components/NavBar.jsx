import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search/Search';



export default function NavBar() {
    return (
        <Navbar id="nav">
            <h1>Navigation Bar</h1>
            <Nav.Link as={Link} to="/Clock">Clock</Nav.Link>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/list">My List </Nav.Link>
            <Nav.Link as={Link} to="/about">About Page</Nav.Link>
            <Search/>
            
        </Navbar>
    )


}