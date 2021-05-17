import './productos.css';
import React from 'react'
//import { Route, Link } from 'react-router-dom';

function Productos(){
    return (
        <div className="productos">
            <div className="portada">
                {/* <img src="" alt=""/> */}
            </div>
            <div>
               {/* filtros */} 
            </div>
            <div className="product-container">
                {/* for each productos */} 
                <a className="each-product" href="#dinamic" target="_self">
                    <div className="image-container">
                        <div src="" alt="#product-name" className="image-product"/>
                        <div src="icon ? disponible:a-partir-x-coins" alt="" className="available-price"/>
                    </div>
                    <h5 className="category">Categoria</h5>
                    <h6 className="name-product">Producto</h6>
                </a>
            </div>
        </div>
    );
}

export default Productos;