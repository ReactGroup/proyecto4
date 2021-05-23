// fav icon 
// import logo from './logo.svg';
import './App.css';

// Componentes
import Productos from './productos/Productos'
import Creditos from './mas-creditos/Creditos'
import Historial from './historial/Historial'
import Item from './item/Item'
import Footer from './footer/Footer'

// Hooks, roots, etc
import { Route, Link } from 'react-router-dom';
import { useState, useEffect} from "react";

//imagenes
import coin from './images/icons/coin.svg';

// get our fontawesome imports
//import { faGithub } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {

  const [userData, setUserData] = useState([])

  useEffect(() =>{
    let api = fetch("https://coding-challenge-api.aerolab.co/user/me",{
      headers: {
        "Content-type": "application/json",
        "Accept" : "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
      }
    });
    api 
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      setUserData(results);
    })
  });


  return (
    <div className="App">
      <header>
        <div className="max-1440">
          <img src="" alt="Logo"/>
          <nav className="principal-header">
            <ul>
              <li>
                <Link to="/">Inicio</Link>
                </li> 
                <li>
                <Link to="/mas-creditos">Más Creditos</Link>
                </li> 
                <li>
                <Link to="/historial">Historial</Link>
                </li>
                <li>
                <Link to="/producto">producto especifico</Link>
                </li> 
            </ul>
            <div className="profile">
              <h4>{userData.name}</h4>
              <img src="" alt=""/>
              <div className="coins-amount">
                <img src={coin} alt="Coin"/>
                <p>{userData.points}</p>
              </div>
            </div>
          </nav>  
        </div>
      </header>
        <Route exact path="/">
          <Productos/>
        </Route>
        <Route exact path="/mas-creditos">
          <Creditos />
        </Route>
        <Route exact path="/historial">
          <Historial />
        </Route>
        <Route exact path="/producto">
          <Item />
        </Route>
      <Footer />
    </div>
  );
}

export default App;
