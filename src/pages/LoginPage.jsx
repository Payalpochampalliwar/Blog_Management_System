import React, {useState} from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import '../App.css';

function LoginPage(){
    const {login} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        const savedUser = JSON.parse(localStorage.getItem('user'));

        if (!savedUser) {
            alert('No user found. Please signup first.');
            return;
          }
      
          if (email === savedUser.email && password === savedUser.password) {
            login(); // Call the login function (set isAuth true)
            alert('Login Successful!');
            navigate('/dashboard');
          } else {
            alert('Invalid Credentials. Please check your email and password.');
          }
        }

    return (
    <div style={{ padding: '20px' }}>
      <h1>Login Here!</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>
        <button type="submit">Login</button>
      </form>
        </div>
    );
}

export default LoginPage;