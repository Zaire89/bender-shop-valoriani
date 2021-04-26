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
        // se conecta a la base de datos
        const db = getFirestore();
        //se guarda en esta variable, la coleccion q quiera
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
        
        <div class="container-fluid">
            
            <h1> {props.presenta} </h1>
            <h2> {categoriaId} </h2>
            <div class="d-flex justify-content-center">
                <ItemList producto={producto}/>
            </div>

        </div>
    )

    
}

export default ItemListContainer;