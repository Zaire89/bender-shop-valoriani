import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Item/Item.css';
import Loader  from 'react-loader-spinner';




export const Item = ({producto}) => {


    const [imagen, setImg] = useState('');

   
    return (

        <div id="tarjeta" >
            <div class="card-body column m-3 ">
                
                <Link to={`/producto/${producto.id}`} className="link" style={{ textDecoration: 'none'}}>
                
                    <div id="divItem" class="flex-column d-flex justify-content-around p-2 text-center" >
                        
                       
                    <img src={producto.imagen} style={{height:"212px"}} value={imagen} onChange={setImg} />
                    
                    { imagen === null ? 
                        <Loader type="TailSpin" color="rgb(248, 214, 151)" height={50} width={50} timeout="2000" /> 
                        : true
                    }

                        <h5 class="card-title">{producto.titulo}</h5>
                        
                        <p class="card-text">${producto.precio}</p>
                    </div>

                </Link>

                
            </div>
        </div>
    )
}

export default Item;