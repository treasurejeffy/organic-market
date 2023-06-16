import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col,Card,Button } from "react-bootstrap";
import './favourite.css'

export default function FavouriteItems() {
    let [filtered, setFiltered] = useState([]);
    let [Items, setItems] = useState();
    const array=JSON.parse(sessionStorage.getItem('myFavourite'));
    // filtered = array.filter(items => items !== null);
    // console.log(filtered)
    if (array ==null) {
        alert('Pls your favourite is empty')
    } else {
        Items=array.map((item)=>
        <>
            <Card className="text-center px-2" id="favouriteCard">
                <Card.Img variant="top" src={item.img} className="img-fluid" alt="img-fliud" />
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="pt-2 pb-3">Weight: {item.weight}</Card.Subtitle>
                <Card.Text className="text-muted">${item.price}.00</Card.Text>
                <Button className="bg-danger mb-2" id="remove-btn" onClick={() => handleRemove(item)}>Remove</Button>
            </Card>
        </>           
    )
    }

    const handleRemove = (removeItems) => {
        Items.filter(item => item.name !== removeItems)
    }
   
    return(
        <>
            <section id="favouritepd">
               <Container>
                        <h3 className="text-muted text-center m-3">My Favourites</h3>
                    <Row md={2} sm={1} lg={4} className="mt-4 mb-5">                
                        {Items}
                    </Row>
               </Container>
            </section>
        </>
    )
}