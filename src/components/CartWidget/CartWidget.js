import React from 'react';
import { Link } from 'react-router-dom';
import "../CartWidget/CartWidget.css";


const CartWidget = () => {


    return (
        <div id="icon-cart" class="btn my-2 my-sm-0 my-lg-0" >
            <Link to = '/cart'><span class="iconify" data-icon="bi:cart-fill" data-inline="false"></span></Link>
        </div>

    )
}

export default CartWidget;