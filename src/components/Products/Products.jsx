import React from 'react'

import { CircularProgress } from '@material-ui/core';

import Product from "./Product/Product";

import "./styles.css";

const Products = ({ products, onAddToCart, loading }) => {

    return (
        <div className="products">
            <h2 className="products__title">latest parts</h2>
            <div className="products__list">
                    {loading ? <CircularProgress className="products__loading" /> : products.map((product) => (
                        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
                    ))}
            </div>
        </div>
    )
}

export default Products
