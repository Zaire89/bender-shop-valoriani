import React, {useEffect, useState} from 'react';

const CartContext = React.createContext([]);

const CartPorvider = ( {children} ) => {

    const [cart, setCart] = useState([]);
    const [totalIt, setTotalIt] = useState(0);
    const [totalSub, setTotalSub] = useState();

    useEffect( () => {
        let precio = cart.reduce((acumulador, actual)=>{
            const sub = actual.cantidad * actual.item.precio;
            return acumulador + sub;
        },0)

        let todos = cart.reduce((acumulador, actual)=>{
            return acumulador + actual.cantidad;
        },0);
       
        setTotalIt(todos);
        setTotalSub(precio);

    },[cart])

    const addItem = (newItem, quantity) => {

        const actualItem = cart.findIndex( e => e.item.id === newItem.id)
        if (actualItem < 0 ) {
            setCart(cart => [...cart,
                { item: newItem, cantidad: quantity }]);
        } else {
            let aclararCart = [...cart];
            aclararCart[actualItem].cantidad += quantity;
            setCart(aclararCart);
        }
       
       
    }

    const removeItem = (itemId) => {  
        const nuevoCart = cart.filter(e => e.item.id !== itemId)
        setCart(nuevoCart)
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        const aclItem = cart.find(e=> e.item.id === id)

        return aclItem ? true : false
    }

    return <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, totalIt, totalSub}}>
       {/*  {JSON.stringify(cart)} */}
        {children} </CartContext.Provider>
}


export {CartContext, CartPorvider};