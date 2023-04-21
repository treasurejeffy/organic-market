import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './OrganicMarket.css';

export default function NewsLetters(params) {
    
    return(
        <>
            <Container>
                <div className="text-center" id="newsletter">
                    <h3>NEWSLETTERS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                    
                </div>
                <div className="d-flex">
                    <div class="flex border ">
                        <input type="text" class="inputfield" placeholder="Type In Your Email Address"/>
                        <button type="submit" className="border-0">Suscribe</button>
                    </div> 
                </div>               
            </Container>
            <hr/>
        </>
    )
}