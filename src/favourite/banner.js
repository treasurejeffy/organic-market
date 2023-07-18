import React ,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col, Carousel  } from "react-bootstrap";
import './favourite.css'
import bannerImg from '../images/bannerfavour.png';
import bannersImg from '../images/banner 1.png'

export default function BannerFavourite() {


    return(
        <>
        <section id="favouriteBanner">
            <Container >
                <Row>
                    <Col className="mt-4">
                        <h2 className="mt-5 mb-4 text-center text-muted">Favourite Items</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Carousel>
                    <h3 className="banner-header text-center">See All Your Favourites Posters/Movies</h3>
                    <Carousel.Item className="d-flex">
                        <img
                        className="d-block img-fluid"
                        src={bannerImg}
                        alt="First slide"
                        />
                        <img
                        className="d-block w-100 img-fluid"
                        src={bannersImg}
                        alt="First slide"
                        />
                        <img
                        className="d-block w-100  img-fluid"
                        src={bannerImg}
                        alt="First slide"
                        />
                        <img
                        className="d-block w-100  img-fluid"
                        src={bannersImg}
                        alt="First slide"
                        />
                        <img
                        className="d-block w-100  img-fluid"
                        src={bannerImg}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item >            
                        <img
                        className="d-block  img-thumbnail"
                        src={bannerImg}
                        alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>  
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}