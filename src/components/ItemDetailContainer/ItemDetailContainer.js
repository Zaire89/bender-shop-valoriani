import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import buzo03 from '../../components/imgs-mercha/buzo03.jpg';

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

    useEffect(() => {
        getProductos().then((res)=> getRep(res))
        return;
    }, [])

    return <ItemDetail producto={producto} />
}



