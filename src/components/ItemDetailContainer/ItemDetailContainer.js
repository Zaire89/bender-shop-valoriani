import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

import {getFirestore} from "../../firebase/index";

import { useParams } from "react-router-dom";


const getProductos = (id) => {

    const db = getFirestore();
    const itemsCollection = db.collection('producto');

    const item = itemsCollection.doc(id)
    return item.get();

}

export default function ItemDetailContainer() {
    const [producto, getRep] = useState([])
    const {itemId} = useParams()

    useEffect(() => {

        getProductos(itemId).then((res)=> {
            if (res.exists) {
                getRep({id:res.id, ...res.data()})
            }
        })
        return;
    }, [itemId])

    return (
     
        <div class="d-flex justify-content-center" >
            {itemId}
            <ItemDetail producto={producto} /> 
        </div>

    ) 

    
}



