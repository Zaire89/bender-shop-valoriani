import React, { useState } from 'react';
import '../ItemCount/ItemCount.css';

/* boton suma o resta: maximo, inicio, funcion boton añadir*/
export function ItemCount ({stock, initial, anyadir}) {
                        {/* parsea* el número, para q no sea 111111*/}
    const [contar, setContar] = useState(parseInt(initial));



    const sumar = () => {
        setContar (contar + 1);
    };

    const restar = () => {
        setContar (contar - 1);
    };

    return (
        
        <div class="row ml-5 mt-3">
            
            <div class="card-body">

                <div class="flex-column d-flex justify-content-around p-2 text-center" >
                    <h5 class="card-title">PRODUCTO 01</h5>

                    <img src="" style={{height:"80px"}}/>

                    <p class="card-text"> Descripción </p>
                </div>
                

                <div class="row d-flex justify-content-around mt-2" >

                    <button disabled={contar <= 0}
                    className="btn btn-dark"
                    type="button"
                    onClick={restar}> - </button>

                    <div><b>{contar}</b></div>
                    
                    <button disabled={contar >= stock}
                    className="btn btn-dark"
                    type="button"
                    onClick={sumar}> + </button>

                </div>

                <div  class="row d-flex justify-content-around pt-3" >
                    <button className="btn btn-secondary w-75"
                    type="button"
                    onClick={anyadir}> Agregar  <span class="iconify" data-icon="icons8:buy" data-inline="false" id="carAnimate"></span></button>
                </div>

            </div>
      

           
         

        </div>
        
    );
    
};

export default ItemCount;