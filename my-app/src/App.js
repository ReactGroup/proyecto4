// fav icon 
// import logo from './logo.svg';
import './App.css';
import Productos from './productos/Productos'
import Creditos from './mas-creditos/Creditos'
import Historial from './historial/Historial'
import Item from './item/Item'
import { Route, Link } from 'react-router-dom';
import coin from './images/icons/coin.svg'



function App() {
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
              <h4>Nombre usuario</h4>
              <img src="" alt=""/>
              <div className="coins-amount">
                <img src={coin} alt="Coin"/>
                <p>1231</p>
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
      <footer>
        <div className="footer-1440">
          <p>Hecho por Tomás Sánchez Soria</p>
          <a href="https://twitter.com/tomi_SS" target="_blank">
            <img src="" alt="Twitter"/>
          </a>
          <a href="https://www.linkedin.com/in/sanchezsoria/" target="_blank">
            <img src="" alt="LinkedIn"/>
          </a>
          <a href="https://github.com/tosaso/" target="_blank">
            <img src="" alt="Gitub"/>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
