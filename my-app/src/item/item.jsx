import './item.css';
import React from 'react'
import coin from '../images/icons/coin.svg'
import { useState, useEffect} from "react";


function Item({productsItems}){

    return(
        <section className="item">
            <div className="item-container">
                <img className="picture" src={productsItems.img.hdUrl} alt={productsItems.name}/>
                <div className="info-container">
                    <h4>{productsItems.category}</h4>
                    <h2>{productsItems.name}</h2>
                    <h5>Valor: <img src={coin} alt="coin"/><span>{productsItems.cost}</span></h5>
                    <div>
                        <button>Canjear
                        <img src="" alt="Buy"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="similar-container" >
                  <h5 className="similar-title">Otros productos similares</h5> 
                  <div className="product-container">
                {/* for each productos hasta 4 */} 
                <a className="each-product" href="#dinamic" target="_self">
                    <div className="image-container">
                        <div src="" alt="#product-name" className="image-product"/>
                        <div src="icon ? disponible:a-partir-x-coins" alt="" className="available-price"/>
                    </div>
                    <h5 className="category">Categoria</h5>
                    <h6 className="name-product">Producto</h6>
                </a>
                {/* FIN for each productos */} 
            </div> 
            </div>
        </section>
    );
}

export default Item;