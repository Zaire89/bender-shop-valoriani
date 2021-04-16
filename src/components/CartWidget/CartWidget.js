import React, { useContext } from 'react';
import "../CartWidget/CartWidget.css";
import {CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {totalItems} = useContext(CartContext);

    return (
        <div id="icon-cart" class="btn my-2 my-sm-0 my-lg-0" >
            { totalItems?  
            <span class="iconify" data-icon="bi:cart-fill" data-inline="false"></span>: null
            }
        </div>

    )
}

export default CartWidget;