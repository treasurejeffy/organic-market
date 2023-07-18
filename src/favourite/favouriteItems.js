import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col,Card,Button } from "react-bootstrap";
import './favourite.css'

export default function FavouriteItems(props) {
    let [array, setArray] = useState(JSON.parse(sessionStorage.getItem('myFavourite')));
    let [items, setItems] = useState();
    let [empty, setEmpty] = useState('Empty Favourite,pls add your Favourite Items! ')
    // filtered = array.filter(items => items !== null);
    // console.log(filtered)

    const myCartFromFavourite=props.myCartFromFavourite

    const handleRemove = (itemId) => {
      console.log(itemId)
      const filteredItem = array.filter(item => item.id !== itemId);
      setArray(filteredItem)
      sessionStorage.removeItem(filteredItem)
      sessionStorage.setItem('myFavourite', JSON.stringify(array) )
    }

    const handleDecreaseQuantity = (itemId) => {
        console.log(itemId)
        const updatedItems = array.map(item => {
            if (itemId === item.id && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 || item.quantity-item.quantity};
            }
            return item;
        });
        setArray(updatedItems);
    };

    const handleIncreaseQuantity = (itemId) => {
        console.log(itemId)
        const updatedItems = array.map(item => {
            if (itemId === item.id) {
            return { ...item, quantity: item.quantity + 1};
            }
            return item;
        });
        setArray(updatedItems);
    };

    const handleAddToCart = (mycart) => {
        console.log(mycart)
        props.setMyCartFromFavourite([...myCartFromFavourite,mycart])
    }
   
    return(
        <>
            <section id="favouritepd">
               <Container className="px-4">
                        <h3 className="text-muted text-center m-3">My Favourites</h3>
                    <Row md={2} sm={1} lg={4} className="mt-4 mb-5">
                        {array ? (array.map((item,index)=>
                            <Card className="text-center px-2 d-flex" id="favouriteCard" key={index}>
                                <Card.Header className="bg-white border-0 p-0" onClick={() => handleRemove(item.id)}><p className="mt-2 btn btn-outline-danger rounded-5" id="remove-btns">&times;</p></Card.Header>
                                <Card.Img variant="top" src={item.img} className="img-fluid" alt="img-fliud" />
                                <Card.Title><b>{item.name}</b></Card.Title>
                                <Card.Subtitle className="pt-2 pb-3">Weight: {item.weight[0] * item.quantity}{item.weight[1]}</Card.Subtitle>
                                <Card.Text className="text-muted"><b>${item.price * item.quantity}.00</b></Card.Text>
                                <div className="py-1"><span  className="btn btn-outline-danger" onClick={() => handleDecreaseQuantity(item.id)}>-</span> {item.quantity}  <span className="btn btn-outline-success"  onClick={() => handleIncreaseQuantity(item.id)}>+</span></div>
                                <Button className="py-2 my-3" onClick={()=> handleAddToCart(item)}>Add To Cart</Button>
                            </Card>
                        )) : <Row><p className="text-danger text-center">{empty}</p></Row>}
                    </Row> 
               </Container>
            </section>
        </>
    )
}