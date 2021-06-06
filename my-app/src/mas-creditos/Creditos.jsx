import './creditos.css';
import React, { Component } from 'react';
import { useState } from "react";
import coin from '../images/icons/coin.svg'


function Creditos(){
    let [credits, setCredits]  = useState("")
     const postUser = async () => {
    
            const response = await fetch("https://coding-challenge-api.aerolab.co/user/points",{
            method: "POST",   
            headers: {
                         "Content-Type": "application/json",
                         "Accept" : "application/json",
                         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwNTI3MjliNzc4MTAwMjA5YzVhYWIiLCJpYXQiOjE2MjIxNjgxNzh9.rvgBvfaLqxHZv-gU_GUyFz4c6hIybWT9rihd6MFTnno",
                     },
                     body: JSON.stringify({
                      "amount": credits
                     })
                 })
                 response.json(); 
      }

      function handleClick(e){
        if (e.target.value === "1000"){
            setCredits(1000); 
        }else if(e.target.value === "5000") {
            setCredits(5000); 
        }else if(e.target.value === "7500") {
            setCredits(7500); 
        }
    }

    function handleSubmit(credits){
        postUser(credits) 
        alert("Exito al comprar"); 
        window.location.reload(); 
    }

    return(
        <section className="credito">
            <div className="container-credit">
                <div className="text-container">
                    <h3>Te quedaste sin puntos</h3>
                    <h5>Ahora podés sumar cargando tu nombre de usuario y contraseña</h5>
                    <p>Recuerda que sólo podrás cargar los valores que están prestablecidos</p>
                </div>
                <div className="form-container">
                    <form action="">
                        <input className="input user" placeholder="Usuario" type="text"/>
                        <input className="input pass" placeholder="Contraseña" type="text"/>
                        <div className="btn-container">
                            <div className="flex">
                                <input type="radio" id="1000" name="credit" value="1000" onChange={handleClick} />
                                <label for="1000">1000<img src={coin} alt="Coin"/></label>
                            </div>
                            <div className="flex">
                                <input type="radio" id="5000" name="credit" value="5000" onChange={handleClick} />
                                <label for="5000">5000<img src={coin} alt="Coin"/></label>
                            </div>
                            <div className="flex">
                                <input type="radio" id="7500" name="credit" value="7500" onChange={handleClick} />
                                <label for="7500">7500<img src={coin} alt="Coin"/></label>
                            </div>
                        </div>
                        <button onClick={handleSubmit}>Canjear</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Creditos;