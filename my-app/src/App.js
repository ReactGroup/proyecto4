// fav icon 
// import logo from './logo.svg';
import './App.css';

// Hooks, roots, etc
import { Link, Route, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";

import Creditos from './mas-creditos/Creditos'
import Footer from './footer/Footer'
import Historial from './historial/Historial'
import Item from './item/item'
// Componentes
import Menu from './menu/Menu'
import Productos from './productos/Productos'
import { coinContext } from './contexts';

function App() {

  const {setCoins} = useContext(coinContext)
  const [userData, setUserData] = useState([])
  
  useEffect(() =>{
    let api = fetch("https://coding-challenge-api.aerolab.co/user/me",{
      headers: {
        "Content-type": "application/json",
        "Accept" : "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwNTI3MjliNzc4MTAwMjA5YzVhYWIiLCJpYXQiOjE2MjIxNjgxNzh9.rvgBvfaLqxHZv-gU_GUyFz4c6hIybWT9rihd6MFTnno",
      }
    }) 
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      setUserData(results);
      setCoins(results.points);
    })
  },[]);

  /* listado de productos */

  let [productsItems, setProductsItems] = useState([])
  let [categoryItems, setCategoryItems] = useState([])
  
  useEffect(()=>{
      let api = fetch("https://coding-challenge-api.aerolab.co/products",{
          headers: {
              "Content-type": "application/json",
              "Accept" : "application/json",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
          }
      })
      .then((response) => {
      return response.json();
      })
      .then((results) => {
          setProductsItems(results);
          setCategoryItems(results)
      })
  },[]);
  let copiaProducts = [...productsItems]

  return (
    <div className="App">
      <Menu userData={userData} />
        <Route exact path="/">
          <Productos
            productsItems={productsItems}
            categoryItems={categoryItems}
          />
        </Route>
        <Route exact path="/mas-creditos">
          <Creditos />
        </Route>
        <Route exact path="/historial">
          <Historial />
        </Route>
        <Route exact path="/producto/:id" render={({match}) => (
          <Item 
            copiaProducts={copiaProducts}
            productItem={productsItems.find(p => p._id === match.params.id)} />
        )} />
      <Footer />
    </div>
  );
}

export default App;
