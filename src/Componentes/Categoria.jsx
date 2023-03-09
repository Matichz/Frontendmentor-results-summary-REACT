import React from "react";
import '../styles/Categoria.css'

export default function Categoria({imagen, titulo, resultado, colorTitulo, colorBackground}) {
    return(
        <div className="contenedor-categorias" style={{backgroundColor:colorBackground}}>
            <img className="icon-categoria" src={require(`../images/icon-${imagen}.png`)} alt="" />
            <h3 className="text-categoria" style={{color:colorTitulo}}>{titulo}</h3>
            <p className="result-categotia">
                <span className="result-categotia-clients">{resultado} </span>
                <span className="limit-tests-clients">/ 100</span>
            </p>
        </div>
    )
}