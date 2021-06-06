import './productos.css';
import React, { useEffect } from 'react'
import Results from './Results'
import Filtros from './Filtros'
import Paginador from './Paginador'

// Hooks, roots, etc
import { useState } from "react";

//imagenes
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Productos({productsItems,categoryItems}){

    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState(true); //page para dami

    const pageSlice = pagination ? productList.slice(16,32) : productList.slice(0,16);

    // para mostrar productos de manera inicial
    //let [incial, setInicial] = useState(productsItems);
    //console.log(productsItems);

    useEffect(()=>{
        if(productList.length === 0){setProductList(productsItems)}
    });
    
    return (
        <div className="productos">
            <div className="portada"></div>
            <div className="filter-container">
               {/* filtros */}
               <form className="filters flex">
                    <Filtros
                    productList={productList}
                    categoryItems={categoryItems}
                    filter={filter}
                    />
                    <button type="reset" onClick={btnReset}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                        Borrar filtros
                    </button>
                </form>
            </div>
            <Results 
                productList={productList}
                pagination={pagination}
            />
            <Paginador
            productList={productList}
            pagination={pagination}
            setPagination={setPagination}
            //numberPag={numberPag}
            />
        </div>
    );


    function filter(selected){
        setProductList(selected)
    }

    //function numberPag(e){
    //    setPagination(e)
    //}

    function btnReset() {
        setProductList(productsItems);
    };

    

};

export default Productos;