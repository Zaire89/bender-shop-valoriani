import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../ItemDetail/ItemDetail.css';
import ItemCount  from '../ItemCount/ItemCount';
import { CartContext } from "../../context/CartContext";



const ItemDetail = ({producto}) => {
    console.log(producto)

    const [contar, setContar] = useState(0);
    const {addItem} = useContext(CartContext);




    const agregarAlCarrito = (contar) => {
        addItem(producto, contar)
        setContar(contar)
    }

    


    return(
        
        

        <div class='d-flex justify-content-center' className="tarjeta-detalle">
               
            <tr>
                <td class='text-center'>
                    <h1>{producto.titulo}</h1>
                    <img src={producto.imagen} style={{height:"250px"}} />
                    <p> Precio: $ {producto.precio}</p>
                </td>
            </tr>
            
          

            {/*  llaves = avisa q es Javascript 
            FUNCION IF - ELSE  ------- un ternario (3partes: 1condicion IF - Resultado p eso - Opuesto ELSE con su Resultado  */}
            {
              contar == 0 ?
                <ItemCount stock="15" initial="0" onAdd={agregarAlCarrito} />
             :
                <div class="row d-flex justify-content-around pt-3" >
                    <Link to='/cart'>< button className="btn btn-secondary" type="button" > Finalizar Compra </button></Link>
                </div>
            }
            
            
        </div>
    );


};


export default ItemDetail;