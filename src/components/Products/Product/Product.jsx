import React from 'react'

import { Button } from '@material-ui/core';

import { AddShoppingCart } from '@material-ui/icons';

import "./styles.css";

const Product = ({ product, onAddToCart }) => {
    return (
        <div className="product">
            <img src={product.media.source} alt={product.name} className="product__image" />
            <div className="product__info">
                <h5 className="product__name">{product.name}</h5>
                <div className="product__shop">
                    <h5 className="product__price">{product.price.formatted_with_symbol}</h5>
                    <Button className="product__button" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart className="product__icon" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Product
