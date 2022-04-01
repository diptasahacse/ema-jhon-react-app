import React from 'react';
import { Badge, Button, Card, Col } from 'react-bootstrap';
import { ShoppingCartIcon } from '@heroicons/react/solid'

const ProductCard = ({ product }) => {
    const { title, image, price, category, description } = product;
    const addToCartListener = () => {
        console.log("Added")
    }
    return (
        <Col>
            <Card >
                <Card.Img variant="top" style={{ height: "350px" }} src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h3>${price}</h3>
                        <Badge className='bg-primary'>{category}</Badge>
                    </div>
                    <Card.Text>{description.slice(0, 180) + "..."}</Card.Text>



                    <Button onClick={addToCartListener} variant="primary" className='py-1 px-2'>
                        
                        <span>Add</span>

                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductCard;