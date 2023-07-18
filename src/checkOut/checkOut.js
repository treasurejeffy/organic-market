import React, { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navbar, Col, Container, Row, Nav,  Table, Form, Button, Carousel, Modal} from 'react-bootstrap'
import navlink1 from "../images/gender-neutral-user.png";
import navlink2 from "../images/appointment-reminders.png";
import logo from "../images/logo.svg";
import bannerimg from '../images/checkout2.jpg';
import bannerimg2 from '../images/checkout3.jpg';
import bannerimg3 from '../images/checkout4.jpg';
import './checkOut.css'
import { Link } from "react-router-dom";

export default function CheckOut() {
    let [checkOut,setCheckOut] = useState(JSON.parse(sessionStorage.getItem('checkOut')))
    let [ subtotal,setSubtotal] = useState();
    const [show,setShow] = useState(false)
    let [ calTotal,setcalTotal] = useState(0)
    let  [ data, setData] = useState([])
    const  [ name, setName] = useState('')
    const  [ surname, setSurname] = useState('')
    const  [ address, setAddress] = useState('')
    const  [ phoneNo, setPhoneNo] = useState()
    const  [ gender, setGender] = useState('')
       

    const handleSumbit = () =>{
        data.push(name,surname,address,phoneNo,gender)
         setShow(true)
         console.log(data)
    }
    console.log(data)
    return(
        <>
            <Navbar expand="lg" sticky="top" id="navbar">
                <Container>                
                    <Navbar.Brand href="#home"><Link to={'/'}><img src={logo} alt="logo" id="logo"/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 outline-none"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>                   
                </Container>
            </Navbar>   
            <section className="banner">
                <Container className="text-center pb-5">
                    <div className="pt-5">
                        <h3 className="pb-3"><b>check Out Your Items <br/> Here!</b></h3>
                        <Carousel>
                            <Carousel.Item>
                                <img src={bannerimg} alt="bannerimg" className="img-thumbnail "/>
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
                <Row xl={2} lg={2} md={1} sm={1} xs={1}> 
                    <Col>
                        <section className="table-responsive mt-3">
                            <h4 className="text-center myItem mb-2">My Items</h4>
                            <Table className="table">                               
                                {checkOut ? (checkOut.map((myCheckOutItem,index,checkOut)=>{
                                    return(
                                    <tbody key={index}>
                                        <tr>
                                            <td ><img src={myCheckOutItem.img} alt="mycheckoutImg" id="checkoutImgs" /></td>
                                            <td><b className="text-secondary">{myCheckOutItem.name}</b></td>
                                            <td><b className="text-secondary">$ {subtotal= myCheckOutItem.price * myCheckOutItem.quantity }.00</b></td>
                                            <td><b className="text-secondary">{myCheckOutItem.weight}</b></td>
                                            <td><b className="text-secondary">{myCheckOutItem.id}</b></td>
                                            <td className="d-none">{calTotal += subtotal}</td>
                                        </tr>
                                    </tbody>  
                                    )
                                })) : (<div><p className="text-center-danger">Your checkOut cart is empty!</p></div>)}
                            </Table>
                        </section>
                        <div className="text-center mb-4"><strong>Total: ${calTotal}.00</strong></div>
                    </Col>
                    <Col>
                        <h4  className="mt-3 mb-3 text-center form-description ">Fill Up Now For Shipping!</h4> 
                        <section className="d-flex">
                            <Form className="myform px-4 py-3 mb-2 rounded-2 w-75" >
                                <Row lg={2} md={2} sm={1} xs={1} className="mt-4">
                                    <Col>
                                        <Form.Label><b className="text-darks px-2">Name:</b></Form.Label>
                                        <Form.Control placeholder="Enter Your Name:" type="text" required onChange={(e) => setName(e.target.value)} className="input"></Form.Control>
                                    </Col>
                                    <Col className="mt">
                                        <Form.Label><b className="text-darks px-2 ">Surname:</b></Form.Label>
                                        <Form.Control placeholder="Enter Your Surname:" type="text" required onChange={(e) => setSurname(e.target.value)} className="input"></Form.Control>
                                    </Col>
                                    <Col className="mt-3">
                                        <Form.Label><b className="text-darks px-2">Address:</b></Form.Label>
                                        <Form.Control placeholder="Enter Your Location Address:" type="text" required onChange={(e) => setAddress(e.target.value)} className="input"></Form.Control>
                                    </Col>
                                    <Col className="mt-3">
                                        <Form.Label><b className="text-darks px-2">PhoneNumber:</b></Form.Label>
                                        <Form.Control placeholder="Enter Your PhoneNumber:" type="number" required onChange={(e) => setPhoneNo(e.target.value)} className="input"></Form.Control>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <Form.Label className="mt-4 gender"><b>Gender:</b></Form.Label>
                                    <div className="d-flex mb-2">
                                        <Form.Select  className="select" required onChange={(e) => setGender(e.target.value)}>
                                            {/* <option>Gender</option>*/}
                                            <option>Female</option>
                                            <option>Male</option>
                                            <option>Custom</option>
                                        </Form.Select>
                                    </div>
                                    <Button variant="outline-success" className="px-5 bg-success mt-3 py-2 " onClick={() => handleSumbit ()}>Done</Button>
                                </div>
                            </Form>
                        </section>
                    </Col>
                </Row>
            </Container>
            <hr/>
            <footer>
                <p className="text-center">copyRight@ 2023!</p>
            </footer>
            <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-100w" aria-labelledby="example-modal-styling-title">
                <Modal.Header closeButton className="secondary">
                <Modal.Title id="example-custom-modal-styling-title" className="text-center">
                    <b className="nameofmodel">Hi {name.toUpperCase()} {surname.toUpperCase()}</b>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data ? (<p> <b>Thank you for your patronige, Pls remember that your goods will be delivered to you tomorrow morning and you will be called with this number ({phoneNo}) immediately we reach to this distination ({address})</b></p>) : ('fill it up') }
                </Modal.Body>
                <Modal.Footer>
                    <Link to={'/'} className="okbtn"><Button className="btnmodel" > OK</Button></Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}