import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import '../Cart/Cart.css' 
import { CartContext } from '../../context/CartContext';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore, getFirebase} from '../../firebase';

export const Cart = () => {

    
    const [nombre, setNombre] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [idOrder, setIdOrder] = useState(null)
    const { cart, totalIt, totalSub, removeItem, clear } = useContext(CartContext);

    
    const keepOrder = (e) => {
        e.preventDefault();
        const buuuyer = {nombre, tel, email}
        console.log(buuuyer)

        
        const db = getFirestore();
        const ordersCollection = db.collection("orders")

        const fecha =  firebase.firestore.Timestamp.fromDate(new Date());
        const items = cart.map((cartItem) => {
            return {id: cartItem.item.id,
                    titulo: cartItem.item.titulo,
                    precio: cartItem.item.precio};
        });

        ordersCollection
        .add({buyer: buuuyer, items, fecha, total:totalSub })
        .then (doc=> {
            setIdOrder(doc.id)
            console.log(setIdOrder)
        })






    }


    if(totalIt===0) return( <h1 id="msg-cart">Tu carrito esta vacío <br/><Link to='/'>Ir a Home</Link></h1>)
        
    return (
        <div className="carrito">

            

            <table>
                <thead>
                    <tr class='item_carrito'>
                        <th style={{width:'500px'}} scope="col">Vista</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
            

                <tbody>
                   
                    {
                        cart.map(cartItem => (
                            
                            <tr key={cartItem.item.id}>
                                <td className='datos'>
                                    <h4>{cartItem.item.titulo}</h4>
                                    <img src={cartItem.item.imagen}  width="90" height="100" alt='imgItem'></img>
                                </td>
                                <td>x{cartItem.cantidad}</td>
                                <td>${cartItem.cantidad * cartItem.item.precio}</td>
                                <td><button className="button-cart" onClick={()=> removeItem(cartItem.item.id) }>Eliminar</button></td>
                            </tr>
                            
                            
                            
                        ))
                        
                    }
                </tbody>
                    
                <thead>
                <hr></hr>
                    <tr>
                        <th>TOTAL DE TUS PRODUCTOS</th>
                        <th>{totalIt}</th>
                        <th>${totalSub}</th>
                       
                    </tr>
                    <tr className='delete'>
                        <th onClick={clear}><button className="button-cart">Borrar Todo</button></th>
                    </tr>
                </thead>

            </table>
            
            
            <form action="" onSubmit={keepOrder}>
            
                <h5 className="orrrden">
                    {idOrder? `Gracias por tu compra! Nº de orden: ${idOrder}`: null}
                </h5>

                <h4>Iniciar Compra</h4>
                nombre
                <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} ></input>
                Teléfono
                <input type="text" value={tel} onChange={(e)=>setTel(e.target.value)} ></input>
                email
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
                <button className="button-cart" type="submit">¡COMPRAR!</button>
            </form>
        </div>
    )




}

export default Cart;