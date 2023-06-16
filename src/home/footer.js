import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './OrganicMarket.css';
import icon from "../images/icon.png"
import img1 from "../images/facebook-new.png"
import img2 from "../images/twitter--v3.png"
import img3 from "../images/instagram-new.png"
import img4 from "../images/linkedin.png"

export default function Footer() {
    
    return(
        <>
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