import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ItemOne from './components/ItemOne';
import ItemThree from './components/ItemThree';
import ItemTwo from './components/ItemTwo';

function App() {
  return (
    <Router>
      <h1 className='title'>React Chrome Extension</h1>
      <div className='container'>
        <nav>
          <ul className='side-menus'>
            <li>
              <Link to="/itemOne">Item One</Link>
            </li>
            <li>
              <Link to="/itemTwo">Item Two</Link>
            </li>
            <li>
              <Link to="/itemThree">Item Three</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/itemOne" element={<ItemOne />}>
          </Route>
          <Route path="/itemTwo" element={<ItemTwo />}>
          </Route>
          <Route path="/itemThree" element={<ItemThree />}>
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
