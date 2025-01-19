import React, { useState, useMemo } from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import bg from './img/bg.png';
import { MainLayout } from './Styles/Layout';
import Orb from "./components/Orb/Orb";
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Income/Income';
import Expenses from './components/Expenses/Expenses';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/Landing page/LandingPage.jsx';
import Layout from './Layout.js';
import Signup from './components/Login/Signup.js';
import Login from './components/Login/Login.js';
import Outlet from './Outlet'; // Import the Outlet component

function App() {
  const [active, setActive] = useState(1);
  const [isLandingPageVisited, setIsLandingPageVisited] = useState(false);

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <Router>
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <MainLayout>
          {/* Render Navigation only when isLandingPageVisited is true */}
          {isLandingPageVisited && <Navigation active={active} setActive={setActive} />}
          <Routes>
            <Route path="/" element={<LandingPage onVisited={() => setIsLandingPageVisited(true)} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* Route to Outlet component upon successful login */}
            <Route path="/Outlet" element={<Outlet />} />
            {/* Redirect to dashboard if already logged in */}
            {isLandingPageVisited && <Route path="*" element={<Navigate to="/dashboard" />} />}
            {/* Redirect to landing page if the URL is invalid */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </MainLayout>
      </AppStyled>
    </Router>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;