import React, { useState } from 'react'

import { Button, Select, MenuItem } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import "./styles.css";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart, onEmptyCard }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="cartitem">
            <img src={item.media.source} alt={item.name} className="cartitem__image" />
            <div className="cartitem__info">
                <h5 className="cartitem__name">{item.name}</h5>
                <div className="cartitem__options">                  
                    <h5 className="cartitem__price">{item.line_total.formatted_with_symbol}</h5>
                    <div className="cartitem__edits">
                        <div className="cartitem__amount">
                            <Button className="cartitem__button" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                            <Button className="cartitem__button" onClick={() => onUpdateCartQty(item.id, item.quantity === 10 ? item.quantity : item.quantity + 1)}>+</Button>
                            <Select 
                                className="cartitem__multiple" 
                                value={item.quantity}
                                open={open}
                                onClose={() => setOpen(false)}
                                onOpen={() => setOpen(true)}
                                onChange={(e) => onUpdateCartQty(item.id, e.target.value)}>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                            <MenuItem value="6">6</MenuItem>
                            <MenuItem value="7">7</MenuItem>
                            <MenuItem value="8">8</MenuItem>
                            <MenuItem value="9">9</MenuItem>
                            <MenuItem value="10">10</MenuItem>
                        </Select>
                        </div>
                        <Button className="cartitem__removeButton" onClick={() => onRemoveFromCart(item.id)}>
                            <Delete className="cartitem__removeIcon" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
