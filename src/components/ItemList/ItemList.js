import React from 'react';
import Item from '../Item/Item';

const ItemList = ({producto=[]}) => {
    return (
        <div class="d-flex justify-content-start mt-5">
            {producto.map(elemento => 
            <div>
            <Item key={producto.id} producto={elemento}/> 
            </div>
            )}
            
        </div>
    )
}

export default ItemList;