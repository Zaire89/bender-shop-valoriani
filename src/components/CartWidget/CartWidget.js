import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import "../CartWidget/CartWidget.css";
import {CartContext} from "../../context/CartContext";


const CartWidget = () => {

    const {totalIt} = useContext(CartContext);

    return (
        
        <div id="icon-cart" class="btn my-2 my-sm-0 my-lg-0" >
            <div className="num">
                {totalIt?  <i className="numerito">{totalIt}</i> : null}
            </div>
            
            <Link to = '/cart' ><span class="iconify" data-icon="bi:cart-fill" data-inline="false" ></span></Link>
            
        </div>


    )
}

export default CartWidget;