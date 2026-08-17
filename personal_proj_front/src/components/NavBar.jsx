import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search/Search';

export default function NavBar({}) {
    return (
        <Navbar>
            <h1>HTTP What</h1>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/list">My List</Nav.Link>
            <Search/>
        </Navbar>
    )


}