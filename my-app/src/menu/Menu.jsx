import React from 'react'
import menu from './menu.css'
import { Route, Link, useParams } from 'react-router-dom';

//imagenes
import coin from '../images/icons/coin.svg';

export default function Menu({userData}){
    return(
        <header>
            <div className="max-1440">
            <Link to="/">
                <img src="" alt="Logo"/>
            </Link>
            <nav className="principal-header">
                <ul>
                    <li>
                    <Link style={{ textDecoration: 'none', color:'black' }} to="/mas-creditos">Más Creditos</Link>
                    </li> 
                    <li>
                    <Link style={{ textDecoration: 'none', color:'black' }} to="/historial">Historial</Link>
                    </li>
                </ul>
                <div className="profile">
                <h4>{userData.name}</h4>
                <div className="coins-amount">
                    <img src={coin} alt="Coin"/>
                    <p>{userData.points}</p>
                </div>
                </div>
            </nav>  
            </div>
      </header>
    )
}