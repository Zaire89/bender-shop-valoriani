import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getFirestore} from "../../firebase";
import { useParams } from "react-router-dom";



const getProducto = (id) => {
    const db = getFirestore();
    const itemsCollection = db.collection('producto')
    const item = itemsCollection.doc(id)
    
    return item.get();
}




const ItemDetailContainer = ()=> {
    const [producto, setRep] = useState([]);
    const {productoId} = useParams();
    

    

    useEffect(() => {

        getProducto(productoId).then((doc)=> {

            if (doc.exists) {
                console.log('existe?: ',doc.exists)
                setRep({id:doc.id, ...doc.data()})
            }
            console.log({id:doc.id, ...doc.data()})
        })
        return;
    
    }, [productoId])

    

    return (
        
        <div class="d-flex justify-content-center" >
            
        
            <ItemDetail producto={producto}/> 
        </div>

    );
    
    
};


export default ItemDetailContainer;
