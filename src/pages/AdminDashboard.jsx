

// import React, { useState, useEffect } from "react";

// function Admin() {
//   const [authMode, setAuthMode] = useState("login"); // login | signup
//   const [loggedIn, setLoggedIn] = useState(false);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   // Check login from localStorage
//   useEffect(() => {
//     const auth = localStorage.getItem("adminAuth");
//     if (auth === "true") {
//       setLoggedIn(true);
//     }
//   }, []);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const savedUser = localStorage.getItem("adminUser");
//     const savedPass = localStorage.getItem("adminPass");

//     if (username === savedUser && password === savedPass) {
//       localStorage.setItem("adminAuth", "true");
//       setLoggedIn(true);
//     } else {
//       setError("Invalid credentials");
//     }
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();

//     localStorage.setItem("adminUser", username);
//     localStorage.setItem("adminPass", password);
//     localStorage.setItem("adminAuth", "true");
//     setLoggedIn(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("adminAuth");
//     setLoggedIn(false);
//     setUsername("");
//     setPassword("");
//   };

//   if (!loggedIn) {
//     return (
//       <div className="page">
//         <h2>{authMode === "login" ? "Admin Login" : "Admin Signup"}</h2>

//         <form
//           onSubmit={authMode === "login" ? handleLogin : handleSignup}
//           className="login-form"
//         >
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {error && <p className="error">{error}</p>}
//           <button type="submit">
//             {authMode === "login" ? "Login" : "Signup"}
//           </button>
//         </form>

//         <p style={{ marginTop: "10px" }}>
//           {authMode === "login" ? (
//             <>
//               Don’t have an account?{" "}
//               <button onClick={() => setAuthMode("signup")} className="link-btn">
//                 Signup
//               </button>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <button onClick={() => setAuthMode("login")} className="link-btn">
//                 Login
//               </button>
//             </>
//           )}
//         </p>
//       </div>
//     );
//   }

//   // Show dashboard after login
//   return (
//     <div className="page">
//       <h2>Admin Dashboard</h2>
//       <p>Welcome, {localStorage.getItem("adminUser")} 🎉</p>

//       <div className="dashboard-grid">
//         <div className="dashboard-card">📊 User Trends</div>
//         <div className="dashboard-card">📈 Screening Reports</div>
//         <div className="dashboard-card">📞 Counsellor Appointments</div>
//         <div className="dashboard-card">⚙️ Settings</div>
//       </div>

//       <button onClick={handleLogout} className="logout-btn">
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Admin;

// import React, { useState } from "react";
// import "./AdminDashboard.css";

// function AdminDashboard() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   return (
//     <div className="admin-container">
//       {/* Navbar */}
//       <header className="admin-navbar">
//         <h1 className="logo">Admin Dashboard</h1>
//         <button className="login-btn" onClick={handleLogin}>
//           {isLoggedIn ? "Logout" : "Login"}
//         </button>
//       </header>

//       <div className="admin-body">
//         {/* Sidebar */}
//         <aside className="admin-sidebar">
//           <ul>
//             <li>📊 Reports</li>
//             <li>👥 Students</li>
//             <li>⚙ Settings</li>
//           </ul>
//         </aside>

//         {/* Main Dashboard Content */}
//         <main className="admin-main">
//           <h2>Welcome, Admin</h2>

//           <div className="dashboard-cards">
//             <div className="card">
//               <h3>Anonymous Reports</h3>
//               <p>
//                 Overview of overall student well-being trends.
//                 Data collected anonymously to ensure privacy.
//               </p>
//             </div>

//             <div className="card">
//               <h3>Well-Being Trends</h3>
//               <p>📈 Stress: Moderate ↑</p>
//               <p>😊 Positivity: Improving</p>
//               <p>😔 Anxiety: Stable</p>
//             </div>

//             <div className="card">
//               <h3>Policy Suggestions</h3>
//               <ul>
//                 <li>✅ Organize more counseling sessions</li>
//                 <li>✅ Launch mental health awareness campaigns</li>
//                 <li>✅ Create peer support programs</li>
//               </ul>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

// import React, { useState } from "react";
// import "./AdminDashboard.css";

