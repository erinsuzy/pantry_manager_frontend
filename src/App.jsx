import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';
import Recipes from './pages/Recipes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/items">Items</Link></li>
                        <li><Link to="/recipes">Recipes</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/items" element={<Items />} />
                    <Route path="/recipes" element={<Recipes />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
