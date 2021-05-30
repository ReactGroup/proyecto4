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
import { Route, Link, useParams } from 'react-router-dom';
import { useState, useEffect} from "react";

//imagenes
import coin from './images/icons/coin.svg';


function App() {


  const [userData, setUserData] = useState([])

  useEffect(() =>{
    let api = fetch("https://coding-challenge-api.aerolab.co/user/me",{
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
      setUserData(results);
    })
  },[]);

  /* listado de productos */

  let [productsItems, setProductsItems] = useState([])
  useEffect(()=>{
      let api = fetch("https://coding-challenge-api.aerolab.co/products",{
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
          setProductsItems(results);
      })
  },[]);
  let copiaProducts = productsItems



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
        <Route exact path="/">
          <Productos
            productsItems={productsItems}
          />
        </Route>
        <Route exact path="/mas-creditos">
          <Creditos />
        </Route>
        <Route exact path="/historial">
          <Historial />
        </Route>
        {/* <Route path="/producto/:id" render={(props)=> <Item {...props}/>}/> */}
        <Route exact path="/producto/:id" render={({match}) => (
          <Item 
          copiaProducts={copiaProducts}
            productsItems={productsItems.find(p => p._id === match.params.id)} />
        )} />
      <Footer />
    </div>
  );
}

export default App;
