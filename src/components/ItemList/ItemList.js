import React from 'react';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';


const ItemList = ({producto=[]}) => {
    return (
        <div class="cards">
            {producto.map(elemento => 
            <div class="col lg-4  m-l auto m-r auto">
            <Item key={producto.id} producto={elemento}/> 
            </div>
            )}
            
        </div>
    )
}

export default ItemList;