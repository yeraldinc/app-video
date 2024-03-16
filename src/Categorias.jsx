
import React from 'react'
import "./Categorias.css";


function Categorias({title ="título por defecto", description="descripcion por defecto"}) {
  return (
    <div className="Categorias">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Categorias