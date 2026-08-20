import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search/Search';
// I don't think I need an httpCatName or setHttpCatName inside the NavBar
export default function NavBar() {
    return (
        <Navbar>
            <h1>HTTP What</h1>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/list">My List</Nav.Link>
            {/* issue in line 13, stemming from container, line ten */}
            {/* <Search/> */}
        </Navbar>
    )


}