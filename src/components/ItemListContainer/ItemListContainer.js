import React, {useState, useEffect} from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import remera01 from '../../components/imgs-mercha/remera01.jpg';
import taza02 from '../../components/imgs-mercha/taza02.jpg';
import buzo03 from '../../components/imgs-mercha/buzo03.jpg';
import gorra04 from '../../components/imgs-mercha/gorra04.jpg';

const ItemListContainer = (props) => {


    const [producto, setProductos] = useState([])
    
    useEffect(() => {
        const grupo = new Promise((listadoA, listadoB) => {
            setTimeout(() =>{
                listadoA([
                    {id:1, titulo:"Remera", imagen:remera01 , precio:800},
                    {id:2, titulo:"Taza", imagen:taza02, precio:600},
                    {id:3, titulo:"Buzo", imagen:buzo03, precio:1500},
                    {id:4, titulo:"Gorra", imagen:gorra04, precio:750},
                ])
            },2000)
        })

        grupo.then((listadoLimpio) => {
            setProductos(listadoLimpio);
        })
    })

    return (
        <div class="container-fluid">
            
            <h1> {props.presenta} </h1>
            <div class="d-flex justify-content-center">
                <ItemList producto={producto}/>
            
            </div>

        </div>
    )
}

export default ItemListContainer;