import React, { useState } from 'react';
import '../ItemCount/ItemCount.css';

export function ItemCount ({stock, initial, onAdd}) {
    const [contar, setContar] = useState(parseInt(initial));
   

    const sumar = () => {
        setContar (contar + 1);
    };

    const restar = () => {
        setContar (contar - 1);
    };

    const anyadir = () => {
        onAdd(contar)



    }

    return (
        
        <div >
                        
                <div class="row d-flex justify-content-center mt-2" >

                    <button disabled={contar <= 0}
                    className="btn btn-dark"
                    type="button"
                    onClick={restar}> - </button>

                    <div class="pr-2 pl-2"><b>{contar}</b></div>
                    
                    <button disabled={contar >= stock}
                    className="btn btn-dark"
                    type="button"
                    onClick={sumar}> + </button>

                </div>

                <div  class="row d-flex justify-content-around pt-3 mb-4" >
                    <button className="btn btn-secondary w-75"
                    type="button" disabled={contar < 1 || contar >= stock} onClick={anyadir} 
                    > Agregar  <span class="iconify" data-icon="icons8:buy" data-inline="false" id="carAnimate"></span></button>
                </div>

            </div>
      

         
        
    );
    
};

export default ItemCount;