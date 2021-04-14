import React, {useState} from 'react';

export const cartContext = React.createContext({});

export const CartPorvider = ( {children} ) => {

    const [cart, setCart] = useState({})

    const addItem = (newItem, quantity) => {
        const actualItem = cart.findIndex( e=> e.item.id === newItem.id)
        if (actualItem === -1) {
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
        const actualItem = cart.find(e=> e.item.id === id)

        return actualItem ? true : false
    }

    return <cartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
        {children} </cartContext.Provider>
}