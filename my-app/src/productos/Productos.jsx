import './productos.css';
import React from 'react'
import ProductCard from './ProductCard'

// Hooks, roots, etc
import { Route, Link } from 'react-router-dom';
import { useState, useEffect} from "react";

//imagenes
import portada from '../images/header-x1.png';
import next from '../images/icons/arrow-right.svg'

function Productos(){

    let [productsItems, setProductsItems] = useState([])

    useEffect(()=>{
        let api = fetch("https://coding-challenge-api.aerolab.co/products",{
            headers: {
                "Content-type": "application/json",
                "Accept" : "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
            }
        });
        api 
        .then((response) => {
        return response.json();
        })
        .then((results) => {
            setProductsItems(results);
        })
    },[]);


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
                {productsItems.map((product) =>
                    <ProductCard 
                    product={product}
                    {...product}/>
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