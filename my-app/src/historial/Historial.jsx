import './historial.css';
import React from 'react'
import coin from '../images/icons/coin.svg'

function Historial(){
    return(
        <section className="historial">
            <div className="historial-container">
                {/* --- for each ---- */}
                <div className="history-product">
                    <img className="history-img" src="" alt=""/>
                    <h3>Nombre del producto</h3>
                    <p><img src={coin} alt="Coin"/> 1234</p>
                </div>
                {/* --- for each ---- */}
            </div>
        </section>
    )
}

export default Historial;
