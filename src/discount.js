import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './OrganicMarket.css';
import orange from "./images/orange.png"
import peppermint from "./images/peppermint (2).png"


export default function DiscountCards () {
    
    return(
        <>
            <section id="discountCards">
                <Container>
                    <div id="discountHeader"><h3>Order Now! and Get</h3><h1>50% Off</h1></div>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <card>
                                <div>
                                    <div className="border p-4">
                                        <Row>
                                            <Col id="colimg">
                                                <img src={orange} alt="" id="img"  class="img-fluid text-center"/>
                                            </Col>
                                            <Col id="Orange">
                                                <div className="peppermint">
                                                    <h5>Orange</h5>
                                                    <p className="weight">500 Gm</p>
                                                    <p class="p">$ 32.00 <span>$16.00</span></p>
                                                    <button class=" btn-large">SHOP NOW!</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </card>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <card>
                                <div>
                                    <div className="border p-4">
                                        <Row>
                                            <Col id="colimg">
                                                <img src={peppermint} alt="orange" id="img"  class="img-fluid text-center"/>
                                            </Col>
                                            <Col id="Orange" > 
                                                <div className="peppermint">
                                                    <h5>Peppermint</h5>
                                                    <p className="weight">800 Gm</p>
                                                    <p class="p">$ 32.00 <span>$16.00</span></p>
                                                    <button class=" btn-large">SHOP NOW!</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}