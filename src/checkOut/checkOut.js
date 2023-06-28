import React, { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navbar, Col, Container, Row, Nav,  Table, Form, Button, Carousel} from 'react-bootstrap'
import navlink1 from "../images/gender-neutral-user.png";
import navlink2 from "../images/appointment-reminders.png";
import logo from "../images/logo.svg";
import icon from "../images/icon.png"
import img1 from "../images/facebook-new.png"
import img2 from "../images/twitter--v3.png"
import img3 from "../images/instagram-new.png";
import img4 from "../images/linkedin.png";
import bannerimg from '../images/checkout2.jpg';
import bannerimg2 from '../images/checkout3.jpg';
import bannerimg3 from '../images/checkout4.jpg';
import './checkOut.css'

export default function CheckOut() {
    let [checkOut,setCheckOut] = useState(JSON.parse(sessionStorage.getItem('checkOut')))
    let [ subtotal,setSubtotal] = useState();
    let [ calTotal,setcalTotal] = useState(0)
    let  [ data, setData] = useState([])
    let  [ gender, setGender] = useState('')

    const inputElementName=useRef(null);
    const inputElementSurname=useRef(null);
    const inputElementAddress=useRef(null);  
    const inputElementPhoneNo=useRef(null);     

    const handleSumbit = () =>{
        const name =inputElementName.current.value;
        const surname =inputElementSurname.current.value;
        const address =inputElementAddress.current.value;
        const PhoneNumber =inputElementPhoneNo.current.value;
        const genders = gender
        console.log(name)
        data.push(name,surname,address,PhoneNumber,genders)
    alert(data)
    }
    console.log(data)
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
            <section className="banner">
                <Container className="text-center">
                    <div className="pt-4">
                        <h3 className="pb-3"><b>check Out Your Items <br/> Here!</b></h3>
                        <Carousel>
                            <Carousel.Item>
                                <img src={bannerimg} alt="bannerimg" className="img-thumbnail"/>
                            </Carousel.Item><Carousel.Item>
                                <img src={bannerimg2} alt="bannerimg" className="img-thumbnail"/>
                            </Carousel.Item><Carousel.Item>
                                <img src={bannerimg3} alt="bannerimg" className="img-thumbnail"/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Container>
            </section> 
            <h4  className="mt-3 mb-4 text-center dark "><strong>Check It Out!</strong></h4> 
            <Container>
                <Table className="table table-strip text-center">
                    <thead>
                        <tr>
                            <th><b>Item</b></th>
                            <th><b>Name</b></th>
                            <th><b>Price</b></th>
                            <th><b>Weight</b></th>
                            <th><b>Id</b></th>
                        </tr>
                    </thead>
                    {checkOut ? (checkOut.map((myCheckOutItem,index,checkOut)=>{
                        return(
                          <tbody key={index}>
                            <tr>
                                <td ><img src={myCheckOutItem.img} alt="mycheckoutImg" id="checkoutImgs" /></td>
                                <td><b className="text-success">{myCheckOutItem.name}</b></td>
                                <td><b className="text-muted">$ {subtotal= myCheckOutItem.price * myCheckOutItem.quantity }.00</b></td>
                                <td><b className="text-primary">{myCheckOutItem.weight}</b></td>
                                <td><b className="text-secondary">{myCheckOutItem.id}</b></td>
                                <td className="d-none">{calTotal += subtotal}</td>
                            </tr>
                          </tbody>  
                        )
                    })) : (<div><p className="text-center-danger">Your checkOut cart is empty!</p></div>)}
                </Table>
                <div className="text-center mb-4"><strong>Total: ${calTotal}.00</strong></div>
              <h4  className="mt-5 mb-3 text-center form-description "><b>Fill Up Now For Shipping!</b></h4> 
                <Form className="text-center bg-secondary p-4 pt-5 m-4 mb-5 rounded-2">
                    <h6 className="form-header"><b>Fill This Form For Successful Shipping!</b></h6>
                    <Row lg={2} md={2} sm={1} xs={1}>
                        <Col>
                            <Form.Label><b>Name:</b></Form.Label>
                            <Form.Control placeholder="Enter Your Name:" type="text" required ref={inputElementName}></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label><b>Surname:</b></Form.Label>
                            <Form.Control placeholder="Enter Your Surname:" type="text" required ref={inputElementSurname}></Form.Control>
                        </Col>
                        <Col className="mt-2">
                            <Form.Label><b>Address:</b></Form.Label>
                            <Form.Control placeholder="Enter Your Location Address:" type="text" required ref={inputElementAddress}></Form.Control>
                        </Col>
                        <Col className="mt-2">
                            <Form.Label><b>PhoneNumber:</b></Form.Label>
                            <Form.Control placeholder="Enter Your PhoneNumber:" type="number" required ref={inputElementPhoneNo}></Form.Control>
                        </Col>
                    </Row>
                    <Form.Label className="mt-2"><b>Gender:</b></Form.Label>
                    <div className="d-flex mb-2">
                        <Form.Select title="Gender" className="select" required onChange={(e) => setGender(e.target.value)}>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Custom</option>
                        </Form.Select>
                    </div>
                    <Button variant="outline-success" onClick={() => handleSumbit ()}>Done</Button>
                </Form>
            </Container>
            <hr/>
            <footer>
                <Container className="mb-4">
                    <Row>
                        <Col></Col>
                        <Col lg={2} md={3} sm={12} className="mt-3">
                            <div className="d-flex justify-content-center m-0">
                                <img src={icon} alt="logo" height={70} className=""/>
                            </div>
                            <p id="footer-note">Lorem ipsum dolor sit, amet consectetur adipisicing elit. voluptatem vel cupiditate architecto necessitatibus rem numquam?</p>
                            <div id="social-media-links" className="d-flex justify-content-center m-0">
                                <a href="https://facebook.com"><img src={img1} alt="our facebook-page" className="px-1"/></a>
                                <a href="https://twitter.com"><img src={img2} alt="our twitter-handle" className="px-1"/></a>
                                <a href="https://instagram.com"><img src={img3} alt="our instagram-handle" className="px-1"/></a>
                                <a href="https://linkedin.com"><img src={img4} alt="our linkedln-handle" className="px-1"/></a>
                            </div>
                        </Col>
                        <Col lg={2} md={3} xs="6" className="mt-3">                        
                            <h6 className="text-center"> Company Info</h6>
                            <ul className="mt-3">
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum.</li>
                            </ul>
                        </Col>
                        <Col lg={2} md={3} xs="6" className="mt-3">                        
                            <h6 className="text-center"> Quick Links</h6>
                            <ul className="mt-3">
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum.</li>
                            </ul>
                        </Col>
                        <Col lg={2} md={3} xs="6" className="mt-3">                        
                            <h6 className="text-center"> Hot Categories</h6>
                            <ul className="mt-3">
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum.</li>
                            </ul>
                        </Col>
                        <Col lg={2} md={3} xs="6" className="mt-3">                        
                            <h6 className="text-center"> Contact Us</h6>
                            <ul className="mt-3">
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum.</li>
                            </ul>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}