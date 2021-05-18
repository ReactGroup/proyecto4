import './creditos.css';
import React from 'react'

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
                            <button>1.000 <img src="" alt="c"/></button>
                            <button>5.000 <img src="" alt="c"/></button>
                            <button>7.500 <img src="" alt="c"/></button>
                        </div>
                        <button>Canjear</button>
                    </form>
                </div>

            </div>
        </section>
    );
}

export default Creditos;