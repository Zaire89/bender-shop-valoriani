import React from 'react';
import Item from '../Item/Item';

const ItemList = ({producto=[]}) => {
    return (
        <div class="d-flex justify-content-start mt-5">
            {producto.map(producto => <Item key={producto.id} producto={producto}/> )}
            
        </div>
    )
}

export default ItemList;