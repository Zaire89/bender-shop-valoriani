import React from 'react';
import { Link } from 'react-router-dom';
import '../Item/Item.css';
import ItemCount  from '../ItemCount/ItemCount';

const Item = ({producto}) => {
    return (

        <div className="tarjeta" >
            <div class="card-body column m-3" id={producto.id}>
                
                

                    <div class="flex-column d-flex justify-content-around p-2 text-center" >
                        <h5 class="card-title">{producto.titulo}</h5>

                        <img src={producto.imagen} style={{height:"auto"}}/>
                        

                        <p class="card-text">${producto.precio}</p>
                    </div>
                    

            
        
                <ItemCount stock="15" initial="0" />

                <Link to={`/producto/${producto.id}-${producto.titulo}`}> VER MÁS </Link>
            </div>
        </div>
    )
}

export default Item;