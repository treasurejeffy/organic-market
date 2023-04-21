import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import './OrganicMarket.css';
import favourites from "./images/hearts.png";
import payment from "./images/send-money.png";
import capsicum from "./images/capsicuim.jpg"
import tomatoe from "./images/tomato.jpg";
import onion from "./images/onion.png";
import  lemon from "./images/lemon.png"
import strawberry from "./images/strawberry.jpg";
import cauliflower from "./images/cauliflower.png";
import garlic from "./images/garlic.jpg";
import plum from "./images/plum.jpg";
import kiwi from "./images/kiwi.jpg";
import apple from "./images/apple.jpg";
import banana from "./images/banana.jpg";
import grape from "./images/grape.png";


export default function OrganicProducts() {
    

    return(
        <>
            <section id="organicProducts">
                <Container>
                    <div id="organicProducts-header"> 
                        <h3 className="text-center">Buy<span>Organic Products</span></h3>
                        <h4 className="text-center"><span id="all">All </span> Fruits <span>Vegetables</span> </h4>
                    </div>
                    <CardGroup className="group1 mt-3">
                        <Card className="rounded-0 text-center" id="card">
                            <Card.Header className="card-header"><img src={favourites} alt="favourites" className="favourite-img"/></Card.Header>
                            <Card.Img variant="top" src={capsicum} width="18rem" alt="img-fliud" />
                            <Card.Title><h4 className="card-title">Capsicum</h4></Card.Title>
                            <Card.Subtitle className="mb-2 pb-1">Weight: 500 Gm</Card.Subtitle>
                            <Card.Text><h5  id="price">$ 18.00</h5></Card.Text>
                            <div className="m-1" id="operator">
                                <span className=" minus border">-</span> 0 
                                <span className=" plus border">+</span>
                            </div>
                            <div className="butn">
                                <button ><img src={payment} id="card-btn-img" alt=""/>Add To Cart</button>
                            </div>
                        </Card>
                        <Card className="rounded-0 text-center" id="card">
                            <Card.Header className="card-header"><img src={favourites} alt="favourites" className="favourite-img"/></Card.Header>
                            <Card.Img variant="top" src={tomatoe} width="18rem" />
                            <Card.Title><h4  className="card-title">Tomato</h4></Card.Title>
                            <Card.Subtitle className=" mb-2">Weight: 1 Kg</Card.Subtitle>
                            <Card.Text><h5 id="price">$ 23.00</h5></Card.Text>
                            <div className=" m-1" id="operator">
                                <span className=" minus border">-</span> 0 
                                <span className=" plus border">+</span>
                            </div>
                            <div className="butn">
                                <button ><img src={payment} id="card-btn-img" alt=""/>Add To Cart</button>
                            </div>
                        </Card>
                        <Card className="rounded-0 text-center" id="card">
                            <Card.Header className="card-header" ><img src={favourites} alt="favourites" className="favourite-img"/></Card.Header>
                            <Card.Img variant="top" src={onion} width="18rem"  />
                            <Card.Title><h4 className="card-title">Onion</h4></Card.Title>
                            <Card.Subtitle className="p-1">Weight: 1 Kg</Card.Subtitle>
                            <Card.Text ><h5  id="price">$ 19.00</h5></Card.Text>
                            <div id="operator">
                                <span className=" minus border">-</span> 0 
                                <span className=" plus border">+</span>
                            </div>
                            <div className="butn">
                                <button ><img src={payment} id="card-btn-img" alt=""/>Add To Cart</button>
                            </div>
                        </Card>
                        <Card className="rounded-0 text-center" id="card">
                            <Card.Header className="card-header"><img src={favourites} alt="favourites" className="favourite-img"/></Card.Header>
                            <Card.Img variant="top" src={lemon} width="18rem" />
                            <Card.Title><h4 className="card-title">Lemon</h4></Card.Title>
                            <Card.Subtitle className=" p-1">Weight: 500 Gm</Card.Subtitle>
                            <Card.Text><h5 id="price">$ 26.00</h5></Card.Text>
                            <div id="operator">
                                <span className=" minus border">-</span> 0 
                                <span className=" plus border">+</span>
                            </div>
                            <div className="butn">
                                <button ><img src={payment} id="card-btn-img" alt=""/>Add To Cart</button>
                            </div>
                        </Card>
                    </CardGroup>
                    <CardGroup className="group2">
                        <Card className="rounded-0 text-center" id="card">
                            <Card.Header className="card-header"><img src={favourites} alt="favourites" className="favourite-img"/></Card.Header>
                            <Card.Img variant="top" src={strawberry} width="18rem" alt="img-fliud" />
                            <Card.Title><h4 className="card-title">Strawberry</h4></Card.Title>
                            <Card.Subtitle className="mb-2 pb-1">Weight: 500 Gm</Card.Subtitle>
                            <Card.Text><h5  id="price">$ 30.00</h5></Card.Text>
                            <div id="operator">
                                <span className=" minus border">-</span> 0 
                                <span className=" plus border">+</span>
                            </div>
                            <div className="butn">
                                <button ><img src={payment} id="card-btn-img" alt=""/>Add To Cart</button>
                            </div>
                        </Card>
                        <Card className="rounded-0 text-center" id="card">
                            <Card.Header className="card-header"><img src={favourites} alt="favourites" className="favourite-img"/></Card.Header>
                            <Card.Img variant="top" src={cauliflower} width="18rem" />
                            <Card.Title><h4  className="card-title">Cauliflower</h4></Card.Title>
                            <Card.Subtitle className=" mb-2">Weight: 500 Gm</Card.Subtitle>
                            <Card.Text><h5 id="price">$ 12.00</h5></Card.Text>
                            <div id="operator">
                                <span className=" minus border">-</span> 0 
                                <span className=" plus border">+</span>
                            </div>
                            <div className="butn">
                                <button ><img src={payment} id="card-btn-img" alt=""/>Add To Cart</button>
                            </div>
                        </Card>
                        <Card className="rounded-0 text-center" id="card">
                            <Card.Header className="card-header" ><img src={favourites} alt="favourites" className="favourite-img"/></Card.Header>
                            <Card.Img variant="top" src={garlic} width="18rem"  />
                            <Card.Title><h4 className="card-title">Garlic</h4></Card.Title>
                            <Card.Subtitle className="p-1">Weight: 500 Gm</Card.Subtitle>
                            <Card.Text ><h5  id="price">$ 32.00</h5></Card.Text>
                            <div id="operator">
                                <span className=" minus border">-</span> 0 
                                <span className=" plus border">+</span>
                            </div>
                            <div className="butn">
                                <button ><img src={payment} id="card-btn-img" alt=""/>Add To Cart</button>
                            </div>
                        </Card>
                        <Card className="rounded-0 text-center" id="card">
                            <Card.Header className="card-header"><img src={favourites} alt="favourites" className="favourite-img"/></Card.Header>
                            <Card.Img variant="top" src={plum} width="18rem" />
                            <Card.Title><h4 className="card-title">Plum</h4></Card.Title>
                            <Card.Subtitle className=" p-1">Weight: 1 Kg</Card.Subtitle>
                            <Card.Text><h5 id="price">$ 25.00</h5></Card.Text>
                            <div className="m-1" id="operator">
                                <span className=" minus border">-</span> 0 
                                <span className=" plus border">+</span>
                            </div>
                            <div className="butn">
                                <button ><img src={payment} id="card-btn-img" alt=""/>Add To Cart</button>
                            </div>
                        </Card>
                    </CardGroup>
                    <CardGroup className="group3">
                        <Card className="rounded-0 text-center" id="card">
                            <Card.Header className="card-header"><img src={favourites} alt="favourites" className="favourite-img"/></Card.Header>
                            <Card.Img variant="top" src={kiwi} width="18rem" alt="img-fliud" />
                            <Card.Title><h4 className="card-title">Kiwi</h4></Card.Title>
                            <Card.Subtitle className="mb-2 pb-1">Weight: 1 Kg</Card.Subtitle>
                            <Card.Text><h5  id="price">$ 29.00</h5></Card.Text>
                            <div id="operator" className="m-1 p-1">
                                <span className=" minus border">-</span> 0 
                                <span className=" plus border">+</span>
                            </div>
                            <div className="butn">
                                <button ><img src={payment} id="card-btn-img" alt=""/>Add To Cart</button>
                            </div>
                        </Card>
                        <Card className="rounded-0 text-center" id="card">
                            <Card.Header className="card-header"><img src={favourites} alt="favourites" className="favourite-img"/></Card.Header>
                            <Card.Img variant="top" src={apple} width="18rem" />
                            <Card.Title><h4  className="card-title">Apple</h4></Card.Title>
                            <Card.Subtitle className=" mb-2">Weight: 1 Kg</Card.Subtitle>
                            <Card.Text><h5 id="price">$ 31.00</h5></Card.Text>
                            <div id="operator">
                                <span className=" minus border">-</span> 0 
                                <span className=" plus border">+</span>
                            </div>
                            <div className="butn">
                                <button ><img src={payment} id="card-btn-img" alt=""/>Add To Cart</button>
                            </div>
                        </Card>
                        <Card className="rounded-0 text-center" id="card">
                            <Card.Header className="card-header" ><img src={favourites} alt="favourites" className="favourite-img"/></Card.Header>
                            <Card.Img variant="top" src={banana} width="18rem"  />
                            <Card.Title><h4 className="card-title">Banana</h4></Card.Title>
                            <Card.Subtitle className="p-1">Weight: 1 Kg</Card.Subtitle>
                            <Card.Text ><h5  id="price">$ 28.00</h5></Card.Text>
                            <div id="operator">
                                <span className=" minus border">-</span> 0 
                                <span className=" plus border">+</span>
                            </div>
                            <div className="butn">
                                <button ><img src={payment} id="card-btn-img" alt=""/>Add To Cart</button>
                            </div>
                        </Card>
                        <Card className="rounded-0 text-center" id="card">
                            <Card.Header className="card-header"><img src={favourites} alt="favourites" className="favourite-img"/></Card.Header>
                            <Card.Img variant="top" src={grape} width="18rem" />
                            <Card.Title><h4 className="card-title">Grape</h4></Card.Title>
                            <Card.Subtitle className=" p-1">Weight: 1 Kg</Card.Subtitle>
                            <Card.Text><h5 id="price">$ 26.00</h5></Card.Text>
                            <div className="m-1" id="operator">
                                <span className=" minus border">-</span> 0 
                                <span className=" plus border">+</span>
                            </div>
                            <div className="butn">
                                <button ><img src={payment} id="card-btn-img" alt=""/>Add To Cart</button>
                            </div>
                        </Card>
                    </CardGroup>
                    <div className="view-all">
                        <button>View All</button>
                    </div>
                </Container>
            </section>
        </>
    )
}