// function AdminDashboard() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   // Simple hardcoded check (frontend only)
//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === "admin" && password === "1234") {
//       setIsLoggedIn(true);
//     } else {
//       alert("Invalid credentials! Try admin / 1234");
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUsername("");
//     setPassword("");
//   };

//   return (
//     <div className="admin-container">
//       {!isLoggedIn ? (
//         // LOGIN PAGE
//         <div className="login-page">
//           <h1>🔑 Admin Login</h1>
//           <form className="login-form" onSubmit={handleLogin}>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       ) : (
//         // DASHBOARD AFTER LOGIN
//         <>
//           {/* Navbar */}
//           <header className="admin-navbar">
//             <h1 className="logo">Admin Dashboard</h1>
//             <button className="login-btn" onClick={handleLogout}>
//               Logout
//             </button>
//           </header>

//           <div className="admin-body">
//             {/* Sidebar */}
//             <aside className="admin-sidebar">
//               <ul>
//                 <li>📊 Reports</li>
//                 <li>👥 Students</li>
//                 <li>⚙ Settings</li>
//               </ul>
//             </aside>

//             {/* Main Content */}
//             <main className="admin-main">
//               <h2>Welcome, Admin</h2>

//               <div className="dashboard-cards">
//                 <div className="card">
//                   <h3>Anonymous Reports</h3>
//                   <p>
//                     Overview of overall student well-being trends.
//                     Data collected anonymously to ensure privacy.
//                   </p>
//                 </div>

//                 <div className="card">
//                   <h3>Well-Being Trends</h3>
//                   <p>📈 Stress: Moderate ↑</p>
//                   <p>😊 Positivity: Improving</p>
//                   <p>😔 Anxiety: Stable</p>
//                 </div>

//                 <div className="card">
//                   <h3>Policy Suggestions</h3>
//                   <ul>
//                     <li>✅ Organize more counseling sessions</li>
//                     <li>✅ Launch mental health awareness campaigns</li>
//                     <li>✅ Create peer support programs</li>
//                   </ul>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default AdminDashboard;

// import React, { useState } from "react";
// import "./AdminDashboard.css";

// function AdminDashboard() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isSignup, setIsSignup] = useState(false); // toggle login/signup
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [users, setUsers] = useState([{ username: "admin", password: "1234" }]); // dummy user

