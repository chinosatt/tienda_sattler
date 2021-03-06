import CartWidget from "./CartWidget";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {NavLink, Link} from "react-router-dom" 

const NavBar = () =>
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand as={Link} to="/">
                <img
                    src="/image/logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Tienda Sattler"
                />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/categoria/perifericos">Periféricos</Nav.Link>
                <Nav.Link as={NavLink}  to="/categoria/componentes">Componentes PC</Nav.Link>
                <Nav.Link as={NavLink}  to="/categoria/gaming">Gaming</Nav.Link>
            </Nav>
            <CartWidget/>
        </Container>
    </Navbar>

export default NavBar