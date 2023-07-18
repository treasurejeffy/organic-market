import React, { useState } from "react";
import FavouriteItems from "./favouriteItems";
import BannerFavourite from "./banner";
import FooterFavourite from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {Modal, Button,Table} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/logo.svg";
import navlink1 from "../images/gender-neutral-user.png";
import navlink2 from "../images/appointment-reminders.png";
import cartnav from "../images/shopping-cart.png";

import './favourite.css'
import { Link } from "react-router-dom";

export default function Favourite() {
    const [myCartFromFavourite, setMyCartFromFavourite] =useState([])
    const [show, setShow] = useState(false);
    let [ subtotal,setSubtotal] = useState();
    let [ calTotal,setcalTotal] = useState(0)

    const handleCheckOut = () => {
        setShow(false)
        sessionStorage.setItem('checkOut', JSON.stringify(myCartFromFavourite))
    }

    const handleDecreaseQuantity = (itemId) => {
        console.log(itemId)
        const updatedItems = myCartFromFavourite.map(item => {
            if (itemId === item.id && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setMyCartFromFavourite(updatedItems);
    };

    const handleIncreaseQuantity = (itemId) => {
        console.log(itemId)
        const updatedItems = myCartFromFavourite.map(item => {
            if (itemId === item.id) {
            return { ...item, quantity: item.quantity + 1};
            }
            return item;
        });
        setMyCartFromFavourite(updatedItems);
    };

    const handleRemove = (removeItem) => {
        console.log(removeItem)
        const filteredItem= myCartFromFavourite.filter(item => item !== removeItem);
        setMyCartFromFavourite(filteredItem)
        console.log(filteredItem)
    }
        console.log(myCartFromFavourite)
    return(
       <>
            <Navbar expand="lg" sticky="top" id="navbar">
                <Container>                
                    <Navbar.Brand href="#home"><Link to={'/'}><img src={logo} alt="logo" id="logo"/></Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 outline-none"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="me-auto"  >
                        <Nav className=" margin">
                            <Nav.Link title="You"> <Link to={'/'}><img src={navlink1} alt="link" id="link"/></Link></Nav.Link>
                            <Nav.Link  title="Notification"><img src={navlink2} alt="link" id="link"/></Nav.Link>
                            <Nav.Link  title="Cart" onClick={() => setShow(true)}><img src={cartnav} alt="link" id="link" /><span className=" text-white rounded-5 bg-primary px-2 py-1" >{myCartFromFavourite.length}</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>                   
                </Container>
            </Navbar>            
            <BannerFavourite/>
            <FavouriteItems myCartFromFavourite={myCartFromFavourite} setMyCartFromFavourite={setMyCartFromFavourite}/>
            <hr/>
            <FooterFavourite/>
            <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-100w" aria-labelledby="example-modal-styling-title">
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title" className="text-center">
                    My Favourite Cart
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <section className="table-responsive">
                    <Table className="table  table-center">
                        <thead>
                            <tr className="myCarthead">            
                                <th>Name</th>
                                <th>Weight</th>
                                <th>Price</th>    
                                <th>SubTotal</th>         
                                <th><b>&times;</b></th>         
                            </tr>
                        </thead>
                        {myCartFromFavourite ? (myCartFromFavourite.map((element,index, myCart)=>{                        
                            return (<tbody key={index}>
                                    <tr className="myCart">
                                        <td>{element.name} <img src={element.img} alt="item img" id="cartImgs"/> </td>
                                        <td>{element.weight[0] * element.quantity}<span>{element.weight[1]}</span></td>
                                        <td>${element.price}.00<span className="text-muted">x{element.quantity}</span><br/><span className="px-2 border" onClick={() => handleDecreaseQuantity(element.id)}>-</span>{element.quantity}<span className="px-2 border" onClick={() => handleIncreaseQuantity(element.id)} >+</span></td>
                                        <td> ${subtotal= element.price * element.quantity}.00</td>  
                                        <td className="d-none">{calTotal += subtotal} </td>
                                        <td><b onClick={()=>{handleRemove(element)}} className="border-danger">&times;</b></td>
                                    </tr> 
                                </tbody>)
                        })): (<p>empty cart</p>)}  
                    </Table> 
                </section>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center m-0 text-mu">Total:  $ {calTotal}.00</Modal.Footer>
                <Modal.Footer><Link to={'/checkOut'} className="checkoutBtn"><Button  variant="outline-success"   className="btncheckout" onClick={()=> handleCheckOut ()}> Check Out </Button></Link></Modal.Footer>
            </Modal>
       </>
    )
}