import './historial.css';
import React from 'react'
import { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import coin from '../images/icons/coin.svg'


function Historial(){

    const [history, setHistory] = useState([])
    const [searchHistory, setSearchHistory] = useState(false);


    useEffect(() =>{
        let api = fetch("https://coding-challenge-api.aerolab.co/user/history",{
          headers: {
            "Content-type": "application/json",
            "Accept" : "application/json",
             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwNTI3MjliNzc4MTAwMjA5YzVhYWIiLCJpYXQiOjE2MjIxNjgxNzh9.rvgBvfaLqxHZv-gU_GUyFz4c6hIybWT9rihd6MFTnno",
            // prueba con el token del proyecto
            //"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
          }
        });
        api 
        .then((response) => {
          return response.json();
        })
        .then((results) => {
            setHistory(results);
            console.log(results);
            setSearchHistory(false);
        })
      },[]);


    return(
        <section className="historial">
            <div className="historial-container">
                { history.length === 0 &&  (
                <>
                <h4 className="title-history">¿Aún no aprovechaste tus puntos?</h4>
                <button className="btn-history">
                    <Link to="/" style={{ textDecoration: 'none', color:'black' }}>Mirá los premios que tenemos para vos</Link>
                </button>
                </>
                )}
                {history.length > 0 && (
                    history.slice(0, 10
                        ).map((history)=>
                            <div className="history-product">
                                <img className="history-img" src={history.img.url} alt={history.name}/>
                                <h3>{history.name}</h3>
                                <p><img src={coin} alt="Coin"/> {history.cost}</p>
                            </div>
                        )
                )}
            </div>
        </section>
    )
}

export default Historial;
