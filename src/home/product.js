import React, { useEffect } from 'react';
import Home from './OrganicMarket';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Container,Card,Button } from 'react-bootstrap';
import './OrganicMarket.css';
import favourites from "../images/hearts.png";
import payment from "../images/send-money.png";
import capsicum from "../images/capsicuim.jpg"
import tomatoe from "../images/tomato.jpg";
import onion from "../images/onion.png";
import lemon from "../images/lemon.png"
import strawberry from "../images/strawberry.jpg";
import cauliflower from "../images/cauliflower.png";
import garlic from "../images/garlic.jpg";
import plum from "../images/plum.jpg";
import kiwi from "../images/kiwi.jpg";
import apple from "../images/apple.jpg";
import banana from "../images/banana.jpg";
import grape from "../images/grape.png";
import { useState } from 'react';

export default function OrganicProducts(props) {
    let [items , setItems]=useState([]);
    let [ myProductStorage,setMyProductStorage]=useState([])


    items = [
        {
            name: "Capsicum",
            price: 18.00,
            weight: '500 Gm',
            img:capsicum,
            quantity: 1,
        },
        {
            name:"Tomatoe",
            price :23.00,
            weight: " 1 Kg",
            img:tomatoe,
            quantity: 1,
        },
        {
            name:"Onion",
            price:19.00,
            weight:"1 Kg",
            img: onion,
            quantity: 1,
        },
        {
            name:'Lemon',
            price:26.00,
            weight:"500 Gm",
            img: lemon,
            quantity: 1,
        },
        {
            name:   "strawberry",
            price:  30.00,
            weight: "500 Gm",
            img: strawberry,
            quantity: 1,
        },
        {
            name:   "Cauliflower",
            price:  12.00,
            weight: "500 Gm",
            quantity: 1,
            img:cauliflower
        },
        {
            name:  "Garlic",
            price:  32.00,
            weight: "1 Kg",
            quantity: 1,
            img: garlic
        },
        {
            name:   "Plum",
            price:  12.00,
            weight: "500 Gm",
            quantity: 1,
            img:plum
        },
        {
            name: 'Kiwi',
            price:  29.00,
            weight: "1 Kg",
            quantity: 1,
            img: kiwi,
        },
        {
            name:   "Apple",
            price:  31.00,
            weight: "1 Kg",
            quantity: 1,
            img: apple
        },
        {
            name: "Banana",
            price:  28.00,
            weight: "1 Kg",
            quantity: 1,
            img: banana
        },
        {
            name:   "Grape",
            price:  26.00,
            quantity: 1,
            weight: "1 Kg",
            img: grape
        }
    ]

    const myFavouriteStorage=[];

    const handleIncrement = (itemId) => {
        for (let i = 0; i < itemId.length; i++) {
            const element = itemId[i];
            console.log(i)
        }      
    };

    const handleFavourite = (clickedFavourite) => {        
        // clicked item add to localstorage
        myFavouriteStorage.push(clickedFavourite)
        sessionStorage.setItem('myFavourite', JSON.stringify(myFavouriteStorage))
    };
    
    const handleClick = (clickedItem) => {
        myProductStorage.push(clickedItem)
        props.setMyCart(myProductStorage)
    };
    // console.log(myProductStorage)
    return(
        <>
           <Container id="organicProducts">
                <div id="organicProducts-header">
                    <h3 className="text-center">Buy<span>Organic Products</span></h3>
                    <h4 className="text-center"><span id="all">All </span> Fruits <span>Vegetables</span> </h4>
                </div>
                <Row lg={4} md={2} sm={1} className='mt-5'>
                    {items.map((element,index,items)=>{                        
                        return (<Card className="text-center px-2 rounded-0" key={items.name} >
                            <Card.Header id='card-header'><img src={favourites} alt='favourite' title='Favourite'  onClick={() => handleFavourite(element)} /></Card.Header>
                            <Card.Img variant="top" src={element.img} className="img-fluid" alt="img-fliud" />
                            <Card.Title id='card-title'>{element.name}</Card.Title>
                            <Card.Subtitle className="pt-2 pb-3">Weight: {element.weight}</Card.Subtitle>
                            <Card.Text   id='card-price'>${element.price}.00</Card.Text>
                            <div className='d-flex'id='operator'>
                                <span className='minus border btn mx-3 rounded-0' title='Decrease Quantity'>-</span> 
                                {element.quantity} 
                                <span className='minus border btn rounded-0 mx-3' title='Increase Quantity' onClick={() => handleIncrement(element)}>+</span>                    
                            </div>
                            <Button className=" btn bg-success rounded-0" title='Pickup Item by' onClick={() => handleClick(element)} ><img src={payment} alt='click to' /> Add To Cart</Button>
                        </Card>)
                    })}
                </Row>
                <div className="view-all">
                    <button>View All</button>            
                </div>
            </Container>
        </>
    )
}