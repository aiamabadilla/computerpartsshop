import React from 'react'
import { Link } from 'react-router-dom';

import { CircularProgress, Button } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';

import CartItem from './CartItem/CartItem';

import "./styles.css";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart, loading }) => {

    return (
        <div className="cart">
            <h2 className="cart__title">Shopping Cart</h2>
            {loading ? <CircularProgress className="cart__loading" /> : 
                (cart.line_items.length ? cart.line_items.map((item) => (
                    <CartItem key={item.id} item={item} 
                    onRemoveFromCart={onRemoveFromCart}
                    onEmptyCart={onEmptyCart}
                    onUpdateCartQty={onUpdateCartQty} />
         )) : <h5 className="cart__empty">Your cart is empty! Start shopping <Link to="/">here</Link>.</h5>)}
            <div className="cart__info">
                <div className="cart__infoHeader">
                    <div className="cart__items">
                        <h4 className="cart__itemsAmount">subtotal ({loading ? "0" : cart.line_items.length}) items</h4>
                        <Button className="cart__deleteAllButton" onClick={() => onEmptyCart()}>
                            <DeleteForever className="cart__deleteAllIcon" />
                        </Button>
                    </div>
                    <h5 className="cart__cost">{loading ? "$0" :cart.subtotal.formatted_with_symbol}</h5>
                </div>
                <Button className="cart__button">proceed to checkout</Button>
            </div>
        </div>
    )
}

export default Cart