//   // Handle login
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const foundUser = users.find(
//       (user) => user.username === username && user.password === password
//     );
//     if (foundUser) {
//       setIsLoggedIn(true);
//     } else {
//       alert("Invalid credentials! Try admin / 1234 or signup.");
//     }
//   };

//   // Handle signup
//   const handleSignup = (e) => {
//     e.preventDefault();
//     const exists = users.find((user) => user.username === username);
//     if (exists) {
//       alert("Username already exists! Try another.");
//     } else {
//       setUsers([...users, { username, password }]);
//       alert("Signup successful! You can now login.");
//       setIsSignup(false);
//       setUsername("");
//       setPassword("");
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUsername("");
//     setPassword("");
//   };

//   return (
//     <div className="admin-container">
//       {!isLoggedIn ? (
//         // LOGIN / SIGNUP PAGE
//         <div className="login-page">
//           <h1>{isSignup ? "📝 Admin Signup" : "🔑 Admin Login"}</h1>
//           <form
//             className="login-form"
//             onSubmit={isSignup ? handleSignup : handleLogin}
//           >
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button type="submit">{isSignup ? "Signup" : "Login"}</button>
//           </form>

//           <p>
//             {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
//             <span
//               className="toggle-link"
//               onClick={() => {
//                 setIsSignup(!isSignup);
//                 setUsername("");
//                 setPassword("");
//               }}
//             >
//               {isSignup ? "Login" : "Signup"}
//             </span>
//           </p>
//         </div>
//       ) : (
//         // DASHBOARD AFTER LOGIN
//         <>
//           {/* Navbar */}
//           <header className="admin-navbar">
//             <h1 className="logo">Admin Dashboard</h1>
//             <button className="login-btn" onClick={handleLogout}>
//               Logout
//             </button>
//           </header>

//           <div className="admin-body">
//             {/* Sidebar */}
//             <aside className="admin-sidebar">
//               <ul>
//                 <li>📊 Reports</li>
//                 <li>👥 Students</li>
//                 <li>⚙ Settings</li>
//               </ul>
//             </aside>

//             {/* Main Content */}
//             <main className="admin-main">
//               <h2>Welcome, {username}</h2>

//               <div className="dashboard-cards">
//                 <div className="card">
//                   <h3>Anonymous Reports</h3>
//                   <p>
//                     Overview of overall student well-being trends.
//                     Data collected anonymously to ensure privacy.
//                   </p>
//                 </div>

//                 <div className="card">
//                   <h3>Well-Being Trends</h3>
//                   <p>📈 Stress: Moderate ↑</p>
//                   <p>😊 Positivity: Improving</p>
//                   <p>😔 Anxiety: Stable</p>
//                 </div>

//                 <div className="card">
//                   <h3>Policy Suggestions</h3>
//                   <ul>
//                     <li>✅ Organize more counseling sessions</li>
//                     <li>✅ Launch mental health awareness campaigns</li>
//                     <li>✅ Create peer support programs</li>
//                   </ul>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default AdminDashboard;

import React, { useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([{ username: "admin", password: "1234" }]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials! Try admin / 1234 or signup.");
    }
  };

  // Handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    const exists = users.find((user) => user.username === username);
    if (exists) {
      alert("Username already exists! Try another.");
    } else {
      setUsers([...users, { username, password }]);
      alert("Signup successful! You can now login.");
      setIsSignup(false);
      setUsername("");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="admin-container">
      {!isLoggedIn ? (
        // LOGIN / SIGNUP PAGE
        <div className="login-page">
          <h1>{isSignup ? "📝 Admin Signup" : "🔑 Admin Login"}</h1>
          <form
            className="login-form"
            onSubmit={isSignup ? handleSignup : handleLogin}
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">{isSignup ? "Signup" : "Login"}</button>
          </form>

          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              className="toggle-link"
              onClick={() => {
                setIsSignup(!isSignup);
                setUsername("");
                setPassword("");
              }}
            >
              {isSignup ? "Login" : "Signup"}
            </span>
          </p>
        </div>
      ) : (
        // DASHBOARD AFTER LOGIN
        <>
          {/* Navbar */}
          <header className="admin-navbar">
            <h1 className="logo">Admin Dashboard</h1>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <select
                className="language-dropdown"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Hindi">हिंदी</option>
                <option value="Tamil">தமிழ்</option>
                <option value="Telugu">తెలుగు</option>
                <option value="Bengali">বাংলা</option>
                <option value="Gujarati">ગુજરાતી</option>
                <option value="Kannada">ಕನ್ನಡ</option>
                <option value="Malayalam">മലയാളം</option>
                <option value="Marathi">मराठी</option>
                <option value="Punjabi">ਪੰਜਾਬੀ</option>
              </select>

              <button className="login-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </header>

          <div className="admin-body">
            {/* Sidebar */}
            <aside className="admin-sidebar">
              <ul>
                <li>📊 Reports</li>
                <li>👥 Students</li>
                <li>⚙ Settings</li>
              </ul>
            </aside>

            {/* Main Content */}
            <main className="admin-main">
              <h2>Welcome, {username}</h2>
              <p style={{ fontStyle: "italic" }}>
                Selected Language: {selectedLanguage}
              </p>

              <div className="dashboard-cards">
                <div className="card">
                  <h3>Anonymous Reports</h3>
                  <p>
                    Overview of overall student well-being trends.
                    Data collected anonymously to ensure privacy.
                  </p>
                </div>

                <div className="card">
                  <h3>Well-Being Trends</h3>
                  <p>📈 Stress: Moderate ↑</p>
                  <p>😊 Positivity: Improving</p>
                  <p>😔 Anxiety: Stable</p>
                </div>

                <div className="card">
                  <h3>Policy Suggestions</h3>
                  <ul>
                    <li>✅ Organize more counseling sessions</li>
                    <li>✅ Launch mental health awareness campaigns</li>
                    <li>✅ Create peer support programs</li>
                  </ul>
                </div>
              </div>
            </main>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminDashboard;
