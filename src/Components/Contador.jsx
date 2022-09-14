import React from "react"
import { useState } from "react";

const Contador = () => {
  
        const [cuenta, setCuenta] = useState(0);
    return(
            <h3 onClick={() => setCuenta(cuenta + 1)}> Componente Contador inicia en: {cuenta} </h3>
    )
 }

export default Contador