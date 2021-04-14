import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../ItemDetail/ItemDetail.css';
import ItemCount  from '../ItemCount/ItemCount';
import { cartContext } from "../../context/CartContext";

export default function ItemDetail({producto}) {

    const {item} = useParams()
    const {addItem} = useContext(cartContext);

    const [contar, setContar] = useState(0);

    const contador = (e) => {
        console.log ('Hay' +  e  + 'productos agregados' )
        setContar(e)
    };

    const cerrarCompra = () => {
        addItem(producto, contar)
    }
  
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
            

            {/*  llaves = avisa q es Javascript 
            FUNCION IF - ELSE  ------- un ternario (3partes: 1condicion IF - Resultado p eso - Opuesto ELSE con su Resultado  */}
            {
              contar == 0 ?
                <ItemCount stock="15" initial="0" onAdd={contador} />
             :
                <div class="row d-flex justify-content-around pt-3" >
                    <Link to='/Cart'>< button className="btn btn-secondary" type="button" onClick={cerrarCompra}> Confirmar Compra </button></Link>
                </div>
            }
            

            {item}
            
        </div>
    )
}
