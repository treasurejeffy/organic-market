import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Container,Card,Button, Tab, Tabs, Col } from 'react-bootstrap';
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
    let [items , setItems]=useState([
        {
            name: "Capsicum",
            price: 18.00,
            weight: [500,'Gm'],
            img:capsicum,
            quantity: 1,
            id:'01'
        },
        {
            name:"Tomatoe",
            price :23.00,
            weight: [1, 'Kg'],
            img:tomatoe,
            quantity: 1,
            id:'02'
        },
        {
            name:"Onion",
            price:19.00,
            weight:[1, 'Kg'],
            img: onion,
            quantity: 1,
            id:'03'
        },
        {
            name:'Lemon',
            price:26.00,
            weight:[500, 'Gm'],
            img: lemon,
            quantity: 1,
            id:'04'
        },
        {
            name:   "strawberry",
            price:  30.00,
            weight: [500, 'Gm'],
            img: strawberry,
            quantity: 1,
            id:'05'
        },
        {
            name:   "Cauliflower",
            price:  12.00,
            weight:[500, 'Gm'],
            quantity: 1,
            img:cauliflower,
            id:'06'
        },
        {
            name:  "Garlic",
            price:  32.00,
            weight: [1, 'Kg'],
            quantity: 1,
            img: garlic,
            id:'07'
        },
        {
            name:   "Plum",
            price:  12.00,
            weight: [500, 'Gm'],
            quantity: 1,
            img:plum,
            id:'08'
        },
        {
            name: 'Kiwi',
            price:  29.00,
            weight:[1, 'Kg'],
            quantity: 1,
            img: kiwi,
            id:'09'
        },
        {
            name:   "Apple",
            price:  31.00,
            weight: [1, 'Kg'],
            quantity: 1,
            img: apple,
            id:'10'
        },
        {
            name: "Banana",
            price:  28.00,
            weight:[1, 'Kg'],
            quantity: 1,
            img: banana,
            id:'11'
        },
        {
            name:   "Grape",
            price:  26.00,
            quantity: 1,
            weight: [1, 'Kg'],
            img: grape,
            id:'12'
        }
    ]);
    let [fruits , setFruits]=useState([ 
        {
            name:'Lemon',
            price:26.00,
            weight:[500,'Gm'],
            img: lemon,
            quantity: 1,
            id:'004'
        },
        {
            name:   "Plum",
            price:  12.00,
            weight: [500,'Gm'],
            quantity: 1,
            img:plum,
            id:'008'
        },
        {
            name: 'Kiwi',
            price:  29.00,
            weight: [1, 'Kg'],
            quantity: 1,
            img: kiwi,
            id:'009'
        },
        {
            name:   "Apple",
            price:  31.00,
            weight: [1, 'Kg'],
            quantity: 1,
            img: apple,
            id:'010'
        },
        {
            name: "Banana",
            price:  28.00,
            weight: [1, 'Kg'],
            quantity: 1,
            img: banana,
            id:'011'
        }, 
        {
            name:   "strawberry",
            price:  30.00,
            weight: [500,'Gm'],
            img: strawberry,
            quantity: 1,
            id:'005'
        },
        {
            name:   "Grape",
            price:  26.00,
            quantity: 1,
            weight: [1, 'Kg'],
            img: grape,
            id:'012'
        }
    ]);
    let [vegetables , setVegetables]= useState([
        {
            name: "Capsicum",
            price: 18.00,
            weight: [500,'Gm'],
            img:capsicum,
            quantity: 1,
            id:'001'
        },
        {
            name:"Tomatoe",
            price :23.00,
            weight: [1, 'Kg'],
            img:tomatoe,
            quantity:1,
            id:'002'
        },
        {
            name:"Onion",
            price:19.00,
            weight:[1, 'Kg'],
            img: onion,
            quantity: 1,
            id:'003'
        },
        {
            name:   "Cauliflower",
            price:  12.00,
            weight: [500,'Gm'],
            quantity: 1,
            img:cauliflower,
            id:'006'
        },
        {
            name:  "Garlic",
            price:  32.00,
            weight: [1, 'Kg'],
            quantity: 1,
            img: garlic,
            id:'007'
        }
    ])
    const [key, setKey] = useState('all');

    let [myCartStorage, setMyCartStorage] =useState([])
    let [myFavouriteStorage, setMyFavouriteStorage] =useState([])

    const myCart = props.myCart
    const myFavourite = props.myFavourite
    const handleFavourite = (clickedFavourite) => {               
        setMyFavouriteStorage([...myFavouriteStorage,clickedFavourite])
        props.setMyFavourite([...myFavourite,myFavouriteStorage])
        sessionStorage.setItem('myFavourite', JSON.stringify(myFavouriteStorage))
    };
    console.log(myFavouriteStorage)
    
    const handleClick = (clickedItem) => {
        props.setMyCart([...myCart,clickedItem])
        myCartStorage.push(clickedItem)
        sessionStorage.setItem('mycart', JSON.stringify(myCartStorage))
    }

    const handleIncreaseQuantityAll = (itemId) => {
            console.log(itemId)
            const updatedItems = items.map(item => {
                if (itemId === item.id) {
                return { ...item, quantity: item.quantity + 1};
                }
                return item;
            });
            setItems(updatedItems);
    };

    const handleDecreaseQuantityAll = (itemId) => {
            console.log(itemId)
            const updatedItems = items.map(item => {
                if (itemId === item.id && item.quantity > 0 ) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
                setItems(updatedItems);
    };

    const handleIncreaseQuantityFruits = (itemId) => {
        console.log(itemId)
        const updatedItems = fruits.map(item => {
            if (itemId === item.id) {
            return { ...item, quantity: item.quantity + 1};
            }
            return item;
        });
        setFruits(updatedItems);
    };

    const handleDecreaseQuantityFruits = (itemId) => {
        console.log(itemId)
        const updatedItems = fruits.map(item => {
            if (itemId === item.id && item.quantity > 0) {
                return { ...item, quantity: item.quantity - item.quantity};
            }
            return item;
        });
        setFruits(updatedItems);
    };

    const handleIncreaseQuantityVegetables = (itemId) => {
        console.log(itemId)
        const updatedItems = vegetables.map(item => {
            if (itemId === item.id) {
              return { ...item, quantity: item.quantity + 1};
            }
            return item;
          });
          setVegetables(updatedItems);
    };

    const handleDecreaseQuantityVegetables = (itemId) => {
        console.log(itemId)
        const updatedItems = vegetables.map(item => {
            if (itemId === item.id && item.quantity > 0) {
                return { ...item, quantity: item.quantity - item.quantity};
            }
            return item;
            });
            setVegetables(updatedItems);
    };

    return(
        <>
           <Container id="organicProducts">
                <Row className={"justify-content-center"}>
                    <Col className={"nav-justified"}>
                        <div id="organicProducts-header">
                            <h3 className="text-center">Buy<span>Organic Products</span></h3>
                        </div>    
                        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="tabs  pt-4">                            
                            <Tab  className='p-0' title="All" eventKey="all" >                                
                                <Row lg={4} md={2} sm={1} className='mt-4' id='all'>
                                    {items.map((element,index,items)=>{                        
                                        return (<Card className="text-center px-2 rounded-0" key={index} >
                                            <Card.Header id='card-header'><img src={favourites} alt='favourite' title='Favourite'  onClick={() => handleFavourite(element)} /></Card.Header>
                                            <Card.Img variant="top" src={element.img} id='myproductImgs' className="img-fluid" alt="img-fliud" />
                                            <Card.Title id='card-title'>{element.name}</Card.Title>
                                            <Card.Subtitle className="pt-2 pb-3">Weight: {element.weight[0] * element.quantity}{element.weight[1]}</Card.Subtitle>
                                            <Card.Text   id='card-price'>${element.price * element.quantity}.00</Card.Text>
                                            <div className='d-flex'id='operator'>
                                                <span className='minus border btn mx-3 rounded-0' title='Decrease Quantity' onClick={() => handleDecreaseQuantityAll(element.id)}>-</span> 
                                                {element.quantity} 
                                                <span className='minus border btn rounded-0 mx-3' title='Increase Quantity' onClick={() => handleIncreaseQuantityAll(element.id)}>+</span>                    
                                            </div>
                                            <Button className=" btn bg-success rounded-0" title='Pickup Item by' onClick={() => handleClick(element)} ><img src={payment} alt='click to' /> Add To Cart</Button>
                                        </Card>)
                                    })}
                                </Row>
                            </Tab>
                            <Tab eventKey="fruits" title="Fruits" className='tab'>
                                <Row lg={4} md={2} sm={1} className='mt-4' id='fruits'>
                                    {fruits.map((element,index,fruits)=>{                        
                                        return (<Card className="text-center px-2 rounded-0" key={index} >
                                            <Card.Header id='card-header'><img src={favourites} alt='favourite' title='Favourite'  onClick={() => handleFavourite(element)} /></Card.Header>
                                            <Card.Img variant="top" id='myproductImgs'  src={element.img} className="img-fluid-responsive" alt="img-fliud" />
                                            <Card.Title id='card-title'>{element.name}</Card.Title>
                                            <Card.Subtitle className="pt-2 pb-3">Weight: {element.weight[0] * element.quantity}{element.weight[1]}</Card.Subtitle>
                                            <Card.Text   id='card-price'>${element.price * element.quantity}.00</Card.Text>
                                            <div className='d-flex'id='operator'>
                                                <span className='minus border btn mx-3 rounded-0' title='Decrease Quantity' onClick={() => handleDecreaseQuantityFruits(element.id)}>-</span> 
                                                {element.quantity} 
                                                <span className='minus border btn rounded-0 mx-3' title='Increase Quantity' onClick={() => handleIncreaseQuantityFruits(element.id)}>+</span>                    
                                            </div>
                                            <Button className=" btn bg-success rounded-0" title='Pickup Item by' onClick={() => handleClick(element)} ><img src={payment} alt='click to' /> Add To Cart</Button>
                                        </Card>)
                                    })}
                                </Row>
                            </Tab>
                            <Tab eventKey="vegtables" title="Vegetables" className='tab'>
                                <Row lg={4} md={2} sm={1} className='mt-4 ' id='vegetables'>
                                    {vegetables.map((element,index,vegetables)=>{                        
                                        return (<Card className="text-center px-2 rounded-0" key={index} >
                                            <Card.Header id='card-header'><img src={favourites} alt='favourite' title='Favourite'  onClick={() => handleFavourite(element)} /></Card.Header>
                                            <Card.Img variant="top" id='myproductImgs'  src={element.img} className="img-fluid" alt="img-fliud" />
                                            <Card.Title id='card-title'>{element.name}</Card.Title>
                                            <Card.Subtitle className="pt-2 pb-3">Weight: {element.weight[0] * element.quantity}{element.weight[1]}</Card.Subtitle>
                                            <Card.Text   id='card-price'>${element.price * element.quantity}.00</Card.Text>
                                            <div className='d-flex'id='operator'>
                                                <span className='minus border btn mx-3 rounded-0' title='Decrease Quantity' onClick={() => handleDecreaseQuantityVegetables(element.id)}>-</span> 
                                                {element.quantity} 
                                                <span className='minus border btn rounded-0 mx-3' title='Increase Quantity' onClick={() => handleIncreaseQuantityVegetables(element.id)}>+</span>                    
                                            </div>
                                            <Button className=" btn bg-success rounded-0" title='Pickup Item by' onClick={() => handleClick(element)} ><img src={payment} alt='click to' /> Add To Cart</Button>
                                        </Card>)
                                    })}
                                </Row>
                            </Tab>
                        </Tabs>
                        <div className="view-all">
                            <button >View All</button>            
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}