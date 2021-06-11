import './historial.css';

import { useEffect, useState } from "react";

import { Link } from 'react-router-dom';
import Paginador from '../Paginador'
import React from 'react'
import coin from '../../images/icons/coin.svg'

function Historial(){

    const [history, setHistory] = useState([])
    const [searchHistory, setSearchHistory] = useState(false);
    // paginador;
    const [pages, setPages] = useState(0);
    const [current, setCurrent] = useState(0);
    const size = 4;

    useEffect(()=>{
        setPages(Math.ceil(history.length/size));
        setCurrent(0)
    },[history.length])

    useEffect(() =>{
        let api = fetch("https://coding-challenge-api.aerolab.co/user/history",{
          headers: {
            "Content-type": "application/json",
            "Accept" : "application/json",
             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwNTI3MjliNzc4MTAwMjA5YzVhYWIiLCJpYXQiOjE2MjIxNjgxNzh9.rvgBvfaLqxHZv-gU_GUyFz4c6hIybWT9rihd6MFTnno",
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
                <div className="pag-state">
                    <p>Página 
                    <span> {current + 1}</span> de 
                    <span> {pages}</span>
                    </p>   
                </div>
                { history.length === 0 &&  (
                <>
                <h4 className="title-history">¿Aún no aprovechaste tus puntos?</h4>
                <button className="btn-history">
                    <Link to="/" style={{ textDecoration: 'none', color:'black' }}>Mirá los premios que tenemos para vos</Link>
                </button>
                </>
                )}
                {history.length > 0 && (
                    history.slice(current*size, current*size+size)
                    .map((history)=>
                            <div className="history-product" key={history._id}>
                                <img className="history-img" src={history.img.url} alt={history.name}/>
                                <h3>{history.name}</h3>
                                <p><img src={coin} alt="Coin"/> {history.cost}</p>
                            </div>
                        )
                )}
            </div>
            <Paginador
                pages={pages}
                current={current}
                handlePaginador={setCurrent} 
            />
        </section>
    )

}

export default Historial;
