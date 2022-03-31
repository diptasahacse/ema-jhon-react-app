import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(preducts => setProducts(preducts.data))
    },[]);

    console.log(products)

    return (
        <Container>
            <h2>Products</h2>
            <Row>
                {
                    
                }
            </Row>
        </Container>
    );
};

export default Shop;