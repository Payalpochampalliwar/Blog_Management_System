import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import Dashboard from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
