import './productos.css';
import React from 'react'
import portada from '../images/header-x1.png';
import next from '../images/icons/arrow-right.svg'

//import { Route, Link } from 'react-router-dom';

function Productos(){
    return (
        <div className="productos">
            <div className="portada">
                <img src={portada} alt="portada"/>
            </div>
            <div className="filter-container">
               {/* filtros */}
               <form action="">
                    <select name="Categorias" id="">
                        <option value="">category</option>
                    </select>
                    <select name="Ordenar por precio" id="">
                        <option value="">Más bajo primero</option>
                        <option value="">Más alto primero</option>
                    </select>
                    <button>
                        <img src="" alt="erase"/>
                        Borrar filtros
                    </button>
                </form>
            </div>
            <div className="product-container">
                {/* for each productos */} 
                <a className="each-product" href="/{nombre-producto}" target="_self">
                    <div className="image-container">
                        <div src="" alt="#product-name" className="image-product"/>
                        <div src="icon ? disponible:a-partir-x-coins" alt="" className="available-price"/>
                    </div>
                    <h5 className="category">Categoria</h5>
                    <h6 className="name-product">Producto</h6>
                </a>
                {/* for each productos */} 
            </div>
            {/* paginador */} 
            <a className="pagination" href="" target="_self">
                Siguiente
                <img src={next} alt="next"/>
            </a>
            {/* paginador */} 
        </div>
    );
}

export default Productos;