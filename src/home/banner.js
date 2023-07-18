import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './OrganicMarket.css';
import banner from "../images/banner 1.png"
import satisfy from "../images/gear.png"
import savewhen from  "../images/hearts.png"
import shipping from  "../images/ship.png"
import money from  "../images/send-money.png"
import { Link } from "react-router-dom";

export default class Banner extends React.Component{
    
    render(){
      return( 
            <>
                <section id="banner">
                       <Container>
                            <Row id="row">
                               <Col lg={6} md={6} sm={12}>
                                   <div>
                                       <h2 className="" id="bannerh1">Healthy Food, Vegetables & Organic Market</h2>
                                       <p className="mt-2" id="bannerp">All Natural Products</p>
                                        <button className="mt-3 border-0" id="bannerbtn"> <a className="link" href="#"> Shop Now </a></button>
                                   </div>
                               </Col>
                               <Col lg={6} md={6} sm={12}>
                                   <div id="banner-img">
                                       <img src={banner} className="img-fliud mt-1 mb-1" alt="woman with basket of fruits"/>
                                   </div>
                               </Col>
                           </Row>
                       </Container>
                </section>
                <section id="descriptionBanner">
                    <Container>
                       <Row>
                            <Col lg={3} md={6} sm={12}>
                                <div id="satisfy">
                                    <div><img src={satisfy} alt="satisfy"/> <h6>100% <br/> Satisfactions</h6></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut iste ullam odit? Numquam.</p>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <div id="satisfy">
                                    <div><img src={savewhen} alt="satisfy"/> <h6>Save 20% <br/> When You</h6></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut iste ullam odit? Numquam.</p>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <div id="satisfy">
                                    <div><img src={shipping} alt="satisfy"/> <h6>Fast Free<br/> Shipments</h6></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut iste ullam odit? Numquam.</p>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <div id="satisfy">
                                    <div><img src={money} alt="satisfy" id="moneyimg" /> <h6>14-Days <br/> Money Back</h6></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut iste ullam odit? Numquam.</p>
                                </div>
                            </Col>
                       </Row>
                    </Container>
                </section>
           </>
        ) 
    }
}