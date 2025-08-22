// import React, { useEffect, useState } from 'react';
// import { auth } from '../firebase';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//       } else {
//         navigate('/');
//       }
//     });

//     return () => unsubscribe();
//   }, [navigate]);

//   return (
//     <div>
//       {user ? (
//         <>
//           <h2>Welcome, {user.displayName || 'User'}!</h2>
//           <p>Your UID: {user.uid}</p>
//           <button onClick={() => {
//             auth.signOut();
//             navigate('/');
//           }}>Logout</button>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


// src/components/Dashboard.jsx
import React from 'react';
import './Dashoboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="dashboard-navbar">
        <h2>My Dashboard</h2>
        <a href="/">Logout</a>
      </nav>
      <main className="dashboard-content">
        <div className="dashboard-card">
          <h3>Welcome!</h3>
          <p>This is your personalized dashboard. You can add more features here.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
