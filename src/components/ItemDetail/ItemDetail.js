import React from 'react';
import { useParams } from 'react-router';
import '../ItemDetail/ItemDetail.css';

export default function ItemDetail({producto}) {

    const {item} = useParams()

    return(
        <div class='d-flex justify-content-center' className="tarjeta-detalle">
            <tr>
                <td class='text-center'>
                    <h1>{producto?.titulo}</h1>
                    <img src={producto?.imagen} style={{height:"400px"}} />
                    <p> Precio: $ {producto?.precio}</p>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam et optio commodi in sapiente, possimus hic repellendus nisi eveniet officiis ipsa, quibusdam excepturi voluptates praesentium saepe, atque deleniti illo quaerat.</p>
                </td>
            </tr>
            
            {item}
            
        </div>
    )
}
