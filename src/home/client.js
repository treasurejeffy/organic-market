import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './OrganicMarket.css';
import client from "../images/client.jpg"
import person from "../images/gender-neutral-user.png";


export default function ClientSays() {
    
    return(
        <>
            <section id="WhatClientSays">
                <Container>
                    <div className="text-center">
                        <h3> <span>CLIENT</span> SAYS</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis delectus ducimus itaque amet quis blanditiis,<br/>  sit amet consectetur adipisicing elit. Officiis delectus ducimus.</p>                        
                    </div>
                    <Row >
                        <Col lg={6} md={6} sm={12}>
                            <img src={client} className="img-fluid" alt="facial expression"/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, officia maiores? Magni eos doloribus quasi ut reprehenderit assumenda laboriosam non magnam, accusamus voluptatum vel repellat excepturi suscipit sit iusto ab, cupiditate iure iste ducimus quis molestias quisquam. Omnis perferendis adipisci reiciendis obcaecati voluptate optio quia eos ea, esse libero maiores. Expedita nisi, voluptas laboriosam sapiente aut quae! Vitae officia debitis voluptas, enim ullam veniam voluptates totam! Sequi commodi ipsa voluptatem rem in perspiciatis delectus repudiandae, cumque quasi dolorem aliquam unde.</p>
                             <div id="client">
                                <img src={person} className="p-2"  alt="s"/> John Doe                               
                             </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}