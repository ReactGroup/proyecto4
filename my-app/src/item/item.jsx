import './item.css';
import React from 'react'
import coin from '../images/icons/coin.svg'
import { Link} from 'react-router-dom';
import { useState, useEffect} from "react";

import ProductCard from '../productos/ProductCard'


function Item({productsItems,copiaProducts}){


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
                {copiaProducts.filter((product) =>
                    product.category === productsItems.category
                ).map((product) =>
                    <Link to ={`${product._id}`} style={{ textDecoration: 'none' }}>
                        <ProductCard 
                        product={product}
                        {...product}/>
                    </Link>
                )}
                </div> 
                <div className="back-home">
                    <button className="btn-home-item">
                        <Link to="/" style={{ textDecoration: 'none', color:'black' }}>Mirá los otros premios que tenemos para vos</Link>
                    </button>
            </div>
            </div>

            
        </section>
    );
}

export default Item;