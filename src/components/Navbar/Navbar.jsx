import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";

import { Avatar, Button, Badge } from '@material-ui/core'
import { ShoppingCart, Menu } from '@material-ui/icons'

import { MediaQueryContext } from '../../App';
import logo from "../../images/logo512.png";
import profilePic from "../../images/aiam-abadill-profile-pic.jpg"

import "./styles.css";

const Navbar = ({ totalItems }) => {
    const queries = useContext(MediaQueryContext);
    const [menu, setMenu] = useState(false);
    
    return (
        <div className="navbar">
            <div className="navbar__content">
                <div className="navbar__header">
                    <Button component={Link} to="/" className="navbar__button">
                        {queries.isMobile ? 
                        <h2 className="navbar__logoText">computer parts</h2> : 
                        <img className="navbar__logoImage" src={logo} alt="Computer Parts" />} 
                    </Button>
                    <div className="navbar__options">
                        {queries.isDesktop && <div className="navbar__body">
                            <form className="navbar__form">
                                <input type="text" placeholder="Search Parts" className="navbar__searchInput" />
                                <Button className="navbar__searchButton" type="submit">search</Button>
                            </form>
                            <Button component={Link} to="/cart" className="navbar__button">
                                <Badge badgeContent={totalItems} color="error">
                                    <ShoppingCart className="navbar__icon" />
                                </Badge>
                            </Button>
                        </div>}
                        <Button className="navbar__button">
                            <Avatar src={profilePic} className="navbar__avatar" />
                        </Button>
                        {!queries.isDesktop &&
                            <Button className="navbar__button" onClick={() => setMenu(!menu)}>
                                <Badge badgeContent={totalItems} color="error">
                                    <Menu className="navbar__icon" />
                                </Badge>
                            </Button>
                        }
                    </div>
                </div>
                {!queries.isDesktop && menu && 
                    <div className="navbar__body">
                        <form className="navbar__form">
                            <input type="text" placeholder="Search Parts" className="navbar__searchInput" />
                            <Button className="navbar__searchButton" type="submit">search</Button>
                        </form>
                        <Button component={Link} to="/cart" className="navbar__button">
                            <Badge badgeContent={totalItems} color="error">
                                <ShoppingCart className="navbar__icon" />
                            </Badge>
                        </Button>
                    </div>
                }
            </div>
           </div>
    )
}

export default Navbar
