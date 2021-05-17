// fav icon 
import logo from './logo.svg';
import './App.css';
import Productos from './productos/Productos'
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <img src="" alt=""/>
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
          <div>
            <img src="" alt=""/>
            <div>
              <img src="" alt=""/>
              <p>Coins</p>
            </div>
          </div>
       </nav>  
        </header>

        <Route exact path="/">
          <Productos/>
        </Route>
        <Route exact path="/mas-creditos">
          <h5> mas creditos</h5>
        </Route>
        <Route exact path="/historial">
          <h5> historial</h5>
        </Route>
        <Route exact path="/producto">
          <h5>producto especifico</h5>
        </Route>
      <footer>
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
      </footer>
    </div>
  );
}

export default App;
