import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './OrganicMarket.css';
import img1 from "../images/clean.jpg";
import img2 from "../images/cashnuts.jpeg";
import img3 from "../images/read.jpg";
import calender from "../images/calendar.png";
import comment from "../images/comment.png";

export default function NewsBlogs() {
    
    return(
        <>
            <section id="news-blogs">
                <Container>
                    <div id="news-blogs-header" className="text-center">
                        <h3><span>News</span> & Blogs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima rerum <br/> nesciunt dolores asperiores, iusto voluptatibus perspiciatis quae.</p>                        
                    </div>
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <Card className="border-0 rounded-0" id="card-1">
                                <Card.Img src={img1} alt="fruit"/>
                                <p>milk & clean vegetables</p>
                                <h4>Cleansing The Broady Of Parasites</h4>
                                <div id="date_comment">
                                    <img src={calender}  className="img"/><span className="span">March 13,2023</span> 
                                    <img src={comment} className="imgs"/><span className="span">3 comments</span>
                                </div>
                                <p id="lorem">Lorem ipsum dolor sit amet consectetur. Ipsum odio, quaerat quos Ipsum odio, quaerat quos voluptate dicta officia est sed vel accusantium omnis maiores suscipit ips???</p>
                                <a href=".discount">Read More</a>
                            </Card>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <Card className="border-0 rounded-0" id="card-1">
                                <Card.Img src={img2} alt="fruit"/>
                                <p>milk & clean vegetables</p>
                                <h4>Cleansing The Broady Of Parasites</h4>
                                <div id="date_comment">
                                    <img src={calender}  className="img"/><span className="span">March 13,2023</span> 
                                    <img src={comment} className="imgs"/><span className="span">3 comments</span>
                                </div>
                                <p id="lorem">Lorem ipsum dolor sit amet consectetur. Ipsum odio, quaerat quos Ipsum odio, quaerat quos voluptate dicta officia est sed vel accusantium omnis maiores suscipit ips???</p>
                                <a href="#">Read More</a>
                            </Card>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <Card className="border-0 rounded-0" id="card-1">
                                <Card.Img src={img3} alt="fruit"/>
                                <p>milk & clean vegetables</p>
                                <h4>Cleansing The Broady Of Parasites</h4>
                                <div id="date_comment">
                                    <img src={calender}  className="img"/><span className="span">March 13,2023</span> 
                                    <img src={comment} className="imgs"/><span className="span">3 comments</span>
                                </div>
                                <p id="lorem">Lorem ipsum dolor sit amet consectetur. Ipsum odio, quaerat quos Ipsum odio, quaerat quos voluptate dicta officia est sed vel accusantium omnis maiores suscipit ips???</p>
                                <a href="#">Read More</a>
                            </Card>
                        </Col>
                    </Row>
                    <div className="text-center" id="view-all-btn">
                        <button>View All</button>
                    </div>
                </Container>
            </section>
        </>
    )
}