import React from "react";
import FavouriteItems from "./favouriteItems";
import BannerFavourite from "./banner";
import FooterFavourite from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/logo.svg";
import navlink1 from "../images/gender-neutral-user.png";
import navlink2 from "../images/appointment-reminders.png";
import './favourite.css'

export default function Favourite() {
    return(
       <>
            <Navbar expand="lg" sticky="top" id="navbar">
                <Container>                
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" id="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 outline-none"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="me-auto"  >
                        <Nav className=" margin">
                            <Nav.Link href="./" title="You"><img src={navlink1} alt="link" id="link"/></Nav.Link>
                            <Nav.Link href="#link" title="Notification"><img src={navlink2} alt="link" id="link"/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>                   
                </Container>
            </Navbar>            
            <BannerFavourite/>
            <FavouriteItems/>
            <hr/>
            <FooterFavourite/>
       </>
    )
}