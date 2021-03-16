import React from 'react';
import '../ItemListContainer/ItemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <div id="container" >
            
            <h1> Bienvenido a tu carrito {props.name}! </h1>
            
            
        </div>
    )
}

export default ItemListContainer