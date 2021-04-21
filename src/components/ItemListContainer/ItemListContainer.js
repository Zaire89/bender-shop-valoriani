import React, {useState, useEffect} from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

import {getFirestore} from "../../firebase";

import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {


    const [producto, setProductos] = useState([])

    const {id} = useParams()

    
    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = db.collection('producto');
            
        const filtroCat = id ? itemsCollection.where('categoriaId', '==', id) : itemsCollection;

        filtroCat.get().then((snapshot) => {
            console.log('datos')
            
            if (snapshot.size > 0){
                console.log(snapshot.docs.map(doc => doc.data()))

                setProductos(snapshot.docs.map(doc => {
                return {id:doc.id, ...doc.data()}
                }
                ))
            }
    
        })
        
         
      
    }, [id])

        
    

    return (
        
        <div class="container-fluid">
            
            <h1> {props.presenta} </h1>
            <h2> {id} </h2>
            <div class="d-flex justify-content-center">
                <ItemList producto={producto}/>
            </div>

        </div>
    )

    
}

export default ItemListContainer;