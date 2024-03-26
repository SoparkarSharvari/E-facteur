
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/loginSignupPage';
import Home from './components/Home';
import './App.css'

const App = () => {
    return (
    <div>
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/login"/>} />
            </Routes>
        </Router>
      </div>
    );
};

export default App;
