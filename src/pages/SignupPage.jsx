import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill all fields');
      return;
    }

    const userData = {
      name,
      email,
      password,
    };

    localStorage.setItem('user', JSON.stringify(userData));
    alert('Signup Successful! Now login.');
    navigate('/login'); 
  }

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup} className="auth-form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
