import './productos.css';
import React from 'react'
import ProductCard from './ProductCard'

// Hooks, roots, etc
import { Route, Link, useParams} from 'react-router-dom';
import { useState, useEffect} from "react";

//imagenes
import next from '../images/icons/arrow-right.svg'


function Productos({productsItems}){

    return (
        <div className="productos">
            <div className="portada"></div>
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
                {productsItems.map((product) =>
                <Link to ={`producto/${product._id}`} style={{ textDecoration: 'none' }}>
                    <ProductCard 
                    product={product}
                    {...product}/>
                </Link>
                )}
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