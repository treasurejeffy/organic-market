import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './OrganicMarket.css';
import oranges from "../images/orange.png";
import peppermints from "../images/peppermint (2).png"


export default function DiscountCards () {
    let [productDiscount,setproductDiscount]=useState([]);
    let [discount,setDiscount]=useState([]);

    discount=[       
        {
            id:1,
            name:'Orange',
            img:oranges,
            price: 16,
            weight:'500 Gm',
            quantity:1
        },
        {
            id:2,
            name:'Peppermint',
            img:peppermints,
            price: 16,
            weight:'800 Gm',
            quantity:1
        }
    ] 

    let myDiscount=[]

    const handleClick=(discountItem)=>{
        console.log(discountItem);            
        myDiscount.push(discountItem)
        localStorage.setItem('myItems',JSON.stringify(myDiscount))
    }

    return(
        <>
            <section id="discountCards">
                <Container>
                    <div id="discountHeader"><h3>Order Now! and Get</h3><h1>50% Off</h1></div>
                    <Row lg={2} md={2} sm={1}>
                        {discount.map((items, index, discount)=>{
                            return(                            
                                <Card className="border-0" key={items.id}>                            
                                    <div className="border p-4">
                                        <Row>
                                            <Col id="colimg">
                                                <img src={items.img} alt="orange" id="img"  className="img-fluid text-center"/>
                                            </Col>                    
                                            <Col id="Orange">
                                                <div className="peppermint">
                                                    <h5>{items.name}</h5>
                                                    <p className="weight">{items.weight}</p>
                                                    <p className="p ">$ 32.00  <span> ${items.price}.00</span></p>
                                                    <button className=" btn-large" onClick={()=>handleClick(items)} >SHOP NOW!</button>
                                                </div>
                                            </Col>
                                        </Row>                        
                                    </div>
                                </Card>
                            )
                        })}                                              
                    </Row>
                </Container>
            </section>
        </>
    )
}