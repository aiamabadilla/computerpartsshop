import React, { createContext, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Products, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";

import "./styles.css";

export const MediaQueryContext = createContext({});

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [loadingProducts, setLoadingProducts] = useState(true)
    const [loadingCart, setLoadingCart] = useState(true)
    
    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity })
    
        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await commerce.products.list();
    
            setProducts(data);
            setLoadingProducts(false);
        }
    
        const fetchCart = async () => {
            const cart = await commerce.cart.retrieve();
    
            setCart(cart);
            setLoadingCart(false);
        }
        fetchProducts();
        fetchCart();
        // eslint-disable-next-line
    },[]);

    console.log(products);
    console.log(cart);

    const queries = {
        isMobile: useMediaQuery({ query: "(min-width: 350px)" }),
        isLaptop: useMediaQuery({ query: "(min-width: 925px)" }),
        isDesktop: useMediaQuery({ query: "(min-width: 1116px)" }),
      };

    return (
        <MediaQueryContext.Provider value={queries} >
            <Router>
                <div className="app">
                    <Navbar totalItems={cart.total_items} />
                    <Switch>
                        <Route exact="true" path="/">
                            <Products products={products} onAddToCart={handleAddToCart} loading={loadingProducts} />
                        </Route>
                        <Route exact="true" path="/cart">
                            <Cart cart={cart} 
                            onUpdateCartQty={handleUpdateCartQty}
                            onRemoveFromCart={handleRemoveFromCart}
                            onEmptyCart={handleEmptyCart} 
                            loading={loadingCart}/> 
                        </Route>
                        <Route exact="true" path="/checkout">
                            <Checkout />
                        </Route>
                    </Switch>
                    <h5 className="app__footer">Copyright © Computer Parts</h5>   
                </div>
            </Router>
        </MediaQueryContext.Provider>
    )
}

export default App
