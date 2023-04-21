import React, {Component} from "react";
import Banner from "./banner";
import DiscountCards from "./discount";
import OrganicProducts from "./Products";
import ClientSays from "./client";
import OurDrinks from "./drinks";
import FastFood from "./FastFood";
import NewsBlogs from "./NewsBlogs";
import NewsLetters from "./Newsletter";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './OrganicMarket.css';
import logo from "./images/logo.svg";
import navlink1 from "./images/gender-neutral-user.png";
import navlink2 from "./images/appointment-reminders.png";
import navlink3 from "./images/hearts.png";
import navlink4 from "./images/shopping-cart.png";
import inputsearch from "./images/search.png";
import banner from "./images/banner 1.png"

export default function Home() {
    
    return(
        <>
            <Navbar expand="lg" sticky="top" id="navbar">
                <Container>
                    <Navbar.Brand href="#home" ><img src={logo} alt="logo" id="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end" id="links">
                            <Nav.Link href="#home" title="You"><img src={navlink1} alt="link" id="link"/></Nav.Link>
                            <Nav.Link href="#link" title="Notification"><img src={navlink2} alt="link" id="link"/></Nav.Link>
                            <Nav.Link href="#home" title="Favourite Items"><img src={navlink3} alt="link" id="link"/></Nav.Link>
                            <Nav.Link href="#link" title="Cart"><img src={navlink4} alt="link" id="linke"/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="navbar-contd">
                <Container>
                    <Row>
                        <Col lg={7} sm={12} md={7}>
                            <Form className="flexContainer">
                                <input type="text" placeholder="Type Name Of Food Or Vegetables"  className="border-0  rounded-0" id="input"/>
                                <button type="submit"><img src={inputsearch} alt="search" height="20px"/> Search</button>
                            </Form>
                        </Col>
                    </Row>
                    <Row id="linkes">
                        <Col lg={7} sm="d-none" md={7}>
                        <Nav defaultActiveKey="/home" as="ul" className="ul">
                            <Nav.Item as="li">
                                <Nav.Link href="/home" className="home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavDropdown title="Shop" id="basic-nav-dropdown" className="li" menuVariant="dark">
                                    <NavDropdown.Item href="#action/3.1">Fruits</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"> Vegetables</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Foods</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Exit</NavDropdown.Item>
                               </NavDropdown>
                            </Nav.Item>
                            <Nav.Item as="li" >
                                <NavDropdown title="Page" id="basic-nav-dropdown" className="li" menuVariant="dark">
                                    <NavDropdown.Item href="#action/3.1">Discount Page</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Shop Now Page</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Features Page</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4"> Exit</NavDropdown.Item>
                               </NavDropdown>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavDropdown title="Blog" id="basic-nav-dropdown" className="dark"    menuVariant="dark">
                                    <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Cleansing parasites</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4"> Exit</NavDropdown.Item>
                               </NavDropdown>
                            </Nav.Item>
                            <Nav.Item as="li" >
                                <Nav.Link className="li">About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" >
                                <Nav.Link className="li">Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Banner/>
            <DiscountCards/>
            <OrganicProducts/>
            <ClientSays/>
            <OurDrinks/>
            <FastFood/>
            <NewsBlogs/>
            <NewsLetters/>
            <Footer/>
        </>
    )
}