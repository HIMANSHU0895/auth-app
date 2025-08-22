// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { auth } from '../firebase';
// import { useNavigate, Link } from 'react-router-dom';
// import './Auth.css'; // optional if using a separate file

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const signup = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       await updateProfile(userCredential.user, { displayName: name });
//       alert(`Signup complete! Welcome, ${name}.`);
//       navigate('/dashboard');
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         <h2 className="signup-title">Create Account</h2>
//         <form onSubmit={signup} className="signup-form">
//           <input
//             className="signup-input"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Name"
//             required
//           />
//           <input
//             className="signup-input"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             required
//           />
//           <input
//             className="signup-input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//             required
//           />
//           <button type="submit" className="signup-button">Register</button>
//         </form>
//         <p className="signup-link-text">
//           Already have an account? <Link to="/" className="signup-link">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;


// src/components/Signup.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSignup}>
        <h2>Create Account</h2>
        <p>Create your account</p>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email id" required />
        <input type="password" placeholder="Password" required />
        <a href="#">Forgot password?</a>
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/">Login here</Link></p>
      </form>
    </div>
  );
};

export default Signup;
