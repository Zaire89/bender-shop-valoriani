import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../ItemDetail/ItemDetail.css';
import ItemCount  from '../ItemCount/ItemCount';
import { CartContext } from "../../context/CartContext";
import Loader  from 'react-loader-spinner';
import InnerImageZoom from 'react-inner-image-zoom'



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
                    
                    <Loader type="TailSpin" color="rgb(248, 214, 151)" height={50} width={50} timeout="500" />
                    <InnerImageZoom className="img-producto" src={producto.imagen} style={{height:"250px"}} />
   
                    <p class="pt-4"> Precio: $ {producto.precio}</p>
                                     
                    <p  class='text-center'> {producto.descripcion} </p>
                </td>
            </tr>
            
          


            {
              contar == 0 ?
                <ItemCount stock={producto?.stock} initial="0" onAdd={agregarAlCarrito} />
             :
                <div class="row d-flex justify-content-around pt-3 mb-4" >
                    <Link to='/cart'>< button className="btn btn-secondary" type="button" > Finalizar Compra </button></Link>
                </div>
            }
            
            
        </div>
    );


};


export default ItemDetail;