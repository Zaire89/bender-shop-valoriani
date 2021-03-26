import React from 'react';

export default function ItemDetail({producto}) {
    return(
        <div>
            <tr>
                <td>
                    <h1>{producto?.titulo}</h1>
                    <img src={producto?.imagen} style={{height:"80px"}} />
                    <p>{producto?.precio}</p>
                  
                </td>
            </tr>
            
        </div>
    )
}
