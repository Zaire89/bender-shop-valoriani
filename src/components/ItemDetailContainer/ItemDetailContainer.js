import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

import {getFirestore} from "../../firebase/index";

import { useParams } from "react-router-dom";


const getProductos = (id) => {

    const db = getFirestore();
    const itemsCollection = db.collection('producto');
 
    const itemId = itemsCollection.doc(id)
    console.log(itemId)
    return itemId.get();

}

const ItemDetailContainer = ()=> {
    const [producto, getRep] = useState([])
    const {itemId, otroId} = useParams()
    console.log(itemId)

    useEffect(() => {

        
        getProductos(itemId).then((res)=> {
            if (res.exists) {
                getRep({id:res.id, ...res.data()})
            }
            console.log(itemId)
        })
        return;
    }, [itemId])

    return (
        
        <div class="d-flex justify-content-center" >
            {itemId} - {otroId}
            <ItemDetail producto={producto} /> 
        </div>

    );

    
};


export default ItemDetailContainer;
