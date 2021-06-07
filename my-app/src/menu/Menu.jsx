import React from 'react'
import menu from './menu.css'
import { Route, Link, useParams } from 'react-router-dom';

//imagenes
import coin from '../images/icons/coin.svg';

export default function Menu({userData}){
    return(
        <>
           
            <header className="header">
                <div className="width-1440px" >
                <Link to="/">
                    <img src="" className="logo" alt="Logo"/>
                </Link>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                <ul className="menu">
                    <li>
                        <Link style={{ textDecoration: 'none', color:'black' }} to="/mas-creditos">Más Creditos</Link>
                    </li> 
                    <li>
                        <Link style={{ textDecoration: 'none', color:'black' }} to="/historial">Historial</Link>
                    </li>
                    <li className="data-container">
                        <h4 className="nombre-data">{userData.name}</h4>
                        <div className="coins-amount flex">
                            <img src={coin} alt="Coin"/>
                            <p>{userData.points}</p>
                        </div>
                    </li>
                </ul>
                </div>
            </header>
            

        </>
    )
}