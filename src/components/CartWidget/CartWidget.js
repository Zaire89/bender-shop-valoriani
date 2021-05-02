import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import "../CartWidget/CartWidget.css";
import {CartContext} from "../../context/CartContext";


const CartWidget = () => {

    const {totalIt} = useContext(CartContext);
    const {totalSub} = useContext(CartContext);

    return (
        
        <div id="icon-cart" class="btn my-2 my-sm-0 my-lg-0" >
            {totalIt?  
            <div className="num">
                <i className="numerito">{totalIt}</i> 
            </div> 
            : null}
            
            <Link to = '/cart' ><span class="iconify" data-icon="bi:cart-fill" data-inline="false" ></span></Link>
            <div  className="precio-widget">
              {totalSub? <i>${totalSub}</i> : null }
            </div>
            
        </div>


    )
}

export default CartWidget;