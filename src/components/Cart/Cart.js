import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import '../Cart/Cart.css' 
import { CartContext } from '../../context/CartContext';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore, getFirebase} from '../../firebase';
import logo01 from '../../components/logo01.png';



export const Cart = () => {

    
    const [nombre, setNombre] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [emailValidator, setEmailValidator] = useState('')
    const [idOrder, setIdOrder] = useState(null)
    const { cart, totalIt, totalSub, removeItem, clear, } = useContext(CartContext);

    
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
                    precio: cartItem.item.precio,
                    cantidad: cartItem.cantidad};
        });

        ordersCollection
        .add({buyer: buuuyer, items, fecha, total:totalSub })
        .then (doc=> {
            setIdOrder(doc.id)
            console.log(setIdOrder)
            resetDatos()
            setEmailValidator()
        })


        const resetDatos  = (e) => {
            setNombre("")
            setTel("")
            setEmail("")
            setEmailValidator("")
        }


      
        setTimeout(()=>{   
            clear()
        }, 3000)

    }




    if(cart===0) return( 
    <h1 id="msg-cart">Tu carrito de compras esta vacío <br/>    
    <Link to='/' >
        <img src={logo01}  className="loguito"></img>
    </Link></h1>
    ) 


    
 
        
    return (
        
        <div className="carrito">
            <h1>Tu carrito</h1>
            <table>
                <thead>
                    <tr class='item_carrito'>
                        <th style={{width:'100px'}} scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
            

                <tbody>
                   
                    {
                        cart.map(cartItem => (
                            
                            <tr key={cartItem.item.id} >
                                <td className='datos'>
                                    <h5>{cartItem.item.titulo}</h5>
                                    <img src={cartItem.item.imagen}  width="90" height="100" alt='imgItem'></img>
                                </td>
                                <td>x{cartItem.cantidad}</td>
                                <td>${cartItem.cantidad * cartItem.item.precio}</td>
                                
                                
                                <td class="d-flex justify-content-center"><Link className="button-cart btn btn-dark" onClick={()=> removeItem(cartItem.item.id) }>
                                <span class="iconify" data-icon="fluent:delete-20-regular" data-inline="false" id="iconify-del"></span>
                                    </Link></td>
                            
                            </tr>
                            
                            
                            
                        ))
                    
                    }
                </tbody>
                    
                <thead>
                
                    <tr className="valores">
                        <th><h4> TOTAL DE TU COMPRA: </h4></th>
                        <th><h4> {totalIt}</h4></th>
                        <th><h4>${totalSub}</h4></th>
                       
                    </tr>
                    <tr className='delete'>
                        <th onClick={clear}><button  className="delete-todo btn btn-dark">Borrar Todo</button></th>
                    </tr>
                </thead>

            </table>
            
            
            <form action="" onSubmit={keepOrder} class="dflex column" >
            
                <h5 className="orrrden">
                    {idOrder? `Gracias por tu compra${nombre}! Tu código es: ${idOrder}`: null }
                </h5>

                <h4 class="pb-3">Iniciar Compra</h4>
                
                <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder="Nombre y Apellido" required ></input>
               
                <input type="number" value={tel} onChange={(e)=>setTel(e.target.value)} placeholder="Teléfono" required ></input>

                
              
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="E-mail" required ></input>
                <input type="email" value={emailValidator} onChange={(e)=>setEmailValidator(e.target.value)} placeholder="Repita su e-mail" required ></input>      
                    {email !== emailValidator ? <p class="pb-4" style={{ color: 'red'}}> Las direcciones de e-mail deben coincidir para corroborar. </p>: true }
                
                <button className="button-buy btn btn-dark" type="submit"  ><h5>¡COMPRAR!</h5></button>
            </form>
        </div>
    )




}

export default Cart;