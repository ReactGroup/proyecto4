import './creditos.css';
import React, { Component } from 'react';
import coin from '../images/icons/coin.svg'


function Creditos(){
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
                        </div>
                        <button>Canjear</button>
                    </form>
                </div>

            </div>
        </section>
    );
}

export default Creditos;