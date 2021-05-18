import './historial.css';
import React from 'react'

function Historial(){
    return(
        <section className="historial">
            <div className="historial-container">
                {/* --- for each ---- */}
                <div className="history-product">
                    <img className="history-img" src="" alt=""/>
                    <h3>Nombre del producto</h3>
                    <p>1234 <img src="" alt=""/></p>
                </div>
            </div>
        </section>
    )
}

export default Historial;
