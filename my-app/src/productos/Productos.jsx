import './productos.css';
import React, { useState, useEffect } from 'react'
import Results from './Results'
import Filtros from './Filtros'
import Paginador from './Paginador'

//imagenes
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Productos({productsItems,categoryItems}){

    const [productList, setProductList] = useState([]);
    // hooks para paginado;
    const [pages, setPages] = useState(0);
    const [current, setCurrent] = useState(0);
    const size = 16;

    useEffect(()=>{
        setPages(Math.ceil(productList.length/size));
        setCurrent(0)
    },[productList.length])


    useEffect(()=>{
        if(productList.length === 0){setProductList(productsItems)}
    });
    
    return (
        <div className="productos">
            <div className="portada"></div>
            <div className="filter-container">
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
                productList={productList.slice(current*size,current*size+size)}
            />
            <Paginador
                pages={pages}
                current={current}
                handlePaginador={setCurrent}
            />
        </div>
    );


    function filter(selected){
        setProductList(selected)
    }

    function btnReset() {
        setProductList(productsItems);
    };

};

export default Productos;