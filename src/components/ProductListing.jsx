import React, { useEffect } from 'react'
import ProductComponents from './ProductComponents'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/features/productSlide'

const ProductListing = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err", err);
            })

       dispatch(setProducts(response.data))
    }

    useEffect(() => {        
        fetchProducts();
    },[])

    return (
        <div className='ui grid container'>
            <ProductComponents />
        </div>
    )
}

export default ProductListing