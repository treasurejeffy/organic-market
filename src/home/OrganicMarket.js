import React, {useEffect, useState} from "react";
import Banner from "./banner";
import DiscountCards from "./discount";
import ClientSays from "./client";
import OurDrinks from "./drinks";
import FastFood from "./FastFood";
import NewsBlogs from "./NewsBlogs";
import NewsLetters from "./Newsletter";
import Footer from "./footer"
import OrganicProducts from "./product"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Navbar, NavDropdown, Nav, Row, Col, Form, Modal, Table,} from 'react-bootstrap'
import './OrganicMarket.css';
import logo from "../images/logo.svg";
import navlink1 from "../images/gender-neutral-user.png";
import navlink2 from "../images/appointment-reminders.png";
import navlink3 from "../images/hearts.png";
import navlink4 from "../images/shopping-cart.png";
import inputsearch from "../images/search.png";
import { Link } from "react-router-dom";



export default function Home() {
    const [show, setShow] = useState(false);
    let [myCart, setMyCart] = useState([]);
    let [myFavourite, setMyFavourite] = useState([]);
    let [ subtotal,setSubtotal] = useState();
    let [ subtotalWeight,setSubtotalWeight] = useState();
    let [ calTotal,setcalTotal] = useState(0)
    // const myCarts = JSON.parse(sessionStorage.getItem('mycart'))
    useEffect(()=>{
        setShow(false)
    },[])
    
    const handleCheckOut = () => {
        setShow(false)
        sessionStorage.setItem('checkOut', JSON.stringify(myCart))
    }

    const handleDecreaseQuantity = (itemId) => {
        console.log(itemId)
        const updatedItems = myCart.map(item => {
            if (itemId === item.id && item.quantity > 0 ) {
            return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setMyCart(updatedItems);
    };

    const handleIncreaseQuantity = (itemId) => {
        console.log(itemId)
        const updatedItems = myCart.map(item => {
            if (itemId === item.id) {
            return { ...item, quantity: item.quantity + 1};
            }
            return item;
        });
        setMyCart(updatedItems);
    };

    const handleRemove = (removeItem) => {
        console.log(removeItem)
        const filteredItem= myCart.filter(item => item !== removeItem);
        setMyCart(filteredItem)
        console.log(filteredItem)
    }
    console.log(myCart)

    let myfavour =JSON.parse(sessionStorage.getItem('myFavourite'))

    let mycarts =[JSON.parse(sessionStorage.getItem('myCart'))]

    
   return(
        <>
            <Navbar expand="lg" sticky="top" id="navbar">
                <Container>                
                    <Navbar.Brand href="#home" ><img src={logo} alt="logo" id="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav  id="links"  className="m-auto" >
                            <Nav.Link href="#/about" title="You"><img src={navlink1} alt="link" id="link"/></Nav.Link>
                            <Nav.Link href="#link" title="Notification"><img src={navlink2} alt="link" id="link"/></Nav.Link>
                            <Nav.Link href="./favourite"title="Favourite Items"><img src={navlink3} alt="link" id="link"/><span className="text-success ">{myFavourite.length &&( myfavour.length)}</span></Nav.Link>
                            <Nav.Link href="#link" title="Cart" onClick={() => setShow(true)} id="linke"><img src={navlink4} alt="link" id="link"/><span id="cartCount">{myCart.length}</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="navbar-contd">
                <Container>
                    <Row>
                        <Col lg={7} sm={12} md={7}>
                            <Form className="flexContainer">
                                <input type="text" placeholder="Search For Names Of Fruits Or Vegetables"  className="border-0  rounded-0" id="input"/>
                                <button type="submit"><img src={inputsearch} alt="search" height="20px"/> Search</button>
                            </Form>
                        </Col>
                    </Row>
                    <Row id="linkes">
                        <Col lg={8} sm="d-none" md={7}>
                        <Nav defaultActiveKey="#" as="ul" className="ul">
                            <Nav.Item as="li">
                                <Nav.Link href="#" className="home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavDropdown title="Shop" id="basic-nav-dropdown" className="li" menuVariant="dark">
                                    <NavDropdown.Item href='#/fruit'>Fruits</NavDropdown.Item>
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
                                <Nav.Link href="#" className="li">About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" >
                                <Nav.Link  href="#" className="li">Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Banner/>
            <DiscountCards setMyCart={setMyCart} myCart={myCart}/>
            <OrganicProducts setMyCart={setMyCart} myCart={myCart}   setMyFavourite={setMyFavourite} myFavourite={myFavourite}/>
            <ClientSays/>
            <OurDrinks/>
            <FastFood/>
            <NewsBlogs/>
            <NewsLetters/>
            <Footer/>
            <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-100w" aria-labelledby="example-modal-styling-title">
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title" className="text-center">
                    My Cart
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <section className="table-responsive">
                    <Table className="table table-responsive table-strip">
                        <thead>
                            <tr className="myCarthead">            
                                <th>Name</th>
                                <th>Weight</th>
                                <th>Price</th>    
                                <th>SubTotal</th>         
                                <th className="d-none"><b>&times;</b></th>         
                            </tr>
                        </thead>
                        {myCart ? (myCart.map((element,index, myCart)=>{                        
                            return (<tbody key={index}>
                                    <tr className="myCart">
                                        <td>{element.name} <img src={element.img} alt="item img" id="cartImgs"/> </td>
                                        <td>{subtotalWeight= element.weight[0] * element.quantity}<span>{element.weight[1]}</span></td>
                                        <td>${element.price}.00<span className="text-muted">x{element.quantity}</span><br/><span className="px-2 border" onClick={() => handleDecreaseQuantity(element.id)}>-</span>{element.quantity}<span className="px-2 border" onClick={() => handleIncreaseQuantity(element.id)} >+</span></td>
                                        <td> ${subtotal= element.price * element.quantity}.00</td>  
                                        <td className="d-none">{calTotal += subtotal} </td>
                                        <td><b onClick={()=>{handleRemove(element)}} className="border-secondary">&times;</b></td>
                                    </tr> 
                                </tbody>)
                        })): (<p>empty cart</p>)}  
                    </Table> 
                </section>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center m-0 text-mu">Total:  $ {calTotal}.00</Modal.Footer>
                <Modal.Footer><Link to={'/checkOut'} className="checkoutBtn"><Button className="bg-success" onClick={()=> handleCheckOut ()}  > Check Out </Button></Link></Modal.Footer>
            </Modal>
        </>
    )
}