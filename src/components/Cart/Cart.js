import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const Cart = () => {


    const { cart, totalIt, totalSub, removeItem, clear } = useContext(CartContext);



    if(totalIt===0) return( <h1 id="msg-cart">VACÍO<br/><Link to='/'>Ir a Home</Link></h1>)
        
    return (
        <table>
            <thead>
                <tr class='item_carrito'>
                    <th style={{width:'500px'}} scope="col">Vista</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
        

            <tbody>

                {
                    cart.map(cartItem => (
                        <tr>
                            <td>
                                {cartItem.item.titulo}
                                <img src={cartItem.item.imagen}  width="90" height="100" alt='imgItem'></img>
                            </td>
                            <td>{cartItem.quantity}</td>
                            <td>{cartItem.quantity * cartItem.item.precio}</td>
                            <td><button onClick={()=> removeItem(cartItem.item.id) }><Link>BORRAR</Link></button></td>
                        </tr>

                        
                        
                    ))
                    
                }
            </tbody>

            <thead>
                <tr>
                    <th>TOTAL</th>
                    <th>{totalIt}</th>
                    <th>{totalSub}</th>
                    <th onClick={clear}><Link>Eliminar</Link></th>
                </tr>
            </thead>



        </table>
    )




}

export default Cart;