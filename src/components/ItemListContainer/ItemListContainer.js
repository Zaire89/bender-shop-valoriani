import React, {useState, useEffect} from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import List from '../List';
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {


    const [producto, setProductos] = useState([])

    const {categoriaId} = useParams()

    
    useEffect(() => {

        const grupo = new Promise((res, rej) => {
            setTimeout(() => {
                if (categoriaId) {
                    const prodFiltrados = List.filter((producto) => {
                        return producto.categoria === categoriaId;
                    });
                    res (prodFiltrados);
                } else {
                    res (List);
             
                }
            },2000)
        })

        grupo.then((listadoLimpio) => {
            setProductos(listadoLimpio);
        })
        
         
      
    }, )

        
    

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