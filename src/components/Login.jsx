// import React, { useState } from 'react';
// import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// import { auth, googleProvider } from '../firebase';
// import { useNavigate, Link } from 'react-router-dom';
// import './Auth.css'; // optional if using separate CSS

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const login = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/dashboard');
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const googleLogin = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       navigate('/dashboard');
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2 className="login-title">Login</h2>
//         <form onSubmit={login} className="login-form">
//           <input
//             className="login-input"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             required
//           />
//           <input
//             className="login-input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//             required
//           />
//           <button type="submit" className="login-button">Login</button>
//         </form>
//         <button onClick={googleLogin} className="google-button">Login with Google</button>
//         <p className="login-link-text">
//           Don't have an account? <Link to="/signup" className="login-link">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// src/components/Login.jsx
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Auth.css';

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//     navigate('/dashboard');
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleLogin}>
//         <h2>Welcome Back</h2>
//         <p>Login to your account</p>
//         <input type="email" placeholder="Email" required />
//         <input type="password" placeholder="Password" required />
//         <a href="#">Forgot password?</a>
//         <button type="submit">Login</button>
//         <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    navigate('/dashboard');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-app-title">AUTH-APP</div>
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleLogin}>
          <h2>Welcome Back</h2>
          <p>Login to your account</p>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <button type="submit">Login</button>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
