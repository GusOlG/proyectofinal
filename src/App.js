import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink, useLocation } from 'react-router-dom';
import Home from './components/Home';
import CommunicationProcess from './components/CommunicationProcess';
import TypesOfCommunication from './components/TypesOfCommunication';
import BarriersAndFacilitators from './components/BarriersAndFacilitators';
import Quiz from './components/Quiz';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/process" element={<CommunicationProcess />} />
                <Route path="/types" element={<TypesOfCommunication />} />
                <Route path="/barriers" element={<BarriersAndFacilitators />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </Router>
    );
}

function NavBar() {
    const location = useLocation();

    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/process"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Proceso
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/types"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Tipos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/barriers"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Barreras
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/quiz"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Quiz
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default App;
