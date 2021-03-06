import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useContext, useState } from "react";

// Componentes
import ProductCard from '../productos/ProductCard'
// Imágenes
import './item.css';
import coin from '../../images/icons/coin.svg'
// Context
import { coinContext } from '../../contexts';

function Item({ productItem,copiaProducts,}){
    const [home, setHome] = useState(false)    
    const {coins, setCoins} = useContext(coinContext)
    const handleRedeem = (productId, cost)=>{
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
        ).then(response=>{ 
            setCoins(coins - cost);
            alert("Exito al comprar"); 
            setHome(true);   
        })
    }
    return(
        <>
        {!productItem || home ?<Redirect to='/'></Redirect>
        :
            <section className="item">
                <div className="item-container">
                    <img className="picture" src={productItem.img.hdUrl} alt={productItem.name}/>
                    <div className="info-container">
                        <h4>{productItem.category}</h4>
                        <h2>{productItem.name}</h2>
                        <h5>Valor: <img src={coin} alt="coin"/><span>{productItem.cost}</span></h5>
                        <div> 
                            { coins >= productItem.cost ? (
                                <button className="btn-canjear" onClick={()=>handleRedeem(productItem._id, productItem.cost)}>Canjear
                                </button>
                            ) : (
                                <>

                                    <h4>Te faltan puntos</h4>
                                    <Link to="/mas-creditos" style={{ textDecoration: 'none' }}>
                                    <p className="link-to-credit">Haciendo click aquí, podrás conseguir más</p>
                                    </Link>

                               </>
                            )
                            }                       
                        </div>
                    </div>
                </div>
                <div className="similar-container" >
                    <h5 className="similar-title">Otros productos similares</h5> 
                    <div className="product-container">
                    {copiaProducts.filter((product) =>
                        product.category === productItem.category
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
        }
        </>
    );
}

export default Item;