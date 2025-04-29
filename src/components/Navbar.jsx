import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import '../App.css';

function Navbar(){
    const {theme } = useTheme;

    return(
        <nav style={{ padding: '10px', background: theme === 'light' ? '#eee' : '#333', color: theme === 'light' ? 'black' : 'white' }}>
      <Link to="/" style={{ marginRight: '10px', color: theme === 'light' ? 'black' : 'white' }}>Home</Link>
      <Link to="/dashboard" style={{ marginRight: '10px', color: 'inherit' }}>Dashboard</Link>
      <Link to="/login" style={{ marginRight: '10px', color: theme === 'light' ? 'black' : 'white' }}>Login</Link>
      <Link to="/signup" style={{ color: theme === 'light' ? 'black' : 'white' }}>SignUp</Link>
      <div style={{ display: 'inline-block', marginLeft: '1000px' }}>
        <ThemeSwitcher />
      </div>
        </nav>
    );
}

export default Navbar;