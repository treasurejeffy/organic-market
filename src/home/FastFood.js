import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './OrganicMarket.css';
import bakery from "../images/fast.png"

export default function FastFood() {
    
    return(
        <>
            <Container className="mt-5">
                <Row>                      
                        <Col lg={6} md={6} sm={12}>
                            <div className="d-flex col-lg-justify-content-end" id="header-fast-food">
                               <h3 id="drinks">Fast Food Recipes</h3>
                            </div>
                            <div className="d-flex col-lg-justify-content-end m-0">                                   
                                    <p id="fast-note">Fresh,nourishing always delicious.<br/>check out for our favourite recipes <br/> for fruity revival</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                 <button id="btn-fast">View All</button>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <img src={bakery} className="img-fluid" alt="facial expression"/>
                        </Col>
                </Row>
            </Container>
        </>
    )
} 