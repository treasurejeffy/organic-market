import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './OrganicMarket.css';
import drinks from "./images/orangebg 1.png"

export default function OurDrinks() {
    
    return(
        <>
            <Container >
                <Row className="drinks">
                        <Col lg={6} md={6} sm={12}>
                            <img src={drinks} className="img-fluid" alt="facial expression"/>
                        </Col>
                        <Col lg={4} offset={2} md={6} sm={12}>
                             <h3 id="drinks">Our Drinks</h3>
                             <p id="drinks-note">To create a perfect juice nature does <br/>   the work.</p>
                             <button id="btn-juice">See Our Juice</button>
                        </Col>
                </Row>
            </Container>
        </>
    )
} 