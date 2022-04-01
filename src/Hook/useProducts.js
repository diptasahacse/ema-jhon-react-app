import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () =>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(preducts => setProducts(preducts.data))
    },[]);

    return [products, setProducts];

}
export default useProducts;