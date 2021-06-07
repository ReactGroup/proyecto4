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
    // const [pagination, setPagination] = useState(true);
    const [pages, setPages] = useState(0);
    const [current, setCurrent] = useState(0);
    const size = 16;

    useEffect(()=>{
        setPages(Math.ceil(productList.length/size));
        setCurrent(0)
        console.log("text random")
    },[productList.length])


    // const pageSlice = pagination ? productList.slice(16,32) : productList.slice(0,16);

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
                productList={productList.slice(current*size,current*size+size)}
            />
            <Paginador
                pages={pages}
                current={current}
                handlePaginador={handlePaginador}
            //productList={productList}
            //pagination={pagination}
            //setPagination={setPagination}
            //numberPag={numberPag}
            />
        </div>
    );


    function filter(selected){
        setProductList(selected)
    }

    function btnReset() {
        setProductList(productsItems);
    };

    function handlePaginador(newPage){
        setCurrent(newPage);
    };

};

export default Productos;