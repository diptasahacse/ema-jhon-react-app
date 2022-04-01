import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../Hook/useProducts';
import ProductCard from '../ProductCard/ProductCard';

const Shop = () => {
    const [products] = useProducts();
    

    console.log(products)

    return (
        <Container>
            <h2>Products</h2>
            <Row  xs={1} md={3} className="g-4">
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </Row>
        </Container>
    );
};

export default Shop;