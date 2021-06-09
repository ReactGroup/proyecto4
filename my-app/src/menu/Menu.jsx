import { Link, Route, useParams } from 'react-router-dom';
import React, {useContext} from 'react'

//imagenes
import coin from '../images/icons/coin.svg';
import {coinContext} from '../contexts'
import menu from './menu.css'

export default function Menu({userData}){
    const {coins} = useContext(coinContext);
    return(
        <>
            <header className="header">
                <div className="width-1440px" >
                <Link to="/proyecto4">
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
                            <p>{coins}</p>
                        </div>
                    </li>
                </ul>
                </div>
            </header>
            

        </>
    )
}