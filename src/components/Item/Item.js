import React from 'react';
import { Link } from 'react-router-dom';
import '../Item/Item.css';

// npm install --save-dev @iconify/react @iconify-icons/ph
import { Icon, InlineIcon } from '@iconify/react';
import magnifyingGlassPlusBold from '@iconify-icons/ph/magnifying-glass-plus-bold';



export const Item = ({producto}) => {
    return (

        <div className="tarjeta" >
            <div class="card-body column m-3">
                <Link to={`/producto/${producto.id}`} className="link" style={{ textDecoration: 'none'}}>
                
                    <div class="flex-column d-flex justify-content-around p-2 text-center" >
                        <h5 class="card-title">{producto.titulo}</h5>
                        <Icon icon={magnifyingGlassPlusBold} className="lupita"/>
                        
                        <img src={producto.imagen} style={{height:"auto"}}/>
                        

                        <p class="card-text pt-4">${producto.precio}</p>
                    </div>
                </Link>

                
            </div>
        </div>
    )
}

export default Item;