import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import '../Cart/Cart.css' 
import { CartContext } from '../../context/CartContext';
import firebase from 'firebase/app';
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

        const fecha = getFirestore().firestore.Timestamp.fromDate(new Date());
        const items = cart.map(cartItem => {
            return {id: cartItem.id, titulo: cartItem.titulo, precio: cartItem.precio}
        });

        ordersCollection
        .add({buyer: buuuyer, items, fecha, total:totalSub })
        .then (doc=> {
            setIdOrder(doc.id)
            console.log(setIdOrder)
        })


        const itemsCollection =db.collection('producto')
        .where(getFirebase().firestore.FieldPath.documentId(), 'in', cart.map(e => e.item.id))

        itemsCollection.get().then(resultado =>{
            //nueva lista de cosass
            const batch = db.batch()

            for (const documento of resultado.docs) {

                const actualStock = documento.data().stock;
                const itemCarrito = cart.find(cartItem => cartItem.item.id == documento.id);
                const cantidadElegida = itemCarrito.quantity;
                const nuevoStock = actualStock - cantidadElegida;

                //actualizacion de lista
                batch.update(documento.ref,
                    {stock: nuevoStock}
                )
            }
            //subir la nueva lista
            batch.commit()
        })




    }


    if(totalIt===0) return( <h1 id="msg-cart">Tu carrito esta vacío <br/><Link to='/'>Ir a Home</Link></h1>)
        
    return (
        <div className="carrito">

            {idOrder? `Compra realizada: ${idOrder}`: null}

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
                                <td><button onClick={()=> removeItem(cartItem.item.id) }>Eliminar</button></td>
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
                        <th onClick={clear}><button>Borrar Todo</button></th>
                    </tr>
                </thead>

            </table>

            <form Submit={keepOrder}>
                <h4>Iniciar Compra</h4>
                nombre
                <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} ></input>
                Teléfono
                <input type="text" value={tel} onChange={(e)=>setTel(e.target.value)} ></input>
                email
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
                <button type="submit">¡COMPRAR!</button>
            </form>
        </div>
    )




}

export default Cart;