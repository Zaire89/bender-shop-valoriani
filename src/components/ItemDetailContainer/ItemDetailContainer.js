import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import buzo03 from '../../components/imgs-mercha/buzo03.jpg';

import { useParams } from "react-router-dom";

const getProductos = () => {


    return new Promise((res) => {
        setTimeout(() => {
            res({
                titulo: "producto 1",
                imagen: buzo03,
                precio: 500,
   
            })
        }, 2000)
    })


}

export default function ItemDetailContainer() {
    const [producto, getRep] = useState(null)

    const {itemId, otroId} = useParams()

    useEffect(() => {
        getProductos().then((res)=> getRep(res))
        return;
    }, [])

    return <> {itemId} - {otroId}

    <div class="d-flex justify-content-center" >
        <ItemDetail producto={producto} /> 
    </div>
    
    </>
}



