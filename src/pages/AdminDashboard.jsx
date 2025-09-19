// import React from "react";

// function AdminDashboard() {
//   return (
//     <div className="page">
//       <h2>Admin Dashboard</h2>
//       <p>Anonymous analytics for authorities to track trends.</p>
//     </div>
//   );
// }

// export default AdminDashboard;

import React, { useState, useEffect } from "react";

function Admin() {
  const [authMode, setAuthMode] = useState("login"); // login | signup
  const [loggedIn, setLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check login from localStorage
  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth === "true") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("adminUser");
    const savedPass = localStorage.getItem("adminPass");

    if (username === savedUser && password === savedPass) {
      localStorage.setItem("adminAuth", "true");
      setLoggedIn(true);
    } else {
      setError("Invalid credentials");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem("adminUser", username);
    localStorage.setItem("adminPass", password);
    localStorage.setItem("adminAuth", "true");
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (!loggedIn) {
    return (
      <div className="page">
        <h2>{authMode === "login" ? "Admin Login" : "Admin Signup"}</h2>

        <form
          onSubmit={authMode === "login" ? handleLogin : handleSignup}
          className="login-form"
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
          {error && <p className="error">{error}</p>}
          <button type="submit">
            {authMode === "login" ? "Login" : "Signup"}
          </button>
        </form>

        <p style={{ marginTop: "10px" }}>
          {authMode === "login" ? (
            <>
              Don’t have an account?{" "}
              <button onClick={() => setAuthMode("signup")} className="link-btn">
                Signup
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={() => setAuthMode("login")} className="link-btn">
                Login
              </button>
            </>
          )}
        </p>
      </div>
    );
  }

  // Show dashboard after login
  return (
    <div className="page">
      <h2>Admin Dashboard</h2>
      <p>Welcome, {localStorage.getItem("adminUser")} 🎉</p>

      <div className="dashboard-grid">
        <div className="dashboard-card">📊 User Trends</div>
        <div className="dashboard-card">📈 Screening Reports</div>
        <div className="dashboard-card">📞 Counsellor Appointments</div>
        <div className="dashboard-card">⚙️ Settings</div>
      </div>

      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
}

export default Admin;
