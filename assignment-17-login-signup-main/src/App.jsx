import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Logging in with:' : 'Signing up with:', formData);
    alert(`${isLogin ? 'Login' : 'Signup'} successful! Check console.`);
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>{isLogin ? 'Login' : 'Signup'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)} className="toggle">
          {isLogin ? "Don't have an account? Signup" : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );
};

export default App;
