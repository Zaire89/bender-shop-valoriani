import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const Cart = () => {


    const { cart, addItem, removeItem, clear, isInCart } = useContext(CartContext);
        
    const [totalIt, setTotalIt] = useState(0)
    const [totalSub, setTotalSub] = useState(0)
    
    useEffect( () => {
        let precio=0;
        let todos=0;
        for (const cartItem of cart) {
            todos += cartItem.quantity;
            precio += cartItem.quantity * cartItem.item.precio
        }
        setTotalIt(todos);
        setTotalSub(precio);

    },[cart])

    return(
        <div>
            { !cart.lenght ? 
            <h3>EMPTY</h3> 
            : (<>

                {cart.map(cartItem => 
                    <div key={cartItem.item.id}>
                    <div>Título:{cartItem.item.titulo}</div><div>cantidad:{cartItem.quantity}</div><button onClick={()=> removeItem(cartItem.item.id) }>BORRAR</button>
                    </div>
                )
                }
                
                

                <div> Añadiste: {totalIt} productos.
                    Total de compra: {totalSub}
                    
                    } </div>
                </>
            )}



        </div>
    )
}

export default Cart;