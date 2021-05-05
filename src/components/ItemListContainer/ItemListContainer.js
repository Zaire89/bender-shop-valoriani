import React, {useState, useEffect} from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

import {getFirestore} from "../../firebase";

import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {


    const [producto, setProductos] = useState([])

    const {categoriaId} = useParams()

    
    useEffect(() => {

        let filtroCat
        const db = getFirestore();
        const itemsCollection = db.collection('producto');
        
        if (categoriaId){
            filtroCat = itemsCollection .where('categoria', '==', categoriaId)
        } else {
            filtroCat = itemsCollection;
        }

            const filtrado = filtroCat.get();


        filtrado.then((snapshot)=>{
            if (snapshot.size > 0){
                console.log(snapshot.docs.map(doc => doc.data()))

                setProductos(snapshot.docs.map(doc => {
                return {id:doc.id, ...doc.data()}
                }
                ))
            }
        })
        
 
         
      
    }, [categoriaId])

        
    

    return (
        
        <div>
            
            <h1> {props.presenta} {categoriaId} </h1>
           
            <div  class="container-fluid row">
                <ItemList producto={producto}/>
            </div>

        </div>
    )

    
}

export default ItemListContainer;