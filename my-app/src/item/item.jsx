import './item.css';

import { useContext, useEffect, useState } from "react";

import { Link } from 'react-router-dom';
import ProductCard from '../productos/ProductCard'
import React from 'react'
import coin from '../images/icons/coin.svg'
import { coinContext } from '../contexts';

function Item({productsItems,copiaProducts,}){
    const {coins, setCoins} = useContext(coinContext)
    const handleRedeem = (productId, cost)=>{
        console.log(productId, cost);
        //llamar a la api y pasarle el productId
    //     const postCost = async () => {
    //         const response = await fetch("https://coding-challenge-api.aerolab.co/redeem",{
    //         method: "POST",   
    //         headers: {
    //                      "Content-Type": "application/json",
    //                      "Accept" : "application/json",
    //                      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwNTI3MjliNzc4MTAwMjA5YzVhYWIiLCJpYXQiOjE2MjIxNjgxNzh9.rvgBvfaLqxHZv-gU_GUyFz4c6hIybWT9rihd6MFTnno",
    //                  },
    //                  body: JSON.stringify({
    //                     "productId": productId
    //                  })
    //              })
    //              response.json(); 
    //   }
        fetch("https://coding-challenge-api.aerolab.co/redeem",
            {
                method: "POST",   
                headers: {
                            "Content-Type": "application/json",
                            "Accept" : "application/json",
                            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwNTI3MjliNzc4MTAwMjA5YzVhYWIiLCJpYXQiOjE2MjIxNjgxNzh9.rvgBvfaLqxHZv-gU_GUyFz4c6hIybWT9rihd6MFTnno",
                        },
                        body: JSON.stringify({
                            "productId": productId
                        })
            }
        ).then(response=>{ //si entro aca, significa que se completo la peticion correctamente
            // si nos reponde con 200 entonces restamos el costo a las monedas.
            setCoins(coins - cost)    
        })
        // ).catch(error=>{
        //     //Ocurrio un error        
        // })
    }
    return(
        <section className="item">
            <div className="item-container">
                <img className="picture" src={productsItems.img.hdUrl} alt={productsItems.name}/>
                <div className="info-container">
                    <h4>{productsItems.category}</h4>
                    <h2>{productsItems.name}</h2>
                    <h5>Valor: <img src={coin} alt="coin"/><span>{productsItems.cost}</span></h5>
                    <div> 
                        { coins >= productsItems.cost ? (
                            <button onClick={()=>handleRedeem(productsItems._id, productsItems.cost)}>Canjear
                            <img src="" alt="Buy"/>
                            </button>
                        ) : (
                            <h4>Te faltan puntos</h4>
                        )

                        }                       
                        
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