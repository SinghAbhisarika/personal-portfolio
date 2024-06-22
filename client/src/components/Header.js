import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import "./Header.css"
const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const common = {
        marginRight:15,
        fontSize:17,
        letterSpacing:".5px",
        color:"white",
        backgroundColor:"#21262c"
    }

    return (
        <>
            <Navbar variant="light" className='navbar'>
                <Container>
                <div className="hamburgur">
                        <i class="fa fa-bars inner" onClick={handleShow} aria-hidden="true" style={{cursor:"pointer",color:"white"}}></i>
                        <h2 className='mt-2 h2_right' style={{ color: "white" }}>
                            <NavLink to="/" style={{ textDecoration: "none",color: "white" }}>Abhisarika Singh</NavLink>
                        </h2>
                    </div>

                    <Nav className="nav">
                        <div className='mt-2'>
                            <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
                            <NavLink to="playlist" className="text-decoration-none" style={common}>Projects</NavLink>
                            <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
                        </div>

                    </Nav>
                </Container>

                        {/* side baar */}
                        <Offcanvas show={show} onHide={handleClose} classname="custom-offcanvas">
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='side_nav' onClick={() => setShow(false)}>
                            <NavLink to="/" className="side text-decoration-none  mb-2" style={common}>Home</NavLink>
                            <NavLink to="/about" className="side text-decoration-none  mb-2" style={common}>About</NavLink>
                            <NavLink to="/playlist" className="side text-decoration-none  mb-2" style={common}>Project</NavLink>
                            <NavLink to="/contact" className="side text-decoration-none  mb-2" style={common}>Contact</NavLink>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </>
    )
}

export default Header