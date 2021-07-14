
import { useState } from "react";

export function Counter(){

   let [contador , setContador] = useState(0);
    
    // function sumar(){

    //     setContador(contador + 1)
    // }

    return (

        <div>
            <h2>{contador}</h2>
            <button type="button" onClick={()=> setContador(contador +1)}>sumar</button>
        </div>
        )
} 