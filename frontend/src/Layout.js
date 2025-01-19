// Layout.jsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Signup from './components/Login/Signup'
import './components/Login/Login.css';

export default function Layout() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} exact />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    )
}
